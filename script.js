// ========== DATOS DE PROYECTOS ==========
const proyectos = [
    {
        titulo: "Análisis NDVI de Cultivos",
        descripcion: "Procesamiento de imágenes multiespectrales para análisis de vegetación",
        objetivo: "Analizar salud de cultivos mediante índices de vegetación",
        tecnologias: ["Python", "OpenCV", "NumPy", "GDAL"],
        resultados: ["Procesamiento automático", "Índices NDVI calculados", "Mapas de resultados"],
        github: "https://github.com/Leonardo08202689",
        demo: "#"
    },
    {
        titulo: "Análisis de Cambios con GEE",
        descripcion: "Detección de cambios en cobertura terrestre usando Google Earth Engine",
        objetivo: "Monitorar cambios temporales en territorio",
        tecnologias: ["Python", "Google Earth Engine", "QGIS"],
        resultados: ["Análisis multitemporal", "Mapas de cambios", "Actualización mensual"],
        github: "https://github.com/Leonardo08202689",
        demo: "#"
    },
    {
        titulo: "Ortomosaico Topográfico",
        descripcion: "Levantamiento de 50 hectáreas con drone y procesamiento en Pix4D",
        objetivo: "Generar cartografía base precisa",
        tecnologias: ["Pix4D", "QGIS", "Fotogrametría"],
        resultados: ["Ortomosaico 2cm/pixel", "Precisión ±5cm", "Modelo digital de elevación"],
        github: "#",
        demo: "#"
    },
    {
        titulo: "Procesamiento Batch de Imágenes",
        descripcion: "Script en Python para procesamiento automático de múltiples imágenes",
        objetivo: "Automatizar tareas repetitivas",
        tecnologias: ["Python", "GDAL", "Automatización"],
        resultados: ["500+ imágenes procesadas", "Automatización completa", "Reutilizable"],
        github: "https://github.com/Leonardo08202689",
        demo: "#"
    },
    {
        titulo: "Dashboard Agrícola",
        descripcion: "Aplicación web con Streamlit para visualización de datos agrícolas",
        objetivo: "Visualizar análisis de forma interactiva",
        tecnologias: ["Python", "Streamlit", "Folium"],
        resultados: ["Interfaz interactiva", "Mapas en tiempo real", "Fácil de usar"],
        github: "https://github.com/Leonardo08202689",
        demo: "#"
    },
    {
        titulo: "Clasificación de Cobertura",
        descripcion: "Modelo de machine learning para clasificar tipos de cobertura terrestre",
        objetivo: "Clasificar automáticamente uso del suelo",
        tecnologias: ["Python", "Scikit-learn", "Rasterio"],
        resultados: ["Clasificación automática", "8 clases distintas", "Accuracy 88%"],
        github: "https://github.com/Leonardo08202689",
        demo: "#"
    }
];

// ========== NAVBAR EFFECTS ==========
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

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
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ========== FILTRO DE PORTAFOLIO ==========
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (filterValue === 'all' || cardCategory.includes(filterValue)) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.6s ease forwards';
            } else {
                card.style.display = 'none';
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

    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    proyecto.tecnologias.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techContainer.appendChild(tag);
    });

    const resultsList = document.getElementById('modal-results');
    resultsList.innerHTML = '';
    proyecto.resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        resultsList.appendChild(li);
    });

    document.getElementById('modal-github').href = proyecto.github;
    document.getElementById('modal-demo').href = proyecto.demo;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
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

// ========== DARK MODE TOGGLE ==========
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('title', 'Cambiar tema');
    document.body.appendChild(themeToggle);

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// ========== GOOGLE ANALYTICS 4 ==========
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
// Reemplaza 'G-XXXXXXXXXX' con tu ID de GA4

// Rastrear eventos
document.querySelectorAll('.btn-primary, .view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
        gtag('event', 'button_click', {
            button_text: e.target.textContent,
            button_url: e.target.href || 'no-url'
        });
    });
});

document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    gtag('event', 'form_submit', { form_name: 'contact_form' });
});

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    console.log('%c🚀 Portafolio cargado', 'font-size: 16px; color: #667eea; font-weight: bold;');
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
