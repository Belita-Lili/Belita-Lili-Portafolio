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
        education_1: "Bachelor of Energy Engineering",
        education_2: "Diploma in Data Science",
        education_3: "Bootcamp as Web Development",
        education_4: "Bootcamp as Web Development",
        education_5: "Diploma in Electromobility",
        education_6: "Electrical Control Systems Technician",
        work: "Work experience",
        work_1:"Intern in engineering",
        work_2:"Intern in engineering",
        work_3:"Volunteering",
        work_4:"Social Service",
        work_5:"Volunteering",
      },
      portfolio: {
        title: "Portfolio",
        p26_title: "Dashboard - Personal project - At the moment",
        p26_subtitle: "Data Science - Energy - Wind",
        p25_title: "Dashboard - Personal project - At the moment",
        p25_subtitle: "Data Science - Energy - Wholesale Electricity Market",
        p24_title: "Dashboard - Personal project - At the moment",
        p24_subtitle: "Data Science - Energy - Photovoltaic",
        p23_title: "Dashboard - Personal project - At the moment",
        p23_subtitle: "Data Science - Energy - Credit Card",
        p22_title: "Dashboard - Oracle/Alura - 2025",
        p22_subtitle: "Data Science - Credit - Telecom X",
        p21_title: "Dashboard - Oracle/Alura - 2025",
        p21_subtitle: "Data Science - Store - Tienda Alura",
        p20_title: "Dashboard-ROMAC-2024",
        p20_subtitle: "Data Science - Diabetes Mellitus",
        p19_title: "Dashboard - Personal project - At the moment",
        p19_subtitle: "Dashboard-BOM-MRP",
        p18_title: "Personal project - At the moment",
        p18_subtitle: "Single-line diagram of a photovoltaic project",
        p17_title: "Cecyt3-2018",
        p17_subtitle: "Single-line diagram of a photovoltaic project",
        p16_title: "Personal project - At the moment",
        p16_subtitle: "Single-line diagram of a photovoltaic project",
        p15_title: "Personal project - At the moment",
        p15_subtitle: "Web page – Calculation memory - Photovoltaic modules",
        p14_title: "Personal project - At the moment",
        p14_subtitle: "Web page – Calculation memory - Capacitor bank",
        p13_title: "Personal project - At the moment",
        p13_subtitle: "Web page – Electromobility",
        p12_title: "Personal project - At the moment",
        p12_subtitle: "Web page - Energy Efficiency",
        p11_title: "Personal project - At the moment",
        p11_subtitle: "Web page - Transport phenomena",
        p10_title: "Personal project - At the moment",
        p10_subtitle: "Web page - Network Analyzer",
        p09_title: "DIET-IPN-2023",
        p09_subtitle: "UX/UI - Entrepreneurship competition-Corre Huevito",
        p08_title: "University-UPIITA-2024",
        p08_subtitle: "Thesis-Synthesis of nanocomposites based on graphene oxide (GO) nanosheets and inorganic semiconductors for photocatalytic applications",
        p07_title: "University-UPIITA-2022",
        p07_subtitle: "3D design-Biomimetic Robot Competition",
        p06_title: "University-UPIITA-2019",
        p06_subtitle: "3D design-Computational tools",
        p05_title: "HightSchool-Cecyt3-2019",
        p05_subtitle: "Organic Edible Biodegradable Dishes (PPOCEB) Process",
        p04_title: "HightSchool-Cecyt3-2019",
        p04_subtitle: "Electronics-Report-Motor",
        p03_title: "HightSchool-Cecyt3-2019",
        p03_subtitle: "Electronics-Report-PLC",
        p02_title: "HightSchool-Cecyt3-2018",
        p02_subtitle: "Electronics-Report",
        p01_title: "HightSchool-Cecyt3-2018",
        p01_subtitle: "Electronics-Report",
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
        title: "Sobre mi",
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
        title: "Curriculum",
        education: "Educación",
        education_1: "Ingenieria en Energia",
        education_2: "Diplomado en Ciencia de Datos",
        education_3: "Bootcamp como Desarrollo Web",
        education_4: "Bootcamp como Desarrollo Web",
        education_5: "Diplomado en Electromovilidad",
        education_6: "Especialidad en Sistemas de Control Electrico",
        work: "Experiencia Profecional",
        work_1:"Practicante en Ingenieria",
        work_2:"Practicante en Ingenieria",
        work_3:"Voluntariado",
        work_4:"Servicio Social",
        work_5:"Voluntariado",
      },
      portfolio: {
        title: "Portafolio",
        p26_title: "Dashboard - Proyecto personal - En proceso",
        p26_subtitle: "Ciencia de Datos - Energia - eolica",
        p25_title: "Dashboard - Proyecto personal - En proceso",
        p25_subtitle: "Ciencia de datos - Energia - Mercado Electrico Mayorista",
        p24_title: "Dashboard - Proyecto personal - En proceso",
        p24_subtitle: "Ciencia de datos - Energia - Fotovoltaica",
        p23_title: "Dashboard - Proyecto personal - En proceso",
        p23_subtitle: "Ciencia de datos - Energia - Tarjeta de credito",
        p22_title: "Dashboard - Oracle/Alura - 2025",
        p22_subtitle: "Ciencia de datos - Credito - Telecom X",
        p21_title: "Dashboard - Oracle/Alura - 2025",
        p21_subtitle: "Ciencia de datos - Tienda Alura",
        p20_title: "Dashboard-ROMAC-2024",
        p20_subtitle: "Ciencia de datos - Diabetes Mellitus",
        p19_title: "Dashboard - Proyecto personal - En proceso",
        p19_subtitle: "Dashboard-BOM-MRP",
        p18_title: "Proyecto personal - En proceso",
        p18_subtitle: "Diagrama Unifilar de un proyecto fotovoltaico",
        p17_title: "Cecyt3-2018",
        p17_subtitle: "Diagrama Unifilar de un proyecto fotovoltaico",
        p16_title: "Proyecto personal - En proceso",
        p16_subtitle: "Diagrama Unifilar de un proyecto fotovoltaico",
        p15_title: "Proyecto personal - En proceso",
        p15_subtitle: "Pagina web – Memoria de calculo - Modulos fotovoltaicos",
        p14_title: "Proyecto personal - En proceso",
        p14_subtitle: "Pagina web – Memoria de calculo - Banco de capacitores",
        p13_title: "Proyecto personal - En proceso",
        p13_subtitle: "Pagina web – Electromovilidad",
        p12_title: "Proyecto personal - En proceso",
        p12_subtitle: "Pagina web - Eficiencia Energetica",
        p11_title: "Proyecto personal - En proceso",
        p11_subtitle: "Pagina web - Fenomenos de transporte",
        p10_title: "Proyecto personal - En proceso",
        p10_subtitle: "Pagina web - Analizador de redes",
        p09_title: "DIET-IPN-2023",
        p09_subtitle: "UX/UI - Competencia de emprendimiento-Corre Huevito",
        p08_title: "Universidad-UPIITA-2024",
        p08_subtitle: "Tesis - Síntesis de nanocompositos basados en nanoláminas de óxido de grafeno (GO) y semiconductores inorgánicos para aplicaciones fotocatalíticas",
        p07_title: "Universidad-UPIITA-2022",
        p07_subtitle: "3D diseño-Competencia de Robots Biomimeticos",
        p06_title: "Universidad-UPIITA-2019",
        p06_subtitle: "3D diseño-Herramientas computacionales",
        p05_title: "Preparatoria-Cecyt3-2019",
        p05_subtitle: "Proceso de platos orgánicos comestibles biodegradables (PPOCEB)",
        p04_title: "Preparatoria-Cecyt3-2019",
        p04_subtitle: "Electronica-Reporte-Motor",
        p03_title: "Preparatoria-Cecyt3-2019",
        p03_subtitle: "Electronica-Reporte-PLC",
        p02_title: "Preparatoria-Cecyt3-2018",
        p02_subtitle: "Electronica-Reporte",
        p01_title: "Preparatoria-Cecyt3-2018",
        p01_subtitle: "Electronica-Reporte",
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
