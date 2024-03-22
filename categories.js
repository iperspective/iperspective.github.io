document.addEventListener("DOMContentLoaded", function() {
    // Ocultar todas las subcategorías al inicio
    const subcategoryContainers = document.querySelectorAll(".subcategories-container");
    subcategoryContainers.forEach(container => {
        container.style.display = "none";
    });

    // Obtener todas las categorías
    const categories = document.querySelectorAll(".category");

    // Agregar un evento de clic a cada categoría
    categories.forEach(category => {
        category.addEventListener("click", function() {
            const target = this.dataset.target;
            const subcategoryContainer = document.getElementById(`subcategories-container-${target}`);
            
            // Alternar la visibilidad de las subcategorías
            if (subcategoryContainer.style.display === "none") {
                subcategoryContainer.style.display = "block";
            } else {
                subcategoryContainer.style.display = "none";
            }
        });
    });

    // Obtener el botón de alternar
    const toggleButton = document.getElementById("toggleButton");

    // Agregar un evento de clic al botón de alternar
    toggleButton.addEventListener("click", function() {
        // Alternar la visibilidad de todas las subcategorías
        subcategoryContainers.forEach(container => {
            if (container.style.display === "none") {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });
    });
});
