(async function getSkills() {
    try{
        const response = await fetch("/api/skills");
        const result  = await response.json();
        const skillsDiv = $("#skills");
        
        result.skills.map( skill => {
            const newSkill = $('<li class="list-group-item"></li>');
            console.log(skill);

            newSkill.append($('<h1></h1>').text(skill.title));
            newSkill.append($('<p></p>').text(skill.explanation));            
            newSkill.append($(`<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ${skill.progress}%" aria-valuenow=${skill.progress} aria-valuemin="0" aria-valuemax="100"></div></div>`));
            skillsDiv.append(newSkill);
        });
        
    }catch (error) {
        console.log(error);
    }
})();