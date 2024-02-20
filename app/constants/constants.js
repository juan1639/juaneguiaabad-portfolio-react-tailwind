
// =================================================================================
export class Settings {
    
    static endpoint = './proyectos.json';
    // static endpointUrl = 'https://juan1639.github.io/JuanEguiaAbad-portfolio-react/proyectos.json';
    static endpointUrl = 'https://juaneguiaabad-portfolio-react-tailwind.vercel.app/proyectos.json';

    static offSetHorizontalElementos = 50;
    static contador = undefined;

    static txtNavbar = [
        'Sobre mí',
        'Mis herramientas',
        'Proyectos',
        'Vídeos'
    ];

    static urlNavbar = [
        `${Settings.endpointUrl.slice(0, -14)}sobremi`,
        `${Settings.endpointUrl.slice(0, -14)}misherramientas`,
        `${Settings.endpointUrl.slice(0, -14)}proyectos`,
        `${Settings.endpointUrl.slice(0, -14)}videos`
    ];

    static valores_iniciales = {
        
        carets_h2: [
            ['h2Contenedor', false],
            ['h2Contenedor', false],
            ['h2Contenedor', false],
            ['h2Contenedor', false]
        ]
    };

    static mis_lenguajesImg = [
        './assets/img/astro-logo.svg',
        './assets/img/html-1.svg',
        './assets/img/css-3.svg',
        './assets/img/javascript-1.svg',
        './assets/img/jquery-444684.svg',
        './assets/img/react-2.svg',
        './assets/img/java.svg',
        './assets/img/python-4.svg',
        './assets/img/node-js-736399.svg',
        './assets/img/vite.svg'
    ];

    static misTitulos = {
        html: {
            id: "titulo-html",
            href: "./titulo-frontend.html",
            texto: "HTML5 y CSS3"
        },
        react: {
            id: "titulo-react",
            href: "./titulo-react.html",
            texto: "JavaScript Avanzado"
        },
        java: {
            id: "titulo-java",
            href: "./titulo-appweb-java.html",
            texto: "Desarrollo apps web Java"
        }
    };

    static dataFooter = {
        
        facebook: { 
            src: "./assets/img/facebook.svg",
            nombre: "Facebook" 
        },
        instagram: {
            src: "./assets/img/instagram.svg",
            nombre: "Instagram"
        },
        twitter: {
            src: "./assets/img/twitter-x.svg",
            nombre: "Twitter"
        },
        youtube: {
            src: "./assets/img/youtube.svg",
            nombre: "Youtube"
        }
    };
}
