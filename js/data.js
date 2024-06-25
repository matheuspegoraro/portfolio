const programmingLanguages = [
  {
    iconType: 'icon',
    icon: 'fa-js',
    type: 'Programming language',
    name: 'JavaScript',
    experience: 'Advanced - 5 years'
  },
  {
    iconType: 'icon',
    icon: 'fa-php',
    name: 'PHP 7 and 8',
    type: 'Programming language',
    experience: 'Advanced - 4 years'
  },
  {
    iconType: 'img',
    icon: 'img/skills/dotnet.png',
    name: '.NET Core 3.1, 5, 6 and 8',
    type: 'Programming language',
      experience: 'Advanced - 5 years'
  },
  {
    iconType: 'img',
    icon: 'img/skills/dotnet.png',
    name: '.NET FRAMEWORK - VB e C#',
    type: 'Programming language',
      experience: 'Advanced - 6 years'
  },
  {
    iconType: 'icon',
    icon: 'fa-python',
    name: 'Python 3',
    type: 'Programming language',
    experience: 'Basic - 3 months'
  },
  {
    iconType: 'icon',
    icon: 'fa-java',
    name: 'Java',
    type: 'Programming language',
    experience: 'Basic - 6 months'
  },
  {
    iconType: 'img',
    icon: 'img/skills/advpl.png',
    name: 'ADVPL',
    type: 'Programming language',
    experience: 'Intermediary - 6 months'
  },
];

const frameworks = [
  {
    iconType: 'icon',
    icon: 'fa-react',
    name: 'ReactJS',
    type: 'Framework',
    experience: 'Advanced - 4 years'
  },
  {
    iconType: 'icon',
    icon: 'fa-react',
    name: 'NextJS',
    type: 'Framework',
    experience: 'Advanced - 3 year'
  },
  {
    iconType: 'icon',
    icon: 'fa-react',
    name: 'React Native',
    type: 'Framework',
    experience: 'Advanced - 2 years'
  },
  {
    iconType: 'icon',
    icon: 'fa-node-js',
    name: 'NodeJS',
    type: 'Framework',
    experience: 'Intermediary - 3 year'
  },
  {
    iconType: 'icon',
    icon: 'fa-php',
    name: 'PHP MVC - Slim Framework',
    type: 'Framework',
    experience: 'Advanced - 2 years'
  },
  {
    iconType: 'icon',
    icon: 'fa-php',
    name: 'PHP Laravel',
    type: 'Framework',
    experience: 'Advanced - 2 years'
  },
  {
    iconType: 'img',
    icon: 'img/skills/jquery.png',
    name: 'jQuery',
    type: 'Framework',
    experience: 'Advanced - 5 years'
  },
];

const notProgramingLanguages = [
  {
    iconType: 'icon',
    icon: 'fa-html5',
    name: 'HTML 5',
    type: '-',
    experience: 'Advanced - 6 years'
  },
  {
    iconType: 'icon',
    icon: 'fa-css3-alt',
    name: 'CSS 3',
    type: '-',
    experience: 'Intermediary - 5 years'
  },
];

const architectures = [
  {
    iconType: 'img',
    icon: 'img/skills/rest.png',
    name: 'REST',
    type: 'Arquitetura',
    experience: 'Intermediary - 5 years'
  },
  {
    iconType: 'img',
    icon: 'img/skills/rest.png',
    name: 'RESTFUL',
    type: 'Arquitetura',
    experience: 'Intermediary - 5 years'
  },
];

const tools = [
  
];

const databases = [
  {
    iconType: 'img',
    icon: 'img/skills/mysql.png',
    name: 'MySQL',
    type: 'Database',
        experience: 'Advanced - 5 years'
  },
  {
    iconType: 'img',
    icon: 'img/skills/sql-server.png',
    name: 'SQLServer',
    type: 'Database',
      experience: 'Advanced - 5 years'
  },
  {
    iconType: 'img',
    icon: 'img/skills/sql-server.png',
    name: 'Oracle',
    type: 'Database',
      experience: 'Advanced - 3 years'
  },
];

const softwares = [
  {
    iconType: 'img',
    icon: 'img/skills/protheus.png',
    name: 'Protheus',
    type: 'Software',
    experience: 'Intermediary - 1 year and 6 months'
  },
];

const courses = [
  { name: 'CREATE A PAINTING CALCULATOR WITH C# - DEVMEDIA' },
  { name: 'AUTHENTICATION IN ASP.NET MVC - DEVMEDIA' },
  { name: 'ASP.NET MVC AND IDENTITY: AUTHORIZATION OF USERS WITH CLAIMS - DEVMEDIA' },
  { name: 'MY FIRST C# APPLICATION - DEVMEDIA' },
  { name: 'ASP.NET MVC AND ENTITY FRAMEWORK: CREATING A 1:N APPLICATION - DEVMEDIA' },
  { name: 'ENTITY FRAMEWORK MIGRATIONS - DEVMEDIA' },
  { name: '1:N MAPPING NO ENTITY FRAMEWORK - DEVMEDIA' },
  { name: 'PREPARING THE ENVIRONMENT TO PROGRAM IN .NET - DEVMEDIA' },
  { name: 'WHAT IS NUGET? - DEVMEDIA' },
  { name: 'ASP.NET MVC: FIRST APPLICATION WITH ENTITY FRAMEWORK - DEVMEDIA' },
  { name: 'WHAT IS .NET? - DEVMEDIA' },
  { name: 'WHAT IS C#? - DEVMEDIA' },
  { name: 'WHAT IS ASP.NET WEB API? - DEVMEDIA' },
  { name: 'WHAT IS ASP.NET MVC? - DEVMEDIA' },
  { name: 'ASP.NET MVC - DEVMEDIA' },
  { name: 'ENTITY FRAMEWORK: FIRST STEPS - DEVMEDIA' },
  { name: 'CONSUMING A REST SERVICE WITH ASP.NET MVC - DEVMEDIA' },
  { name: 'CREATING RESTFUL SERVICES IN .NET - DEVMEDIA' },
  { name: 'INTRODUCTION TO .NET FRAMEWORK - DEVMEDIA' },
  { name: 'INTRODUCTION TO PROGRAMMING WITH C# - DEVMEDIA' },
  { name: 'GETTING TO KNOW THE RESOURCES OF VISUAL STUDIO - DEVMEDIA' },
  { name: 'WHAT IS MVC? - DEVMEDIA' },
  { name: 'WHAT IS RESTFUL? - DEVMEDIA' },
  { name: 'JAVA NETBEANS BASIC - UDEMY' },
  { name: 'JQUERY - UDEMY' },
  { name: 'PHP 7 Complete - UDEMY' },
  { name: 'ALGORITHMS - VIDEO COURSE' },
  { name: 'HTML5 - CURSOEMVIDEO' },
  { name: 'JAVA - CURSOEMVIDEO' },
  { name: 'MYSQL - CURSOEMVIDEO' },
  { name: 'BASIC PHP - VIDEO COURSE' },
  { name: 'PHP POO - COURSEEMVIDEO' }
];

const certifications = [
  { name: 'Artificial Intelligence Fundamentals - Data Science Academy' }
];

const lectures = [
  { name: '12th SCIENTIFIC CONGRESS - UNIARARAS' },
  { name: 'FRAMEWORK FOR WEB DEVELOPMENT: DJANGO' },
  { name: 'PERSONAL MARKETING AND CHANGES IN TIME OF CRISIS' },
  { name: 'COMPUTER FORENSIC ANALYSIS: DETECTING ROOTKITS IN WINDOWS ENVIRONMENT' }
];

const projects = [
  {
    id: 'whoolliefoodweb',
    name: 'Whoollie Food - WEB',
    description: 'Software for managing and administering bars, restaurants and snack bars with agile usability, providing the person in charge of the establishment with control over: employee access, editing the menu and monitoring orders. The customer has an intuitive and interactive mobile self-service platform that also reduces the waiting time for the customer to be served',
    github: {
      path: 'https://github.com/eduardogeraldini/whoollie-food',
      icon: 'fa-github'
    },
    youtube: {
      path: 'https://www.youtube.com/watch?v=7wXAw0WeJTc',
      icon: 'fa-youtube'
    },
    isApp: false,
    mockups: [
      { name: 'Login Screen', path: 'img/projects/whoollie01.png', active: 'active' },
      { name: 'Dashboard with Charts', path: 'img/projects/whoollie02.png', active: '' },
      { name: 'Product Control', path: 'img/projects/whoollie03.png', active: '' },
      { name: 'Product Category Control', path: 'img/projects/whoollie04.png', active: '' },
      { name: 'Ingredient Control', path: 'img/projects/whoollie05.png', active: '' },
      { name: 'Kitchen Order Monitor', path: 'img/projects/whoollie06.png', active: '' },
      { name: 'Kitchen Order Monitor With Order Being Released', path: 'img/projects/whoollie07.png', active: '' },
      { name: 'Command Control', path: 'img/projects/whoollie08.png', active: '' },
      { name: 'Information on an Open Command', path: 'img/projects/whoollie09.png', active: '' },
    ]
  },
  {
    id: 'whoolliefoodmobile',
    name: 'Whoollie Food - MOBILE',
    description: 'An application that allows the customer to assemble the cart according to their interest, place one or more orders, view their own order and call the waiter, and all this in real time!',
    github: {
      path: 'https://github.com/MarlonX19/whoolliefood',
      icon: 'fa-github'
    },
    youtube: {
      path: 'https://www.youtube.com/watch?v=7wXAw0WeJTc',
      icon: 'fa-youtube'
    },
    isApp: true,
    mockups: [
      { name: 'Application Menu', path: 'img/projects/whoollie-app01.png', active: 'active' },
      { name: 'Menu Category List', path: 'img/projects/whoollie-app02.png', active: '' },
      { name: 'Product Information', path: 'img/projects/whoollie-app03.png', active: '' },
      { name: 'Adding a Product to Cart', path: 'img/projects/whoollie-app04.png', active: '' },
      { name: 'Cart Listing', path: 'img/projects/whoollie-app05.png', active: '' },
      { name: 'Sending Cart to Kitchen', path: 'img/projects/whoollie-app07.png', active: '' },
      { name: 'List of the Open Command with Requests Made', path: 'img/projects/whoollie-app06.png', active: '' },
    ]
  },
  {
    id: 'omnistack10',
    name: "Omnistack 10.0",
    description: 'DevRadar is a project that aims to connect developers close to you who work with the same technologies.',
    github: {
      path: 'https://github.com/matheuspegoraro/semana-omnistack-10',
      icon: 'fa-github'
    },
    isApp: false,
    mockups: [
      { name: "Home page", path: "img/projects/omni1001.png", active: "active" },
    ]
  },
  {
    id: 'omnistack10mobile',
    name: "Omnistack 10.0 - MOBILE",
    description: 'DevRadar is a project that aims to connect developers close to you who work with the same technologies.',
    github: {
      path: 'https://github.com/matheuspegoraro/semana-omnistack-10',
      icon: 'fa-github'
    },
    isApp: true,
    mockups: [
      { name: "Application Home Screen", path: "img/projects/omni10-app01.png", active: "active" },
      { name: "GitHub Webview", path: "img/projects/omni10-app02.png", active: "" },
    ]
  },
  {
    id: 'nlw01',
    name: "NLW 01",
    description: 'The Ecoleta App was the application chosen by @Rocketseat to represent the first edition of NLW. It is a mobile and web application that helps people find collection points efficiently.',
    github: {
      path: 'https://github.com/matheuspegoraro/nlw-01',
      icon: 'fa-github'
    },
    isApp: false,
    mockups: [
      { name: "Homepage", path: "img/projects/nlw-01.png", active: "active" },
      { name: "Collection Point Registration Page", path: "img/projects/nlw-02.png" },
    ]
  },
  {
    id: 'nlw01mobile',
    name: "NLW 01 - MOBILE",
    description: 'The Ecoleta App was the application chosen by @Rocketseat to represent the first edition of NLW. It is a mobile and web application that helps people find collection points efficiently.',
    github: {
      path: 'https://github.com/matheuspegoraro/nlw-01',
      icon: 'fa-github'
    },
    isApp: true,
    mockups: [
      { name: "Application Home Screen", path: "img/projects/nlw-app01.png", active: "active" },
      { name: "Map and Points Filter Screen", path: "img/projects/nlw-app02.png" },
      { name: "Point Information Screen", path: "img/projects/nlw-app03.png" },
    ]
  },
]

$(() => {
  function compare(a, b) {
    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
  
    return 0;
  }

  function getIcon(iconType, icon) {
    if (iconType == 'img') {
      return `<img src="${icon}" width="40">`;
    } else {
      return `
        <span class="fa-stack fa-1x">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i class="fab ${icon} fa-stack-1x fa-inverse"></i>
        </span>
      `;
    }
  }
  
  let skills = [];
  skills.push(...programmingLanguages.sort(compare));
  skills.push(...frameworks.sort(compare));
  skills.push(...notProgramingLanguages.sort(compare));
  skills.push(...architectures.sort(compare));
  skills.push(...tools.sort(compare));
  skills.push(...databases.sort(compare));
  skills.push(...softwares.sort(compare));

  skills.map((skill) => {
    $('.skills-list').append(`
      <tr>
        <td class="text-primary text-center">${getIcon(skill.iconType, skill.icon)}</td>
        <td class="text-bold">${skill.name}</td>
        <td>${skill.type}</td>
        <td>${skill.experience}</td>
      </tr>
    `);
  });

  certifications.sort(compare).map(certification => {
    $('.certifications-list').append(`
      <li>
        <i class="fa-li fa fa-trophy text-warning"></i>
        ${certification.name} 
      </li>
    `);
  });

  courses.sort(compare).map(course => {
    $('.courses-list').append(`
      <li>
        <i class="fa-li fa fa-book-reader text-warning"></i>
        ${course.name} 
      </li>
    `);
  });

  lectures.sort(compare).map(lecture => {
    $('.lectures-list').append(`
      <li>
        <i class="fa-li fa fa-book-reader text-warning"></i>
        ${lecture.name} 
      </li>
    `);
  });

  projects.map(project => {

    let imagesHTML = '';
    let carouselContainer = '';
    let isApp = project.isApp;

    project.mockups.map(mockup => {
      imagesHTML += `
        <div class="carousel-item ${mockup.active}">
          <img class="d-block ${isApp ? 'img-slider' : 'w-100'}" src="${mockup.path}" alt="${mockup.name}">
        </div>
      `;
    });

    carouselContainer = `
      <div class="carousel-container mb-4">
        <h3>${project.name}</h3>
        <p class="text-non-bold">${project.description}</p>`;

    if (typeof(project.github) !== "undefined" || typeof(project.youtube) !== "undefined") {
      carouselContainer += `<p class="text-non-justify">`;

      if (typeof(project.github) !== "undefined") {
        carouselContainer += `<i class='fab ${project.github.icon}'></i> GitHub: <a href='${project.github.path}' target='_blank'>${project.github.path}</a> <br>`;
      }
      
      if (typeof(project.youtube) !== "undefined") {
        carouselContainer += `<i class="fab ${project.youtube.icon}"></i> YouTube: <a href='${project.youtube.path}' target='_blank'>${project.youtube.path}</a>`;
      }

      carouselContainer += `</p>`;
    }

    carouselContainer += `
        <div id="${project.id}" class="carousel slide ${isApp ? 'carousel-app' : ''} carousel-centered" data-ride="carousel">
          <div class="carousel-inner ${isApp ? 'carousel-inner-app' : ''}">
            ${imagesHTML}
          </div>`;

    if (project.mockups.length > 1) {
      carouselContainer += `
        <a class="carousel-control-prev" href="#${project.id}" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Back</span>
        </a>
        <a class="carousel-control-next" href="#${project.id}" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>`;
    }

    carouselContainer += `
        </div>
      </div>`;

    $('.projects-list').append(carouselContainer);
  })
})