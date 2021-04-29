(async function getSkills() {
    try{
        const response = await fetch("/api/skills");
        const result  = await response.json();
        const skillsDiv = $("#skills");
        
        result.skills.map( skill => {
            const newSkill = $('<div></div>');
            console.log(skill);

            newSkill.append($('<h1></h1>').text(skill.title));
            newSkill.append($('<p></p>').text(skill.explanation));
            newSkill.append($('<label for="progress">Progress: </label>'));
            newSkill.append($(`<meter id="progress" value=${skill.progress} min="0" max="1">${skill.progress}%</meter>`));//.value(skill.progress));

            skillsDiv.append(newSkill);
        });
        
    }catch (error) {
        console.log(error);
    }
})();