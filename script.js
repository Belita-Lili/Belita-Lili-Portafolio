let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

// Cierra el dropdown al hacer clic fuera de él
document.addEventListener('click', (e) => {
  const dropdown = document.querySelector('.language-dropdown');
  if (!dropdown.contains(e.target)) {
    document.querySelector('.language-options').style.display = 'none';
  }
});

// Ocultar menu
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// redes sociales
document.querySelectorAll('a[href*="linkedin.com"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Feedback visual inmediato
        this.style.transform = 'scale(0.95)';
        this.style.opacity = '0.8';
        
        // Abrir después de 100ms para permitir ver la animación
        setTimeout(() => {
            window.open(this.href, '_blank');
        }, 100);
    });
});

// Detalles de cada experiencia (puedes ponerlos en un archivo aparte)
const experienceDetails = {
    // Detalles de educacion
    'bachelor-details': {
        title: "Bachelor of Energy Engineering at IPN-UPIITA",
        content: "During my studies from 2019 to 2024, I focused on energy efficiency, control systems, automation, power electronics, and renewable energies. I gained hands-on experience with photovoltaic systems, energy integration, and sustainability practices. The program provided me with strong analytical skills for systems analysis and understanding of energy regulations."
    },
    'data-science-details': {
        title: "Diploma in Data Science at ROMAC",
        content: "In 2024, I completed an intensive program covering data analysis, preprocessing, and machine learning techniques. I worked with Python libraries like pandas, NumPy, and scikit-learn for regression, classification, and time series forecasting. The course emphasized model evaluation metrics and practical applications of data science."
    },
    'web-dev-details': {
        title: "Bootcamp as Web Development at ALURA Latam and Oracle",
        content: "Backend development, server-side applications, database integration, API development, Java, SQL, security, authentication, software architecture, version control, Git, deployment."
    },
    'web-dev-ja-details': {
        title: "Mujer Digital - Junior Achievement",
        content: "Web development, front-end (HTML, CSS, JavaScript), back-end basics, database management, server-side logic, version control (Git, GitHub), React, project management, agile methodologies, collaborative work, user-friendly applications."
    },
    'electromobility-details': {
        title: "Diploma in Electromobility at IBERO-Puebla",
        content: "Electromobility, hybrid and electric vehicles, electric motors, energy efficiency, fossil fuel reduction, greenhouse gas emissions, local pollutants, sustainable transportation."
    },
    'technician-details': {
        title: "Electrical Control Systems Technician at Cecyt3 - IPN",
        content: "Electrical control systems, circuit design, automation, PLC programming, power systems, instrumentation, control, industrial machinery, electrical safety, troubleshooting, system optimization."
    },

    // Detalles profesionales
    'diram-details': {
        title: "Intern in engineering at DIRAM",
        content: "Power factor, capacitors, energy efficiency, power correction, loss reduction, electrical system optimization, network stability, energy management, real-world applications."
    },
    'energyza-details': {
        title: "Intern in engineering at Energyza",
        content: "Photovoltaic projects, solar energy, system design, installation, maintenance, energy assessment, panel and inverter selection, system sizing, cost estimation, monitoring, regulations, renewable energy management."
    },
    'ucsd-details': {
        title: "Volunteering at UCSD and IPN",
        content: "Backend development, microservices, Golang, Nginx, Keycloak, traffic management, load balancing, reverse proxies, user authentication, authorization, secure backend systems, scalability, maintainability, high-performance applications."
    },
    'cinvestav-details': {
        title: "Social service at CINVESTAV",
        content: "Tin dioxide (SnO₂) and graphene oxide (GO) synergy, photocatalytic degradation, Rhodamine 6G (R6G), Methylene Blue (MB), nanocomposite synthesis, SnO₂-ZnO, hydrothermal method, Hummer method, Raman spectroscopy, FTIR, UV-vis, SEM, XPS, XRD, degradation tests, ultraviolet light, wastewater remediation, nanocomposite efficiency."
    },
    'mullblue-details': {
        title: "Volunteering at Müllblue",
        content: "Social media management, organic waste treatment, sustainable waste management, content creation, community engagement, environmental sustainability, online presence building."
    },
};

function showDetails(id) {
    const detail = experienceDetails[id];
    if (detail) {
        document.getElementById('modal-content').innerHTML = `
            <h3>${detail.title}</h3>
            <p>${detail.content}</p>
        `;
        document.getElementById('details-modal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('details-modal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('details-modal');
    if (event.target == modal) {
        closeModal();
    }
}