document.addEventListener("DOMContentLoaded", function () {
    const sections = [
        { id: "economy.html", title: "Economía" },
        
        { id: "society.html", title: "Sociedad" },
        
        { id: "resources.html", title: "Recursos Naturales" },
        
        { id: "energy.html", title: "Energía" },
        
        { id: "tech.html", title: "Tecnología" },
        { id: "crypto.html", title: "Crypto" },
        
    ];

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

    function loadSection(sectionId) {
        
        window.location.href = sectionId;
    }

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

            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });
        });
    }

    function handleNavClick(event) {
        event.preventDefault();
        const sectionId = event.target.getAttribute("href").substring(1);
        loadSection(sectionId);
        highlightCurrentSection();
    }

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", handleNavClick);
    });

    highlightCurrentSection();
});

$(document).ready(function(){
    $('#carousel-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true, 
        dots: true, 
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
                }, 200);
            });
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
    var popupContainer = document.getElementById("popup-container");
    var nextSlideButton = document.getElementById("next-slide");
    var closePopupButton = document.getElementById("close-popup");
    var slides = document.querySelectorAll(".popup-slide");
    var currentSlideIndex = 0;

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showCurrentSlide();
    }

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

    
    nextSlideButton.addEventListener("click", nextSlide);

    
    closePopupButton.addEventListener("click", function() {
        hidePopup();
        
        localStorage.setItem('popupSeen', true);
    });

    
    function hidePopup() {
        popupContainer.style.opacity = 0;
        setTimeout(function() {
            popupContainer.style.display = "none";
            document.body.style.overflow = "";
        }, 300);
    }

    
    function showPopup() {
        popupContainer.style.display = "block";
        setTimeout(function() {
            popupContainer.style.opacity = 1;
        }, 50);
        showCurrentSlide();
    }

    
    var popupSeen = localStorage.getItem('popupSeen');
    if (!popupSeen) {
        setTimeout(showPopup, 200);
    }
});

    function verMasCategorias() {
        window.location.href = "categories.html";
    }


    document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const redesMenu = document.getElementById('redes-menu');

    menuIcon.addEventListener('click', function() {
        redesMenu.style.display = (redesMenu.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!redesMenu.contains(event.target) && event.target !== menuIcon) {
            redesMenu.style.display = 'none';
        }
    });

    const enlacesRedes = document.querySelectorAll('#redes-menu a');
    enlacesRedes.forEach(enlace => {
        enlace.addEventListener('click', function(event) {
            event.preventDefault();
            window.open(enlace.href, '_blank');
        });
    });
});



