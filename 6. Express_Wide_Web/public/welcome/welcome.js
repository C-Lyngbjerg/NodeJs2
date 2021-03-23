// # by id, . by class, "div" for all divs

let pizzas = 0;
$('body').css('background-color', 'lightcyan');
$(document).on("click", (event) => {
    $("#pizza-oven").append(`<strong id="pizza-${pizzas}" style='font-size: 50px'>o</strong>`);
    pizzas++;
    
    if(pizzas < 5) {
        const pizzaToRemove = pizzas-5;
        $("pizza-"+pizzaToRemove).remove();
        $("pizza-counter").append(`<strong style='font-size: 50px'>o</strong>`); 
    }
});
    