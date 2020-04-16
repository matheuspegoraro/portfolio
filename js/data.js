const programmingLanguages = [
  {
    iconType: 'icon',
    icon: `fa-js`,
    type: 'Linguagem de Programação',
    name: 'JavaScript',
    experience: 'Avançado - 2 anos'
  },
  {
    iconType: 'icon',
    icon: `fa-php`,
    name: 'PHP 7',
    type: 'Linguagem de Programação',
    experience: 'Avançado - 2 anos'
  },
  {
    iconType: 'img',
    icon: 'img/skills/dotnet.png',
    name: '.NET FRAMEWORK - VB e C#',
    type: 'Linguagem de Programação',
    experience: 'Intermediário - 2 anos'
  },
  {
    iconType: 'icon',
    icon: `fa-python`,
    name: 'Python 3',
    type: 'Linguagem de Programação',
    experience: 'Básico - 3 meses'
  },
  {
    iconType: 'icon',
    icon: `fa-java`,
    name: 'Java',
    type: 'Linguagem de Programação',
    experience: 'Básico - 6 meses'
  },
  {
    iconType: 'img',
    icon: 'img/skills/advpl.png',
    name: 'ADVPL',
    type: 'Linguagem de Programação',
    experience: 'Intermediário - 6 meses'
  },
];

const frameworks = [
  {
    iconType: 'icon',
    icon: `fa-react`,
    name: 'ReactJS',
    type: 'Framework',
    experience: 'Intermediário - 1 ano'
  },
  {
    iconType: 'icon',
    icon: `fa-react`,
    name: 'React Native',
    type: 'Framework',
    experience: 'Intermediário - 6 meses'
  },
  {
    iconType: 'icon',
    icon: `fa-php`,
    name: 'PHP MVC - Slim Framework',
    type: 'Framework',
    experience: 'Avançado - 2 anos'
  },
  {
    iconType: 'img',
    icon: 'img/skills/jquery.png',
    name: 'jQuery',
    type: 'Framework',
    experience: 'Avançado - 2 anos'
  },
  {
    iconType: 'icon',
    icon: `fa-bootstrap`,
    name: 'Bootstrap Framework',
    type: 'Framework',
    experience: 'Avançado - 2 anos'
  },
];

const notProgramingLanguages = [
  {
    iconType: 'icon',
    icon: `fa-html5`,
    name: 'HTML 5',
    type: 'Linguagem não programável',
    experience: 'Avançado - 3 anos'
  },
  {
    iconType: 'icon',
    icon: `fa-css3-alt`,
    name: 'CSS 3',
    type: 'Linguagem não programável',
    experience: 'Intermediário - 3 anos'
  },
];

const architectures = [
  {
    iconType: 'img',
    icon: 'img/skills/rest.png',
    name: 'REST',
    type: 'Arquitetura',
    experience: 'Intermediário - 2 anos'
  },
  {
    iconType: 'img',
    icon: 'img/skills/rest.png',
    name: 'RESTFUL',
    type: 'Arquitetura',
    experience: 'Intermediário - 2 anos'
  },
];

const tools = [
  {
    iconType: 'icon',
    icon: `fa-node-js`,
    name: 'NodeJS',
    type: 'Ferramenta',
    experience: 'Intermediário - 1 anos'
  },
  {
    iconType: 'icon',
    icon: `fa-npm`,
    name: 'NPM',
    type: 'Ferramenta',
    experience: 'Intermediário - 1 anos'
  }
];

const databases = [
  {
    iconType: 'img',
    icon: 'img/skills/mysql.png',
    name: 'MySQL',
    type: 'Banco de Dados',
    experience: 'Intermediário - 3 anos'
  },
  {
    iconType: 'img',
    icon: 'img/skills/sql-server.png',
    name: 'SQLServer',
    type: 'Banco de Dados',
    experience: 'Intermediário - 2 anos'
  },
];

const softwares = [
  {
    iconType: 'img',
    icon: 'img/skills/corel.png',
    name: 'Corel Draw',
    type: 'Software',
    experience: 'Avançado - 5 anos'
  },
  {
    iconType: 'img',
    icon: 'img/skills/protheus.png',
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
    id: 'whoolliefoodweb',
    name: "Whoollie Food - WEB",
    description: 'Um Software para gerenciamento e administração de bares, restaurantes e lanchonetes de usabilidade ágil, proporcionando ao responsável do estabelecimento o controle sobre: o acesso de funcionários, edição do cardápio e monitoramento dos pedidos. Já o cliente tem uma plataforma mobile de autoatendimento intuitiva e interativa que também diminui o tempo de espera para o cliente ser atendimento',
    isApp: false,
    mockups: [
      { name: "Tela de Login", path: "img/projects/whoollie01.png", active: "active" },
      { name: "Dashboard com Gráficos", path: "img/projects/whoollie02.png", active: "" },
      { name: "Controle de Produtos", path: "img/projects/whoollie03.png", active: "" },
      { name: "Controle de Categorias de Produtos", path: "img/projects/whoollie04.png", active: "" },
      { name: "Controle de Ingredientes", path: "img/projects/whoollie05.png", active: "" },
      { name: "Monitor de Pedidos para Cozinha", path: "img/projects/whoollie06.png", active: "" },
      { name: "Monitor de Pedidos para Cozinha Com Pedido Sendo Liberado", path: "img/projects/whoollie07.png", active: "" },
      { name: "Controle de Comandas", path: "img/projects/whoollie08.png", active: "" },
      { name: "Informação de Uma Comanda Aberta", path: "img/projects/whoollie09.png", active: "" },
    ]
  },
  {
    id: 'whoolliefoodmobile',
    name: "Whoollie Food - MOBILE",
    description: 'Um aplicativo onde permite o cliente pode montar o carrinho conforme seu interesse, efetuar um ou mais pedidos, visualizar sua própria comanda e chamar o garçom, e tudo isto em tempo real!',
    isApp: true,
    mockups: [
      { name: "Menu do Aplicativo", path: "img/projects/whoollie-app01.png", active: "active" },
      { name: "Lista de Categorias do Menu", path: "img/projects/whoollie-app02.png", active: "" },
      { name: "Informação de um Produto", path: "img/projects/whoollie-app03.png", active: "" },
      { name: "Adicionando um Produto ao Carrinho", path: "img/projects/whoollie-app04.png", active: "" },
      { name: "Listagem do Carrinho", path: "img/projects/whoollie-app05.png", active: "" },
      { name: "Enviando o Carrinho para a Cozinha", path: "img/projects/whoollie-app07.png", active: "" },
      { name: "Listagem da Comanda Aberta com os Pedidos Realizados", path: "img/projects/whoollie-app06.png", active: "" },
    ]
  }
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

    let isApp = project.isApp;

    project.mockups.map(mockup => {
      imagesHTML += `
        <div class="carousel-item ${mockup.active}">
          <img class="d-block ${isApp ? 'img-slider' : 'w-100'}" src="${mockup.path}" alt="${mockup.name}">
        </div>
      `;
    });

    $('.projects-list').append(`
      <div class="carousel-container">
        <h3>${project.name}</h3>
        <p class="text-non-bold">${project.description}</p>
        <div id="${project.id}" class="carousel slide ${isApp ? 'carousel-app' : ''} carousel-centered" data-ride="carousel">
          <div class="carousel-inner ${isApp ? 'carousel-inner-app' : ''}">
            ${imagesHTML}
          </div>
          <a class="carousel-control-prev" href="#${project.id}" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Voltar</span>
          </a>
          <a class="carousel-control-next" href="#${project.id}" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Próximo</span>
          </a>
        </div>
      </div>
    `);
  })
})