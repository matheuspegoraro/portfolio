const programmingLanguages = [
  {
    icon: `
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-js fa-stack-1x fa-inverse"></i>
      </span>`,
    type: 'Linguagem de Programação',
    name: 'JavaScript',
    experience: 'Avançado - 2 anos'
  },
  {
    icon: `
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-php fa-stack-1x fa-inverse"></i>
      </span>`,
    name: 'PHP 7',
    type: 'Linguagem de Programação',
    experience: 'Avançado - 2 anos'
  },
  {
    icon: '<img src="img/skills/dotnet.png" width="40">',
    name: '.NET FRAMEWORK - VB e C#',
    type: 'Linguagem de Programação',
    experience: 'Intermediário - 2 anos'
  },
  {
    icon: `
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-python fa-stack-1x fa-inverse"></i>
      </span>`,
    name: 'Python 3',
    type: 'Linguagem de Programação',
    experience: 'Básico - 3 meses'
  },
  {
    icon: `
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-java fa-stack-1x fa-inverse"></i>
      </span>`,
    name: 'Java',
    type: 'Linguagem de Programação',
    experience: 'Básico - 6 meses'
  },
  {
    icon: '<img src="img/skills/advpl.png" width="40">',
    name: 'ADVPL',
    type: 'Linguagem de Programação',
    experience: 'Intermediário - 6 meses'
  },
];

const frameworks = [
  {
    icon: `
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-react fa-stack-1x fa-inverse"></i>
      </span>`,
    name: 'ReactJS',
    type: 'Framework',
    experience: 'Intermediário - 1 ano'
  },
  {
    icon: `
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-react fa-stack-1x fa-inverse"></i>
      </span>`,
    name: 'React Native',
    type: 'Framework',
    experience: 'Intermediário - 6 meses'
  },
  {
    icon: `
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-php fa-stack-1x fa-inverse"></i>
      </span>`,
    name: 'PHP MVC - Slim Framework',
    type: 'Framework',
    experience: 'Avançado - 2 anos'
  },
  {
    icon: '<img src="img/skills/jquery.png" width="40">',
    name: 'jQuery',
    type: 'Framework',
    experience: 'Avançado - 2 anos'
  },
  {
    icon: `
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-bootstrap fa-stack-1x fa-inverse"></i>
      </span>`,
    name: 'Bootstrap Framework',
    type: 'Framework',
    experience: 'Avançado - 2 anos'
  },
];

const notProgramingLanguages = [
  {
    icon: `
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-html5 fa-stack-1x fa-inverse"></i>
      </span>`,
    name: 'HTML 5',
    type: 'Linguagem não programável',
    experience: 'Avançado - 3 anos'
  },
  {
    icon: `
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-css3-alt fa-stack-1x fa-inverse"></i>
      </span>`,
    name: 'CSS 3',
    type: 'Linguagem não programável',
    experience: 'Intermediário - 3 anos'
  },
];

const architectures = [
  {
    icon: '<img src="img/skills/rest.png" width="40">',
    name: 'REST',
    type: 'Arquitetura',
    experience: 'Intermediário - 2 anos'
  },
  {
    icon: '<img src="img/skills/rest.png" width="40">',
    name: 'RESTFUL',
    type: 'Arquitetura',
    experience: 'Intermediário - 2 anos'
  },
];

const tools = [
  {
    icon: `
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-node-js fa-stack-1x fa-inverse"></i>
      </span>`,
    name: 'NodeJS',
    type: 'Ferramenta',
    experience: 'Intermediário - 1 anos'
  },
  {
    icon: `
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-npm fa-stack-1x fa-inverse"></i>
      </span>`,
    name: 'NPM',
    type: 'Ferramenta',
    experience: 'Intermediário - 1 anos'
  }
];

const databases = [
  {
    icon: '<img src="img/skills/mysql.png" width="40">',
    name: 'MySQL',
    type: 'Banco de Dados',
    experience: 'Intermediário - 3 anos'
  },
  {
    icon: '<img src="img/skills/sql-server.png" width="40">',
    name: 'SQLServer',
    type: 'Banco de Dados',
    experience: 'Intermediário - 2 anos'
  },
];

const softwares = [
  {
    icon: '<img src="img/skills/corel.png" width="40">',
    name: 'Corel Draw',
    type: 'Software',
    experience: 'Avançado - 5 anos'
  },
  {
    icon: '<img src="img/skills/protheus.png" width="40">',
    name: 'Protheus',
    type: 'Software',
    experience: 'Intermediário - 1 ano e 6 meses'
  },
];

const courses = [
  { name: "CRIE UMA CALCULADORA DE PINTURA COM C# - DEVMEDIA" },
  { name: "AUTENTICAÇÃO NO ASP.NET MVC - DEVMEDIA" },
  { name: "ASP.NET MVC E IDENTITY: AUTORIZAÇÃO DE USUÁRIOS COM CLAIMS - DEVMEDIA" },
  { name: "MINHA PRIMEIRA APLICAÇÃO C# - DEVMEDIA" },
  { name: "ASP.NET MVC E ENTITY FRAMEWORK: CRIANDO UMA APLICAÇÃO 1:N - DEVMEDIA" },
  { name: "ENTITY FRAMEWORK MIGRATIONS - DEVMEDIA" },
  { name: "MAPEAMENTO 1:N NO ENTITY FRAMEWORK - DEVMEDIA" },
  { name: "PREPARANDO O AMBIENTE PARA PROGRAMAR EM .NET - DEVMEDIA" },
  { name: "O QUE É NUGET? - DEVMEDIA" },
  { name: "ASP.NET MVC: PRIMEIRA APLICAÇÃO COM O ENTITY FRAMEWORK - DEVMEDIA" },
  { name: "O QUE É .NET? - DEVMEDIA" },
  { name: "O QUE É C#? - DEVMEDIA" },
  { name: "O QUE É ASP.NET WEB API? - DEVMEDIA" },
  { name: "O QUE É ASP.NET MVC? - DEVMEDIA" },
  { name: "ASP.NET MVC - DEVMEDIA" },
  { name: "ENTITY FRAMEWORK: PRIMEIROS PASSOS - DEVMEDIA" },
  { name: "CONSUMINDO UM SERVIÇO REST COM ASP.NET MVC - DEVMEDIA" },
  { name: "CRIANDO SERVIÇOS RESTFUL EM .NET - DEVMEDIA" },
  { name: "INTRODUÇÃO AO .NET FRAMEWORK - DEVMEDIA" },
  { name: "INTRODUÇÃO A PROGRAMAÇÃO COM C# - DEVMEDIA" },
  { name: "CONHECENDO OS RECURSOS DO VISUAL STUDIO - DEVMEDIA" },
  { name: "O QUE É MVC? - DEVMEDIA" },
  { name: "O QUE É RESTFUL? - DEVMEDIA" },
  { name: "JAVA NETBEANS BÁSICO - UDEMY" },
  { name: "JQUERY - UDEMY" },
  { name: "PHP 7 Completo - UDEMY" },
  { name: "ALGORITMOS - CURSOEMVIDEO" },
  { name: "HTML5 - CURSOEMVIDEO" },
  { name: "JAVA - CURSOEMVIDEO" },
  { name: "MYSQL - CURSOEMVIDEO" },
  { name: "PHP BÁSICO - CURSOEMVIDEO" },
  { name: "PHP POO - CURSOEMVIDEO" }
];

const certifications = [
  { name: "Inteligência Artificial Fundamentos - Data Science Academy" }
];

const lectures = [
  { name: "12º CONGRESSO CIENTÍFICO - UNIARARAS" },
  { name: "FRAMEWORK PARA DESENVOLVIMENTO WEB: DJANGO" },
  { name: "MARKETING PESSOAL E MUDANÇAS EM TEMPO DE CRISE" },
  { name: "ANÁLISE FORENSE COMPUTACIONAL: DETECTANDO ROOTKITS EM AMBIENTE WINDOWS" }
];

const projects = [
  {
    name: "Whoollie Food",
    mockups: [
      { name: "Tela de Login", path: "img/projects/whoollie01.png", active: "active" },
      { name: "Dashboard com Gráficos", path: "img/projects/whoollie02.png", active: "" },
      { name: "Controle de Produtos", path: "img/projects/whoollie03.png", active: "" },
      { name: "Controle de Categorias de Produtos", path: "img/projects/whoollie04.png", active: "" },
      { name: "Controle de Ingredientes", path: "img/projects/whoollie05.png", active: "" },
      { name: "Monitor de Pedidos para Cozinha", path: "img/projects/whoollie06.png", active: "" }
    ]
  }
]

$(() => {
  function compare(a, b) {
    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
  
    return 0;
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
        <td class="text-primary text-center">${skill.icon}</td>
        <td>${skill.type}</td>
        <td class="text-bold">${skill.name}</td>
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

    project.mockups.map(mockup => {
      imagesHTML += `
        <div class="carousel-item ${mockup.active}">
          <img class="d-block w-100" src="${mockup.path}" alt="${mockup.name}">
        </div>
      `;
    });

    $('.projects-list').append(`
      <h3 class="w-100 text-center">${project.name}</h3>
      <h6 class="w-100 text-center text-non-bold">Um Software para gerenciamento e administração de bares, restaurantes e lanchonetes de usabilidade ágil, proporcionando ao responsável do estabelecimento o controle sobre: o acesso de funcionários, edição do cardápio e monitoramento dos pedidos. Já o cliente tem uma plataforma mobile de autoatendimento intuitiva e interativa que também diminui o tempo de espera para o cliente ser atendimento</h6>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          ${imagesHTML}
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Voltar</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Próximo</span>
        </a>
      </div>
    `);
  })
})