// translations.js - Código completo
document.addEventListener('DOMContentLoaded', function() {
  // 1. Objeto de recursos de traducción (el que ya tienes)
  const resources = {
  en: {
    translation: {
      menu: {
        home: "HOME",
        about: "ABOUT ME",
        skills: "SKILLS",
        curriculum: "CURRICULUM",
        portfolio: "PORTFOLIO",
        contact: "CONTACT"
      },
      inicio: {
        title: "Energy Engineering⚡ | Electrical Control Systems Technician🔌 | Electromobility 🚗 | Data Science 🧑🏽‍🔬 | Web Development 💻"
      },
      sobremi: {
        title: "About me",
        description_highlight: "Hello, my name is Liliana Becerril.",
        description:"Hello, my name is Liliana Becerril.I integrate knowledge from Energy Engineering, Electrical Control Systems, Electromobility, Data Science, and Web Development to create innovative solutions. My focus in Energy Engineering is on optimizing renewable energy systems and enhancing energy efficiency. As an Electrical Control Systems Technician, I design and maintain control systems for efficient energy distribution. In electromobility, I develop solutions for sustainable transportation, including electric vehicle systems and charging infrastructure. My Data Science skills allow me to analyze large datasets to optimize energy usage and predict performance, while my Web Development experience enables me to create interactive platforms for energy-related services. These diverse skills allow me to approach problems holistically, contributing to a more sustainable and efficient future.",
        personal: "Personal data",
        phone_label: "Phone",
        email_label: "Email",
        website_label: "Website",
        address_label: "Address",
        post_label: "Post",
        interests_title: "Interests",
        download_cv: "Download CV General"
      },
      interests: {
        games: "GAMES",
        music: "MUSIC",
        travel: "TRAVEL",
        drawing: "DRAWING",
        sport: "SPORT",
        books: "BOOKS",
        energy: "ENERGY",
        animals: "ANIMALS"
      },
      skills: {
        title: "Skills",
        programming: "Programming Tools",
        design: "Design Software"
      },
      curriculum: {
        title: "Curriculum",
        education: "Education",
        work: "Work experience"
      },
      contact: {
        title: "CONTACT",
        name: "Your Name",
        phone: "Phone number",
        email: "Email address",
        subject: "Issue",
        message: "Message",
        send: "Send Message"
      }
    }
  },
  es: {
    translation: {
      menu: {
        home: "INICIO",
        about: "SOBRE MÍ",
        skills: "HABILIDADES",
        curriculum: "CURRÍCULUM",
        portfolio: "PORTAFOLIO",
        contact: "CONTACTO"
      },
      inicio: {
        title: "Ingeniería en Energía⚡ | Técnica en Sistemas de Control Eléctrico🔌 | Electromovilidad 🚗 | Ciencia de Datos 🧑🏽‍🔬 | Desarrollo Web 💻"
      },
      sobremi: {
        title: "About me",
        description_highlight: "Hello, my name is Liliana Becerril.",
        description: "Hola, me llamo Liliana Becerril. Integro conocimientos de Ingeniería Energética, Sistemas de Control Eléctrico, Electromovilidad, Ciencia de Datos y Desarrollo Web para crear soluciones innovadoras. En Ingeniería Energética, me centro en la optimización de sistemas de energía renovable y la mejora de la eficiencia energética. Como Técnico en Sistemas de Control Eléctrico, diseño y mantengo sistemas de control para una distribución eficiente de la energía. En electromovilidad, desarrollo soluciones para el transporte sostenible, incluyendo sistemas de vehículos eléctricos e infraestructuras de carga. Mis conocimientos de Ciencia de Datos me permiten analizar grandes conjuntos de datos para optimizar el consumo energético y predecir el rendimiento, mientras que mi experiencia en Desarrollo Web me permite crear plataformas interactivas para servicios relacionados con la energía. Estas diversas habilidades me permiten abordar los problemas de forma integral, contribuyendo a un futuro más sostenible y eficiente.",
        personal: "Datos personales",
        phone_label: "Teléfono",
        email_label: "Correo",
        website_label: "Sitio web",
        address_label: "Dirección",
        post_label: "Puesto",
        interests_title: "Intereses",
        download_cv: "Descargar CV General"
      },
      interests: {
        games: "VIDEOJUEGOS",
        music: "MÚSICA",
        travel: "VIAJAR",
        drawing: "DIBUJO",
        sport: "DEPORTE",
        books: "LIBROS",
        energy: "ENERGÍA",
        animals: "ANIMALES"
      },
      skills: {
        title: "Habilidades",
        programming: "Herramientas de Programación",
        design: "Software de Diseño"
      },
      curriculum: {
        title: "Currículum",
        education: "Educación",
        work: "Experiencia laboral"
      },
      contact: {
        title: "CONTACTO",
        name: "Tu nombre",
        phone: "Número telefónico",
        email: "Correo electrónico",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar mensaje"
      }
    }
  }
};

  // 2. Configuración inicial
  let currentLanguage = localStorage.getItem('selectedLanguage') || 'es';
  
  // 3. Función principal para cambiar idioma
  function changeLanguage(lang) {
    // Verificar si el idioma existe en los recursos
    if (!resources[lang]) {
      console.error(`Idioma no soportado: ${lang}`);
      return;
    }
    
    // Actualizar el idioma actual
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    
    // Actualizar el botón de idioma visible
    const currentLanguageElement = document.getElementById('currentLanguage');
    if (currentLanguageElement) {
      currentLanguageElement.textContent = lang.toUpperCase();
    }
    
    // Traducir todos los elementos
    translateAllElements();
    
    console.log(`Idioma cambiado a: ${lang}`);
  }

  // 4. Función para traducir elementos
  function translateAllElements() {
    const translationData = resources[currentLanguage].translation;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const keys = element.getAttribute('data-i18n').split('.');
      let translatedValue = getNestedValue(translationData, keys);
      
      if (translatedValue !== undefined) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translatedValue;
        } else {
          element.textContent = translatedValue;
        }
      } else {
        console.warn(`Texto no encontrado para clave: ${keys.join('.')}`);
      }
    });
  }

  // 5. Función auxiliar para acceder a valores anidados
  function getNestedValue(obj, keys) {
    return keys.reduce((current, key) => {
      return (current && current[key] !== undefined) ? current[key] : undefined;
    }, obj);
  }

  // 6. Configuración del dropdown de idiomas
  function setupLanguageDropdown() {
    const languageToggle = document.getElementById('languageToggle');
    const languageOptions = document.querySelector('.language-options');
    
    if (!languageToggle || !languageOptions) {
      console.error('Elementos del selector de idioma no encontrados');
      return;
    }
    
    // Mostrar/ocultar opciones
    languageToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      languageOptions.style.display = 
        languageOptions.style.display === 'block' ? 'none' : 'block';
    });
    
    // Cerrar al hacer clic fuera
    document.addEventListener('click', function() {
      languageOptions.style.display = 'none';
    });
    
    // Prevenir que el clic en las opciones cierre el menú
    languageOptions.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    // Cambiar idioma al seleccionar una opción
    document.querySelectorAll('.language-options a').forEach(option => {
      option.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
      });
    });
  }

  // 7. Inicialización al cargar la página
  function initialize() {
    // Configurar el dropdown
    setupLanguageDropdown();
    
    // Aplicar el idioma guardado o el predeterminado
    changeLanguage(currentLanguage);
    
    // Marcar la opción activa
    document.querySelector(`.language-options a[data-lang="${currentLanguage}"]`)
      ?.classList.add('active');
  }

  // Iniciar todo
  initialize();
});
