export const appBaseUrl = process.env.NEXT_PUBLIC_APP_URL;
export const fileBaseUrl = process.env.NEXT_PUBLIC_API_URL;
export const logoPath = '/assets/logos/logo.png';
export const logoButtonPath = '/assets/logos/logo-button.png';
export const siteTitle = 'Portfolio';
export const siteMetaDescription =
  "Hello, my name is Jonathan Smith. I'm a UI/UX Designer and Web Developer";
export const devName = 'Jairo22';
export const devNick = 'Jairo';
export const socialLinks = {
  github: 'https://github.com/DetSytemInc',
  twitter: 'https://twitter.com/theJairo22',
  linkedin: 'https://www.linkedin.com/in/jairo-espinola-645215250/',
  instagram: 'https://www.instagram.com/Det_SystemPeru/',
  facebook: 'https://www.facebook.com/profile.php?id=100076204285388',
  mail: 'detsystemperu@gmail.com',
};
export const showResume = true;
export const resumeLink = '#';
export const callToAction =
  'I am a programmer and mobile app developer for your business or product management system.';
export const copyrightText = '';
export const copyrightUrl = 'https://bashiruismail.io';
export const aboutExcerpt =
  'I design and create mobile App  and unique user interfaces! I can also take care of your brand promotion, on social media channels and search engines. Learn more about me and how to turn ideas into real life products.';
export const portfolioDescription =
  'I design & create unique award-winning, tailor-made websites and user interfaces! I have worked in startups as well as well-established companies. You can learn more about how I turn ideas into real life products. Please find below Projects that I can share with you.';
export const blogDescription =
  'Articles packed with actionable tips and insights on how good design positively impacts your business.';

export const portfolioType = {
  design: 'UI/UX Design',
  webDesign: 'Website Design',
  webDevelopment: 'Web Development',
};

export const portfolioFilters = [
  {
    label: 'All',
    type: 'all',
  },
];

export const portfolioGridData = [
  {
    title: 'App de Comparador de Precios',
    uri: 'demo-project',
    featured: true,
    type: 'design',
    tools: {
      list: ['Html', 'Corel Draw'],
    },
    viewOrder: 16,
    thumb: {
      url: '/assets/img/portfolio-1.png',
    },
  },
  {
    title: 'App de gestion de finanzas personales',
    uri: 'demo-project',
    featured: true,
    type: 'webDesign',
    tools: {
      list: ['HTML5/CSS3', 'JavaScript', 'WordPress CMS', 'PHP'],
    },
    viewOrder: 15,
    thumb: {
      url: '/assets/img/portfolio-3.png',
    },
  },
  {
    title: 'Descargador de videos de TikTok y Youtube',
    uri: 'demo-project',
    featured: true,
    type: 'design',
    tools: {
      list: ['Adobe Creative Suite', 'Corel Draw'],
    },
    viewOrder: 14,
    thumb: {
      url: '/assets/img/portfolio-2.png',
    },
  },
  {
    title: 'App Generador de Qr',
    uri: 'demo-project',
    featured: true,
    type: 'webDevelopment',
    tools: {
      list: ['HTML5/CSS3', 'ReactJS', 'NodeJS', 'PHP'],
    },
    viewOrder: 13,
    thumb: {
      url: '/assets/img/portfolio-4.png',
    },
  },
];

export const portfolioSingle = {
  title: 'Science & Tech Official Website',
  uri: 'demo-project',
  featured: true,
  type: 'webDevelopment',
  viewOrder: 14,
  thumb: {
    url: '/assets/img/portfolio-4.png',
  },
  parallax: {
    url: '/assets/img/portfolio-mockup.jpg',
  },
  tools: {
    list: ['React Native', 'ReactJS', 'NodeJS', 'Firebase'],
  },
  roles: {
    list: ['UI/UX Design', 'Figma', 'Frontend Development'],
  },
  shortDescrip:
    'This is a full feature Portfolio Website built in React. It includes a custom built design system using Emotion. It also includes Popular Portfolio Website Components.',
  content:
    "The Github package includes responsive and fully animated pages with different sections. If you'd like to modify it, I've intentionally created different content pages to maximize the number of layout options. I made a simple theming kit to make it easier for you to customize the Interface. You can mix and match the components to build different types of designs.\n\nThe website is Front-End Only and If you'd like to connect it to an API to fetch data (e.g for the Portfolio/Blog), you'll need experience working with Next.js & React.js.",
  previewUrl: '#',
  githubUrl: '#',
  gallery: [
    {
      url: '/assets/img/portfolio-1.png',
      name: 'portfolio-1.png',
    },
    {
      url: '/assets/img/portfolio-2.png',
      name: 'portfolio-2.jpg',
    },
    {
      url: '/assets/img/portfolio-3.png',
      name: 'portfolio-3.jpg',
    },
  ],
};

export const blogList = [
  {
    uri: 'demo-article',
    title: 'Somewhere in America',
    publishDateTime: '2021-10-11T20:26:46.005Z',
    shortDescrip:
      'The challenge was to portray the age of Julius Caesar in a way that was true to the history and yet an utterly joyous recalibration of it. Brutality had to be portrayed as knockabout; a world of mud and gore and fire repainted in primary colours. Uderzo, who was colour blind, much preferred the clear line to any hint of shade.',
  },
  {
    uri: 'demo-article',
    title: 'Jonny is still Typing',
    publishDateTime: '2021-10-11T20:26:46.005Z',
    shortDescrip:
      'The challenge was to portray the age of Julius Caesar in a way that was true to the history and yet an utterly joyous recalibration of it. Brutality had to be portrayed as knockabout; a world of mud and gore and fire repainted in primary colours. Uderzo, who was colour blind, much preferred the clear line to any hint of shade.',
  },
];

export const blogSingle = {
  uri: 'demo-article',
  title: 'Somewhere in America, Jonny is still Typing',
  publishDateTime: '2021-10-11T20:26:46.005Z',
  shortDescrip:
    'The challenge was to portray the age of Julius Caesar in a way that was true to the history and yet an utterly joyous recalibration of it. Brutality had to be portrayed as knockabout; a world of mud and gore and fire repainted in primary colours. Uderzo, who was colour blind, much preferred the clear line to any hint of shade.',
  content:
    'This is where the blog Article goes. The text below is just “filler content”.\n\nThe same evolution took place with Amazon Web Services, the company’s cloud computing subsidiary. It launched in 2006 as a "data storage service," but it has since become indispensable to modern tech companies — as necessary as paper clips once were but a damn sight more profitable.\n\nSo many companies rely on Amazon’s services that when the industry grows, AWS does, too. Last year, AWS alone made more money than McDonald’s. AWS is quite possibly the future of Amazon, which explains why it was everywhere at re:MARS.',
  thumb: {
    url: '/assets/img/blog.jpg',
  },
};

export const skillList = [
  'Figma',
  'React Native',
  'ReactJS',
  'JavaScript',
  'Solidity',
  'Blockchain',
  'NodeJS',
  'Firebase',
  'MongoDB',
  'MySQL',
  'ExpressJS',
  'Expo CLI',
  'Npm',
];

export const aboutMe = `Mobile App Development, Designed and Optimized, award-winning and custom made! I can also take care of your brand promotion, on social media channels and search engines. I have 3 years of experience in App and Web programming, I have developed more than 20 Apps for google play and other app stores in the market that deserves, I work with front-end technology with REACT NATIVE, backed FIREBASE, MONGO DB, design with figma`;
