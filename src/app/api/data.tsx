import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "50+",
        description: "Projects completed with modern tech stack",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "5+",
        description: "Years of experience in software development",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "100%",
        description: "Client satisfaction with delivered solutions",
    },
];

export const Progress = [
    { title: 'Laravel Development', Progress: 95 },
    { title: 'PHP Programming', Progress: 92 },
    { title: 'API Development', Progress: 90 },
    { title: 'Database Design', Progress: 88 }
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Laravel Development',
        description: 'Building robust web applications using Laravel framework with MVC architecture, Eloquent ORM, and Blade templating. Creating scalable ERP and business solutions.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'API Development',
        description: 'Developing REST and GraphQL APIs for seamless integrations. Experience with authentication, rate limiting, and comprehensive API documentation.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'ERP Solutions',
        description: 'Designing and implementing comprehensive ERP systems with modules for inventory, HR, finance, and reporting. Multi-department role-based access control.',
    },
]

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'ERP System',
        title: 'ERP System',
        slug: 'erp-system',
        info: 'Laravel, Vue/Nuxt, MySQL, REST & GraphQL',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'School Management System',
        title: 'School Management System',
        slug: 'school-management',
        info: 'Laravel, MySQL, REST API',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'E-Commerce Platform',
        title: 'E-Commerce Platform',
        slug: 'ecommerce-platform',
        info: 'Laravel, Nuxt.js, MySQL',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'Business ERP Modules',
        title: 'Business ERP Modules',
        slug: 'business-erp',
        info: 'Laravel, MySQL, GraphQL',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'),
        alt: 'API Integration Systems',
        title: 'API Integration Systems',
        slug: 'api-integrations',
        info: 'REST & GraphQL APIs',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Dashboard Analytics',
        title: 'Dashboard Analytics',
        slug: 'dashboard-analytics',
        info: 'Laravel, Vue.js, MySQL',
        Class: 'md:mt-0'
    },
]