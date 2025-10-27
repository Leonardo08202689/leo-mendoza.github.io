// ========== DATOS DE PROYECTOS ==========
const proyectos = [
    {
        titulo: "Análisis Multiespectral para Agricultura",
        descripcion: "Pipeline completo en Python para procesamiento de imágenes multiespectrales y cálculo de índices de vegetación",
        objetivo: "Desarrollar un sistema automatizado para monitoreo de salud de cultivos mediante análisis NDVI en tiempo real",
        tecnologias: ["Python", "NumPy", "OpenCV", "Rasterio", "GDAL"],
        resultados: [
            "Procesamiento de 500+ hectáreas en 2 horas",
            "Precisión de clasificación del 94%",
            "Reducción de tiempo de análisis en 80%",
            "Dashboard interactivo de visualización"
        ],
        github: "https://github.com/tuusuario/agricultural-analysis",
        demo: "https://demo.ejemplo.com/agricultural"
    },
    {
        titulo: "Análisis de Cambios Temporales con GEE",
        descripcion: "Script automatizado para detección de cambios en cobertura vegetal usando Google Earth Engine y Python",
        objetivo: "Detectar cambios de cobertura terrestre en series temporales de 10 años con precisión submétrica",
        tecnologias: ["Python", "Google Earth Engine", "QGIS", "Geopandas", "Time Series"],
        resultados: [
            "Análisis de 1000 km² en tiempo real",
            "Identificación de deforestación con 92% de precisión",
            "Mapas de cambios generados automáticamente",
            "Alertas tempranas de degradación"
        ],
        github: "https://github.com/tuusuario/gee-change-detection",
        demo: "https://demo.ejemplo.com/change-detection"
    },
    {
        titulo: "Cartografía de Alta Precisión",
        descripcion: "Generación de ortomosaico de 50 hectáreas con resolución de 2cm/pixel para proyecto de construcción",
        objetivo: "Crear base cartográfica de alta precisión para planificación y seguimiento de proyecto constructivo",
        tecnologias: ["Pix4D", "QGIS", "Fotogrametría", "Nubes de Puntos"],
        resultados: [
            "Resolución final: 2 cm/pixel",
            "Precisión horizontal: ±5 cm",
            "Precisión vertical: ±8 cm",
            "Modelo 3D con 15 millones de puntos"
        ],
        github: "#",
        demo: "#"
    },
    {
        titulo: "Clasificación de Cobertura Terrestre",
        descripcion: "Modelo de machine learning para clasificación supervisada de imágenes satelitales usando scikit-learn",
        objetivo: "Desarrollar modelo de clasificación automática para mapeo de cobertura terrestre con múltiples clases",
        tecnologias: ["Python", "Scikit-learn", "Random Forest", "Rasterio", "Pandas"],
        resultados: [
            "Accuracy global: 0.88",
            "F1-Score promedio: 0.86",
            "Clasificadas 8 clases distintas",
            "Modelo entrenado con 50,000 muestras"
        ],
        github: "https://github.com/tuusuario/lulc-classification",
        demo: "#"
    },
    {
        titulo: "Procesamiento de Nubes de Puntos",
        descripcion: "Pipeline para procesamiento y análisis de nubes de puntos 3D con Python y CloudCompare",
        objetivo: "Desarrollar herramienta automatizada para procesamiento, clasificación y análisis de nubes de puntos LiDAR",
        tecnologias: ["Python", "CloudCompare", "PCL", "Laspy", "Open3D"],
        resultados: [
            "Procesadas nubes de hasta 500M de puntos",
            "Clasificación automática de vegetación y suelo",
            "Generación automática de DTM y DSM",
            "Exportación en múltiples formatos (LAS, LAZ, PLY)"
        ],
        github: "https://github.com/tuusuario/pointcloud-processing",
        demo: "#"
    },
    {
        titulo: "Dashboard Interactivo de Monitoreo",
        descripcion: "Aplicación web para visualización de datos geoespaciales en tiempo real con mapas interactivos",
        objetivo: "Crear plataforma web interactiva para visualización y análisis de datos agrícolas en tiempo real",
        tecnologias: ["Python", "Streamlit", "Folium", "Pandas", "Leaflet"],
        resultados: [
            "Dashboard con 5 indicadores principales",
            "Mapas interactivos con capas dinámicas",
            "Actualización de datos en tiempo real",
            "Más de 1000 usuarios mensuales"
        ],
        github: "https://github.com/tuusuario/agricultural-dashboard",
        demo: "https://agricultural-dashboard.streamlit.app"
    }
];

// ========== NAVBAR EFFECTS ==========
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.style.animation = 'none';
    setTimeout(() => {
        hamburger.style.animation = '';
    }, 10);
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
    }
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== INTERSECTION OBSERVER PARA ANIMACIONES ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos con clase 'animate'
document.querySelectorAll('.service-card, .skill-category, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.animation = 'none';
    observer.observe(el);
});

// ========== FILTRO DE PORTAFOLIO ==========
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (filterValue === 'all') {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.6s ease forwards';
            } else {
                if (cardCategory.includes(filterValue)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// ========== MODAL ==========
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

function openModal(index) {
    const proyecto = proyectos[index];

    document.getElementById('modal-title').textContent = proyecto.titulo;
    document.getElementById('modal-description').textContent = proyecto.descripcion;
    document.getElementById('modal-objective').textContent = proyecto.objetivo;

    // Tecnologías
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    proyecto.tecnologias.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techContainer.appendChild(tag);
    });

    // Resultados
    const resultsList = document.getElementById('modal-results');
    resultsList.innerHTML = '';
    proyecto.resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        resultsList.appendChild(li);
    });

    // Links
    const githubBtn = document.getElementById('modal-github');
    const demoBtn = document.getElementById('modal-demo');
    githubBtn.href = proyecto.github;
    demoBtn.href = proyecto.demo;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modal.style.animation = 'fadeIn 0.3s ease';
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener datos
        const nombre = this.nombre.value;
        const email = this.email.value;
        const asunto = this.asunto.value;
        const mensaje = this.mensaje.value;

        // Aquí puedes enviar los datos a tu backend o usar un servicio como Formspree
        console.log({
            nombre,
            email,
            asunto,
            mensaje
        });

        // Mostrar mensaje de éxito
        const submitBtn = this.querySelector('[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = '✓ ¡Mensaje enviado!';
        submitBtn.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            this.reset();
        }, 3000);
    });
}

// ========== PARALLAX EFFECT ==========
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;

    // Hero parallax
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ========== TYPING ANIMATION EN HERO ==========
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;

    function typeText() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }

    // Esperar a que cargue la página
    window.addEventListener('load', () => {
        setTimeout(typeText, 800);
    });
}

// ========== COUNTER ANIMATION ==========
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========== LAZY LOADING DE IMÁGENES ==========
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========== ACTIVE LINK HIGHLIGHTING ==========
window.addEventListener('scroll', () => {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========== THEME SWITCHER (OPCIONAL) ==========
// Descomentar si quieres agregar dark mode
/*
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Cargar tema guardado
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
*/

// ========== PRELOADER ==========
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========== KEYBOARD SHORTCUTS ==========
document.addEventListener('keydown', (e) => {
    // ESC para cerrar modal
    if (e.key === 'Escape') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Ctrl+K para hacer scroll a proyectos
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector('#proyectos').scrollIntoView({ behavior: 'smooth' });
    }
});

// ========== PERFORMANCE: REQUEST ANIMATION FRAME ==========
let ticking = false;
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Animaciones optimizadas aquí
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// ========== COMPARTIR EN REDES SOCIALES ==========
function shareOnSocial(platform, url, title) {
    let shareUrl = '';

    switch (platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// ========== STATS ANIMATION (SI TIENES ESTADÍSTICAS) ==========
function initStatsAnimation() {
    const statsElements = document.querySelectorAll('[data-stat]');

    if (statsElements.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    const target = parseInt(entry.target.dataset.stat);
                    animateCounter(entry.target, target);
                    entry.target.classList.add('animated');
                }
            });
        });

        statsElements.forEach(element => {
            statsObserver.observe(element);
        });
    }
}

// Ejecutar cuando DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initStatsAnimation();
    console.log('Portfolio cargado correctamente');
});

// ========== CONSOLE EASTER EGG ==========
console.log('%c🚀 Portfolio de Científico de Datos Geoespaciales', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cGracias por visitar mi sitio. Contáctame si tienes un proyecto interesante', 'font-size: 14px; color: #667eea;');
console.log('%c📧 correo@ejemplo.com', 'font-size: 12px; color: #667eea;');
