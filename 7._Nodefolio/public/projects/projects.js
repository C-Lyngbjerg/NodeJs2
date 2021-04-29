(async function getProjects() {
    try{
        const response = await fetch("/api/projects");
        const result  = await response.json();
        const projectsDiv = $("#projects");
        
        result.projects.map( project => {
            const newProject = $('<div></div>');
            console.log(project);

            newProject.append($('<h1></h1>').text(project.title));
            newProject.append($('<p></p>').text(project.description));
            newProject.append($('<p></p>').text(project.startDate + " - " + project.endDate));
            newProject.append($('<a></a>').text(project.gitLink));

            projectsDiv.append(newProject);
        });
        
    }catch (error) {
        console.log(error);
    }
})();
