let chartInstances = {}

function toggleForm() {
  document.getElementById("newTargetForm").classList.toggle("hidden")
}

document.querySelectorAll('input[name="startOption"]').forEach(radio => {
  radio.addEventListener("change", () => {
    document.getElementById("pastData").classList.toggle("hidden", radio.value !== "past")
  })
})

function createTarget() {
  const name = document.getElementById("targetName").value.trim()
  const goal = parseFloat(document.getElementById("targetGoal").value)
  const deadline = document.getElementById("targetDeadline").value
  const startOption = document.querySelector('input[name="startOption"]:checked')?.value
  const id = Date.now().toString()

  if (!name || isNaN(goal) || !deadline || !startOption) {
    alert("Por favor completa todos los campos obligatorios.")
    return
  }

  let startDate = new Date()
  let initial = 0

  if (startOption === "past") {
    const pastStart = document.getElementById("targetStartDate").value
    const saved = parseFloat(document.getElementById("initialSaved").value)
    if (pastStart) startDate = new Date(pastStart)
    if (!isNaN(saved)) initial = saved
  }

  const data = {
    id,
    name,
    goal,
    deadline,
    startDate: startDate.toISOString(),
    initial,
    history: []
  }

  saveTarget(data)
  renderTargetCard(data)
  resetForm()
}

function resetForm() {
  document.getElementById("newTargetForm").classList.add("hidden")
  document.getElementById("targetName").value = ""
  document.getElementById("targetGoal").value = ""
  document.getElementById("targetDeadline").value = ""
  document.getElementById("targetStartDate").value = ""
  document.getElementById("initialSaved").value = ""
  document.getElementById("pastData").classList.add("hidden")
}

function saveTarget(data) {
  const all = getAllTargets()
  all[data.id] = data
  localStorage.setItem("targets", JSON.stringify(all))
}

function getAllTargets() {
  return JSON.parse(localStorage.getItem("targets") || "{}")
}

function renderAllTargets() {
  const container = document.getElementById("targetsList")
  container.innerHTML = ""
  Object.values(getAllTargets()).forEach(renderTargetCard)
}

function renderTargetCard(target) {
  const card = document.createElement("div")
  card.className = "target-card"
  card.innerHTML = `
    <span>${target.name}</span>
    <button onclick="openTarget('${target.id}')">Ver</button>
  `
  document.getElementById("targetsList").appendChild(card)
}

function openTarget(id) {
  const target = getAllTargets()[id]
  if (!target) return

  document.querySelectorAll(".glass-container").forEach(e => e.remove())

  const start = new Date(target.startDate)
  const end = new Date(target.deadline)
  const days = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)))
  const labels = Array.from({ length: days }, (_, i) => `Día ${i + 1}`)

  let accumulated = parseFloat(target.initial) || 0
  const daily = (target.goal - accumulated) / days

  const ideal = labels.map((_, i) => (accumulated + daily * (i + 1)).toFixed(2))
  const real = Array(days).fill(null)

  target.history.forEach((entry, i) => {
    accumulated += entry
    real[i] = accumulated.toFixed(2)
  })

  const today = new Date()
  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate())
  const currentDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const maxDayIndex = Math.floor((currentDay - startDay) / (1000 * 60 * 60 * 24))
  const selectableDays = Math.min(days - 1, maxDayIndex)

  let optionsHtml = ""
  for (let i = 0; i <= selectableDays; i++) {
    optionsHtml += `<option value="${i}">Día ${i + 1}</option>`
  }

  const modal = document.createElement("div")
  modal.className = "glass-container"
  Object.assign(modal.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
    maxHeight: "90vh",
    overflowY: "auto",
    backgroundColor: "#222",
    padding: "20px",
    borderRadius: "8px",
    color: "#fff",
    width: "90%",
    maxWidth: "600px",
  })

  modal.innerHTML = `
    <h2>${target.name}</h2>
    <canvas id="chart-${id}" height="200"></canvas>
    <div style="margin-top:20px;">
      <p>Meta: $${target.goal.toFixed(2)}</p>
      <p>Inicio: ${start.toLocaleDateString()}</p>
      <p>Fin: ${end.toLocaleDateString()}</p>
      <p>Días: ${days}</p>
      <p>Ideal por día: $${daily.toFixed(2)}</p>
      <p>Total acumulado: $${accumulated.toFixed(2)}</p>
    </div>
    <div style="margin-top:15px;">
      <label for="day-select">Selecciona el día:</label>
      <select id="day-select">${optionsHtml}</select>
    </div>
    <input type="number" id="input-${id}" placeholder="Monto" style="margin-top:10px; width:100%;" />
    <button onclick="addProgress('${id}')"
      style="margin-top:10px; padding:8px 15px; background:#00ffc8; border:none; cursor:pointer; color:#000; font-weight:bold;">
      Agregar / Actualizar
    </button>
    <ul id="list-${id}" style="margin-top:15px; max-height:150px; overflow-y:auto;">
      ${target.history.map((a, i) => `<li>Día ${i + 1}: +$${a.toFixed(2)}</li>`).join("")}
    </ul>
    <button onclick="this.closest('.glass-container').remove(); location.reload();"
        style="margin-top:10px; padding:8px 15px; background:#ff4081; border:none; cursor:pointer; color:#fff;">
        Cerrar
    </button>

  `
  document.body.appendChild(modal)

  const ctx = document.getElementById(`chart-${id}`).getContext("2d")

  if (chartInstances[id]) {
    chartInstances[id].destroy()
  }

  chartInstances[id] = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Ideal",
          data: ideal,
          borderColor: "#00ffc8",
          borderWidth: 2,
          fill: false
        },
        {
          label: "Real",
          data: real,
          borderColor: "#ff4081",
          borderWidth: 2,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      },
      plugins: {
        legend: {
          labels: { color: "#fff" }
        }
      }
    }
  })
}

function addProgress(id) {
  const input = document.getElementById(`input-${id}`)
  const amount = parseFloat(input.value)
  if (isNaN(amount) || amount <= 0) return

  const daySelect = document.getElementById("day-select")
  const dayIndex = parseInt(daySelect.value)

  const all = getAllTargets()
  const target = all[id]
  if (!target) return

  const startDate = new Date(target.startDate)
  const today = new Date()
  const startDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())
  const currentDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())

  if (dayIndex < 0) {
    alert("Selecciona un día válido.")
    return
  }

  const maxDayIndex = Math.floor((currentDay - startDay) / (1000 * 60 * 60 * 24))
  if (dayIndex > maxDayIndex) {
    alert("No puedes agregar montos para días futuros.")
    return
  }

  if (dayIndex < target.history.length) {
    target.history[dayIndex] = amount
  } else {
    while (target.history.length < dayIndex) {
      target.history.push(0)
    }
    target.history[dayIndex] = amount
  }


  saveTarget(target)
  document.querySelectorAll(".glass-container").forEach(e => e.remove())
  openTarget(id)
}

renderAllTargets()
