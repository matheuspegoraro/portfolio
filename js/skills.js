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
    icon: '<img src="img/dotnet.png" width="40">',
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
    icon: '<img src="img/rest.png" width="40">',
    name: 'Arquitetura REST',
    type: 'Linguagem de Programação',
    experience: 'Intermediário - 2 anos'
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
    icon: '<img src="img/jquery.png" width="40">',
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
    type: 'Linguagem não programáveis',
    experience: 'Avançado - 3 anos'
  },
  {
    icon: `
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fab fa-css3-alt fa-stack-1x fa-inverse"></i>
      </span>`,
    name: 'CSS 3',
    type: 'Linguagem não programáveis',
    experience: 'Intermediário - 3 anos'
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
  },
];

const databases = [
  {
    icon: '<img src="img/mysql.png" width="40">',
    name: 'MySQL',
    type: 'Banco de Dados',
    experience: 'Intermediário - 3 anos'
  },
  {
    icon: '<img src="img/sql-server.png" width="40">',
    name: 'SQLServer',
    type: 'Banco de Dados',
    experience: 'Intermediário - 2 anos'
  },
];

const softwares = [
  {
    icon: '<img src="img/corel.png" width="40">',
    name: 'Corel Draw',
    type: 'Software',
    experience: 'Avançado - 5 anos'
  },
];

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
  })
})