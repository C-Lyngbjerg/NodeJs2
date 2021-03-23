// $("#obj").on("click", (event) => {  
//     $(".content_text").empty();
//     $("#obj_ct").append("<ul> <li>Let & Const</li> <li>Var</li> <li>Arrays</li> <li>JSON</li> <li>Enviroment Variables</li></ul>");
// });
$("#obj").hover(function() {  
    $(".content_text").empty();
    $("#obj_ct").append("<ul> <li>Let & Const</li> <li>Var</li> <li>Arrays</li> <li>JSON</li> <li>Enviroment Variables</li></ul>");
});
$("#func").hover(function() {
    $(".content_text").empty();
    $("#func_ct").append("<ul> <li>Hoisting</li> <li>Loops & If Statements</li> <li>Callback Functions</li> <li>Arrow Functions</li> </ul>");
});

$("#exp").hover(function() {
    $(".content_text").empty();
    $("#exp_ct").append("<ul> <li>What is it</li> <li>Setup</li> <li>HTTP and Express Methods</li> <li>Endpoints</li> <li>Redirecting</li> </ul>");
});

$("#term").hover(function() { 
    $(".content_text").empty();
    $("#term_ct").append("<ul> <li>git</li> <li>npm</li><li>nodemon</li><li>Miscellaneous</li</ul>");
});


