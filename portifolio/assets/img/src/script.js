// Seleciona o container dos projetos no HTML
const projectsContent = document.getElementById('projects-content');

// Busca o arquivo JSON com os projetos
fetch('./project.json')
  .then((response) => response.json())
  .then((data) => {
    loadProjects(data);
  })
  .catch((error) => console.error('Erro ao carregar projetos:', error));

function loadProjects(projects) {
  projects.forEach((project, index) => {
    // Cria a âncora do card do projeto
    const projectCard = document.createElement('a');
    projectCard.href = project.link || '#';
    projectCard.target = '_blank';
    projectCard.classList.add('project-card');

    // Atributos para Animação On Scroll (AOS) em cascata
    projectCard.setAttribute('data-aos', 'zoom-in-up');
    projectCard.setAttribute('data-aos-duration', '800');
    projectCard.setAttribute('data-aos-delay', (index + 1) * 200);

    // Estrutura de Imagem de Capa com tag alt para acessibilidade
    const picture = document.createElement('picture');
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = `Imagem de capa do projeto ${project.name}`;
    picture.appendChild(img);

    // Título do Projeto
    const title = document.createElement('strong');
    title.innerText = project.name;

    // Tags com as Tecnologias Usadas
    const tagsContainer = document.createElement('div');
    tagsContainer.classList.add('tags');

    if (project.tags) {
      project.tags.forEach((tagText) => {
        const tag = document.createElement('span');
        tag.innerText = tagText;
        tagsContainer.appendChild(tag);
      });
    }

    // Monta o Card
    projectCard.appendChild(picture);
    projectCard.appendChild(title);
    projectCard.appendChild(tagsContainer);

    // Adiciona o card na seção de projetos
    projectsContent.appendChild(projectCard);
  });
}