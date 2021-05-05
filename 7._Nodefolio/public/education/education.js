(async function getEducations() {
    try{
        const response = await fetch("/api/educations");
        const result  = await response.json();
        const educationsDiv = $("#education");
        
        result.education.map( education => {
            const newEducation = $('<div></div>');
            console.log(education);

            newEducation.append($('<h1></h1>').text(education.title));
            newEducation.append($('<p></p>').text(education.type));
            newEducation.append($('<p></p>').text(education.years));
            newEducation.append($('<p></p>').text(education.description));
            
            educationsDiv.append(newEducation);
        });
        
    }catch (error) {
        console.log(error);
    }
})();