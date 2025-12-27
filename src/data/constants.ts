import { Project, Skill, Service, ContactInfo } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'cat-chat',
    title: 'Cat Chat',
    description:
      'Architected a real-time chat application with WebSocket infrastructure, implementing secure authentication and scalable database design. Built with modern web technologies, featuring user registration, breed selection, and live messaging capabilities. Demonstrates expertise in full-stack development and real-time communication protocols.',
    image: '/projects/catchat.png',
    github: 'https://github.com/PauSanchezzz/CatChat',
    technologies: [
      {
        name: 'Tailwind CSS',
        icon: '/svg/tailwind.svg',
        color: 'bg-sky-500',
        hoverColor: 'hover:shadow-sky-500/50',
      },
      {
        name: 'Node.js',
        icon: '/svg/node.svg',
        color: 'bg-green-500',
        hoverColor: 'hover:shadow-green-500/50',
      },
      {
        name: 'PostgreSQL',
        icon: '/svg/postgresql.svg',
        color: 'bg-blue-600',
        hoverColor: 'hover:shadow-blue-600/50',
      },
      {
        name: 'Socket.io',
        icon: '/svg/socket.svg',
        color: 'bg-gray-900',
        hoverColor: 'hover:shadow-gray-900/50',
      },
    ],
    featured: true,
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard - Microchipped Animals',
    description:
      'Designed and developed a comprehensive data visualization dashboard analyzing pet registration data across Bogotá. Implemented advanced DAX calculations and interactive visualizations to reveal insights on species distribution, breed preferences by socioeconomic zones, and naming patterns. Showcases expertise in data analysis, business intelligence, and creating actionable insights from complex datasets.',
    image: '/projects/dashboard.png',
    powerbi:
      'https://app.powerbi.com/view?r=eyJrIjoiMWVlYjFjZjEtZmU1Yy00MDZiLWFhYTItYjk0NDg5ZjBlODUwIiwidCI6ImQ1MTM4OGVmLTZhYjAtNDM2My05Zjk0LWQ1NjY0NGE0NTk3MCIsImMiOjR9',
    technologies: [
      {
        name: 'Excel',
        icon: '/svg/excel.svg',
        color: 'bg-emerald-600',
        hoverColor: 'hover:shadow-emerald-600/50',
      },
      {
        name: 'Power BI',
        icon: '/svg/powerBi.svg',
        color: 'bg-yellow-500',
        hoverColor: 'hover:shadow-yellow-500/50',
      },
      {
        name: 'DAX',
        icon: '/svg/bd.svg',
        color: 'bg-blue-700',
        hoverColor: 'hover:shadow-blue-700/50',
      },
    ],
    featured: true,
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description:
      'Developed a modern, responsive portfolio website showcasing technical expertise and project work. Built with Angular 17+ and Tailwind CSS, featuring component-based architecture, smooth animations, and mobile-first responsive design. Implements best practices in frontend development including semantic HTML, accessibility standards, and performance optimization.',
    image: '/projects/portfoliov1.png',
    github: 'https://github.com/PauSanchezzz/Portfolio/tree/main',
    technologies: [
      {
        name: 'Angular',
        icon: '/svg/angular.svg',
        color: 'bg-red-600',
        hoverColor: 'hover:shadow-red-600/50',
      },
      {
        name: 'Tailwind CSS',
        icon: '/svg/tailwind.svg',
        color: 'bg-sky-500',
        hoverColor: 'hover:shadow-sky-500/50',
      },
      {
        name: 'HTML',
        icon: '/svg/html.svg',
        color: 'bg-orange-600',
        hoverColor: 'hover:shadow-orange-600/50',
      },
      {
        name: 'CSS',
        icon: '/svg/css.svg',
        color: 'bg-blue-600',
        hoverColor: 'hover:shadow-blue-600/50',
      },
    ],
  },
  {
    id: 'life-chronicles',
    title: 'Life Chronicles',
    description:
      'Led the development of a mobile application for discovering activities and locations in Bogotá. Architected the app using MVVM pattern with Kotlin and Jetpack Compose, implementing Firebase authentication and real-time database. Collaborated with design team to create an intuitive user experience. Demonstrates leadership in mobile development and modern Android architecture patterns.',
    image: '/projects/lifechronicles.jpg',
    github: 'https://github.com/PauSanchezzz/LifeChronicles',
    figma: 'https://www.figma.com/design/iNQglGD2qkIdZ7rHrJ1zBL/Componentes-M3?node-id=0-1',
    technologies: [
      {
        name: 'Kotlin',
        icon: '/svg/kotlin.svg',
        color: 'bg-purple-600',
        hoverColor: 'hover:shadow-purple-600/50',
      },
      {
        name: 'Firebase',
        icon: '/svg/firebase.svg',
        color: 'bg-yellow-500',
        hoverColor: 'hover:shadow-yellow-500/50',
      },
      {
        name: 'Figma',
        icon: '/svg/figma.svg',
        color: 'bg-pink-500',
        hoverColor: 'hover:shadow-pink-500/50',
      },
      {
        name: 'Jetpack Compose',
        icon: '/svg/jetpackCompose.svg',
        color: 'bg-green-600',
        hoverColor: 'hover:shadow-green-600/50',
      },
    ],
    featured: true,
  },
];

export const SKILLS: Skill[] = [
  { name: 'Vue.js', icon: '/svg/vue.png', category: 'frontend' },
  { name: 'Nuxt', icon: '/svg/nuxt.png', category: 'frontend' },
  { name: 'Next.js', icon: '/svg/next.png', category: 'frontend' },
  { name: 'React', icon: '/svg/react.png', category: 'frontend' },
  { name: 'Angular', icon: '/svg/angular.svg', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '/svg/tailwind.svg', category: 'frontend' },
  { name: 'HTML', icon: '/svg/html.svg', category: 'frontend' },
  { name: 'CSS', icon: '/svg/css.svg', category: 'frontend' },
  { name: 'JavaScript', icon: '/svg/js.svg', category: 'frontend' },
  { name: 'TypeScript', icon: '/svg/ts.svg', category: 'frontend' },
  { name: 'Pinia', icon: '/svg/pinia.webp', category: 'frontend' },
  { name: 'Figma', icon: '/svg/figma.svg', category: 'design' },
  { name: 'Laravel', icon: '/svg/laravel.svg', category: 'backend' },
  { name: 'Node.js', icon: '/svg/nodejs.svg', category: 'backend' },
  { name: 'PostgreSQL', icon: '/svg/postgresql.svg', category: 'backend' },
  { name: 'MongoDB', icon: '/svg/mongodb.svg', category: 'backend' },
  { name: 'Kotlin', icon: '/svg/kotlin.svg', category: 'mobile' },
  { name: 'Jetpack Compose', icon: '/svg/jetpackCompose.svg', category: 'mobile' },
  { name: 'Firebase', icon: '/svg/firebase.svg', category: 'mobile' },
  { name: 'XML', icon: '/svg/xml.svg', category: 'mobile' },
  { name: 'Power BI', icon: '/svg/powerBi.svg', category: 'data' },
  { name: 'Excel', icon: '/svg/excel.svg', category: 'data' },
  { name: 'DAX', icon: '/svg/bd.svg', category: 'data' },
];

export const SERVICES: Service[] = [
  {
    title: 'Frontend Architecture',
    description:
      'Leading the design and implementation of scalable frontend architectures for enterprise applications. Expert in component-based design, state management, and performance optimization for large-scale web applications.',
    icon: '🏗️',
  },
  {
    title: 'UI/UX Design',
    description:
      'Creating intuitive and visually stunning user interfaces with a focus on user experience. Skilled in translating design systems into production-ready code while maintaining design consistency.',
    icon: '🎨',
  },
  {
    title: 'Technical Leadership',
    description:
      'Mentoring development teams, establishing coding standards, and driving best practices. Experience in leading frontend initiatives and coordinating cross-functional collaboration.',
    icon: '👥',
  },
  {
    title: 'Full-Stack Development',
    description:
      'Building end-to-end solutions with modern technologies. Expertise in both frontend and backend development, creating seamless integrations and robust, maintainable systems.',
    icon: '⚡',
  },
  {
    title: 'Performance Optimization',
    description:
      'Optimizing web applications for speed and efficiency. Implementing code splitting, lazy loading, and other performance techniques to ensure exceptional user experiences.',
    icon: '🚀',
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'pausanchezt12@gmail.com',
  github: 'https://github.com/PauSanchezzz',
  linkedin: 'https://www.linkedin.com/in/pau-sanchez',
  location: 'Bogotá, Colombia',
};

export const HERO_CONTENT = {
  greeting: 'Hi, I\'m',
  name: 'Paula Sanchez',
  title: 'Frontend Architect & Technical Leader',
  subtitle:
    'Building scalable, maintainable solutions for enterprise applications. Specialized in leading frontend development teams and architecting high-impact web experiences.',
  cta: {
    primary: 'View My Work',
    secondary: 'Get In Touch',
  },
};

export const ABOUT_CONTENT = {
  title: 'About Me',
  description:
    'I\'m a frontend developer with a passion for creating exceptional user experiences and leading technical initiatives. With extensive experience in large-scale projects, I specialize in architecting maintainable solutions that drive business impact. My expertise spans modern web technologies, mobile development, and data visualization, always with a focus on code quality and team collaboration.',
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '18+' },
  ],
};
