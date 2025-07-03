document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleMoreInfo');
  const moreInfoDiv = document.getElementById('moreInfo');

  toggleBtn.addEventListener('click', () => {
    const isHidden = moreInfoDiv.classList.toggle('hidden');
    toggleBtn.setAttribute('aria-expanded', !isHidden);
    toggleBtn.textContent = isHidden ? 'Mostrar más información' : 'Mostrar menos información';
  });
});
