$(document).ready(() => {
    render_projects('all');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');
	
    let projects_obj = [
		{
            image: 'assets/images/projects/water.png',
            link: 'https://github.com/Yujxxng/Project_Water',
            title: 'Project: Water',
            demo: false,
            technologies: ['C++', 'Unreal Engine5'],
            description: "2-person team project using Unreal engine. Developed player movement and state transformation system (ice, water, vapor). Designed and developed various physics-based mechanics and interactive elements.",
            categories: ['cpp']
        },
		{
            image: 'assets/images/projects/water.png',
            link: 'https://github.com/ixejinn/game-blade-of-the-flame',
            title: 'Blade of the Flame',
            demo: false,
            technologies: ['C++', 'Alpha Engine'],
            description: "Led the development of a component-based game engine, built on top of Alpha engine, and core gameplay systems in a 3-person team project. Handled the development, including 2D physics, player controls, simple enemy behaviors, UI elements, and basic player attack mechanics.",
            categories: ['cpp']
        },
		{
            image: 'assets/images/projects/water.png',
            link: 'https://github.com/rima0502/hyper-auto-pets',
            title: 'Hyper Auto Pets',
            demo: false,
            technologies: ['C', 'CProcessing Engine'],
            description: "2-person team project using CProcessing engine. Developed store systems and enemy card deck generation.",
            categories: ['c']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2 style="display: inline-block; margin-right: 10px;"><a href="${project.link}">${project.title}</h2>
						<p class="paragraph-text-normal" style="display: inline-block;">${project.demo ? `<a href="${project.demo}" class="paragraph-text-normal" style="color: #B0B0B0;">YouTube</a>` : ''}</a></p>
						
                        <p class="paragraph-text-normal">${project.description}<br></p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}