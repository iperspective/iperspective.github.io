document.addEventListener("DOMContentLoaded", function () {
    const sections = [
        { id: "economy.html", title: "Economía" },
        { id: "demographics.html", title: "Demografía" },
        { id: "society.html", title: "Sociedad" },
        { id: "salud.html", title: "Salud" },
        { id: "resources.html", title: "Recursos Naturales" },
        { id: "alfabetizacion.html", title: "Educación" },
        { id: "energy.html", title: "Energía" },
        { id: "agua.html", title: "Agua" },
        { id: "tech.html", title: "Tecnología" },
        { id: "crypto.html", title: "Crypto" },
        
    ];

    // Cargar enlaces de navegación
    const nav = document.getElementById("mainNav");
    sections.forEach((section) => {
        const link = document.createElement("a");
        link.href = `#${section.id}`;
        link.textContent = section.title;
        link.onclick = function () {
            loadSection(section.id);
        };
        const listItem = document.createElement("li");
        listItem.appendChild(link);
        nav.appendChild(listItem);
    });

    // Puedes agregar más lógica según sea necesario

    // Función para cargar el contenido de la sección seleccionada
    function loadSection(sectionId) {
        // Redirigir a la página HTML correspondiente
        window.location.href = sectionId;
    }

    // Función para resaltar la sección actual en la barra de navegación
    function highlightCurrentSection() {
        const sections = document.querySelectorAll("main section");
        const navLinks = document.querySelectorAll("nav a");

        window.addEventListener("scroll", function () {
            let currentSectionId = "";

            sections.forEach((section) => {
                const sectionRect = section.getBoundingClientRect();
                if (sectionRect.top <= 50 && sectionRect.bottom >= 50) {
                    currentSectionId = section.id;
                }
            });

            // Agregar o quitar la clase 'active' en los enlaces de navegación según la sección actual
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });
        });
    }

    // Manejador de clics para los enlaces de navegación
    function handleNavClick(event) {
        event.preventDefault();
        const sectionId = event.target.getAttribute("href").substring(1);
        loadSection(sectionId);
        highlightCurrentSection();
        // Puedes agregar más lógica según sea necesario
    }

    // Puedes seguir agregando más funciones según tus necesidades

    // Agregar eventos a los enlaces de navegación
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", handleNavClick);
    });

    // Cargar contenido y resaltar la sección actual al cargar la página
    highlightCurrentSection();
});

$(document).ready(function(){
    $('#carousel-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true, // Asegura que el carrusel sea infinito
        dots: true, // Agrega indicadores de paginación (puntos)
        prevArrow: false, 
        nextArrow: false,
    });
});

document.addEventListener("DOMContentLoaded", function () {
        var botonesCategorias = document.querySelectorAll(".boton-categoria");

        botonesCategorias.forEach(function (botonCategoria) {
            botonCategoria.addEventListener("click", function (event) {
                event.stopPropagation();

                var targetId = this.getAttribute("data-target");
                var categoriaSeleccionada = document.getElementById(targetId);

                cerrarOpciones();

                var rect = botonCategoria.getBoundingClientRect();
                var topPosition = rect.top + window.scrollY + botonCategoria.offsetHeight;
                var leftPosition = rect.left + window.scrollX;
                categoriaSeleccionada.style.position = "absolute";
                categoriaSeleccionada.style.top = topPosition + "px";
                categoriaSeleccionada.style.left = leftPosition + "px";

                categoriaSeleccionada.classList.add("expandido", "fade-in");
            });
        });

        document.addEventListener("click", function () {
            cerrarOpciones();
        });

        function cerrarOpciones() {
            var opcionesCategoria = document.querySelectorAll(".opciones-categoria.expandido");
            opcionesCategoria.forEach(function (opcion) {
                opcion.classList.remove("expandido", "fade-in");
                setTimeout(function () {
                    opcion.style.display = "none";
                }, 200); // Ajustado a 200ms para coincidir con la duración de la animación
            });
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
    var popupContainer = document.getElementById("popup-container");
    var nextSlideButton = document.getElementById("next-slide");
    var closePopupButton = document.getElementById("close-popup");
    var slides = document.querySelectorAll(".popup-slide");
    var currentSlideIndex = 0;

    // Función para mostrar la siguiente diapositiva
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showCurrentSlide();
    }

    // Función para mostrar la diapositiva actual y manejar la visibilidad de los botones
    function showCurrentSlide() {
        slides.forEach(function(slide, index) {
            slide.style.display = index === currentSlideIndex ? "block" : "none";
        });

        if (currentSlideIndex === slides.length - 1) {
            nextSlideButton.style.display = "none";
            closePopupButton.style.display = "block";
        } else {
            nextSlideButton.style.display = "block";
            closePopupButton.style.display = "none";
        }
    }

    // Evento para pasar a la siguiente diapositiva cuando se hace clic en el botón "Siguiente"
    nextSlideButton.addEventListener("click", nextSlide);

    // Evento para cerrar el popup cuando se hace clic en el botón "Cerrar"
    closePopupButton.addEventListener("click", function() {
        hidePopup();
        // Registrar que el usuario ha visto el popup
        localStorage.setItem('popupSeen', true);
    });

    // Función para ocultar el popup
    function hidePopup() {
        popupContainer.style.opacity = 0;
        setTimeout(function() {
            popupContainer.style.display = "none";
            document.body.style.overflow = "";
        }, 300);
    }

    // Función para mostrar el popup
    function showPopup() {
        popupContainer.style.display = "block";
        setTimeout(function() {
            popupContainer.style.opacity = 1;
        }, 50);
        showCurrentSlide();
    }

    // Mostrar el popup solo si el usuario no lo ha visto antes
    var popupSeen = localStorage.getItem('popupSeen');
    if (!popupSeen) {
        setTimeout(showPopup, 200);
    }
});

    function verMasCategorias() {
        window.location.href = "categories.html";
    }





