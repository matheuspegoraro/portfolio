# Portfolio - Matheus Pegoraro

Uma versão refatorada em **React.js** do portfólio pessoal de Matheus Pegoraro.

## Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── Header.js
│   ├── Header.css
│   ├── About.js
│   ├── About.css
│   ├── Experience.js
│   ├── Experience.css
│   ├── TimelineItem.js
│   ├── Skills.js
│   ├── Skills.css
│   ├── SkillCategory.js
│   ├── Education.js
│   ├── Education.css
│   ├── EducationItem.js
│   ├── SectionHeader.js
│   ├── Footer.js
│   └── Footer.css
├── data/                # Dados da aplicação
│   ├── experienceData.js
│   ├── skillsData.js
│   └── educationData.js
├── App.js               # Componente principal
├── App.css              # Estilos globais
└── index.js             # Ponto de entrada
public/
└── index.html           # HTML raiz
package.json             # Dependências e scripts
```

## Componentes

### Header
Exibe o perfil do desenvolvedor com nome, título, localização e links de contato.

### SectionHeader
Componente reutilizável para headers de seção com número, título e linha decorativa.

### About
Seção sobre profissional com descrição da carreira.

### Experience
Lista de experiências profissionais em timeline com componente `TimelineItem`.

### Skills
Exibe habilidades por categoria usando componente `SkillCategory`.

### Education
Mostra formação acadêmica com componente `EducationItem`.

### Footer
Rodapé com copyright.

## Como Usar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm start
```

### Build
```bash
npm run build
```

## Dados

Todos os dados (experiência, habilidades, educação) estão centralizados em `src/data/` para fácil manutenção e reutilização.

## Estilos

- **CSS Modular**: Cada componente possui seu próprio arquivo CSS
- **CSS Global**: `App.css` contém estilos globais e animações
- **Variáveis CSS**: Uso de custom properties para temas consistentes
- **Responsivo**: Design mobile-first com media queries

## Recursos

✅ Componentes React reutilizáveis  
✅ CSS separado por componente  
✅ Dados centralizados e fáceis de manter  
✅ Scroll suave e animações  
✅ Fully Responsive  
✅ Font Awesome Icons  
✅ Dark Mode Theme  
