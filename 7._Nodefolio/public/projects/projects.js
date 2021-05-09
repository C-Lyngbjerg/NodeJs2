(async function getProjects() {
    try{
        const response = await fetch("/api/projects");
        const result  = await response.json();
        const projectsDiv = $("#projects");
        
        result.projects.map( project => {
            const newProject = $('<li class="list-group-item"></li>');

            newProject.append($('<h2></h2>').text(project.title));
            newProject.append($('<p></p>').text(project.description));
            newProject.append($('<p></p>').text(project.startDate + " - " + project.endDate));
            newProject.append($('<a></a>').text(project.gitLink));
            newProject.append($('<p></p>'));
            
            projectsDiv.append(newProject);
        });
        
    }catch (error) {
        console.log(error);
    }
})();
