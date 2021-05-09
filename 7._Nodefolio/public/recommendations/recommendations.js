(async function getRecommendations() {
    try{
        const response = await fetch("/api/recommendations");
        const result  = await response.json();
        const recommendationsDiv = $("#recommendations");
        
        result.recommendations.map( recommendations => {
            const newrecommendation = $('<li class="list-group-item"></li>');
            console.log(recommendations);
            newrecommendation.append($('<h2></h2>').text(recommendations.title));
            newrecommendation.append($('<a></a>').text(recommendations.reference));
            newrecommendation.append($('<p></p>').text(recommendations.description));
            newrecommendation.append($('<p></p>').text(recommendations.startDate + " - " + recommendations.endDate));
            newrecommendation.append($('<p></p>'));
            
            recommendationsDiv.append(newrecommendation);
        });
        
    }catch (error) {
        console.log(error);
    }
})();
