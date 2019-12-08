

$(document).ready(function(){
    loadLocalStorage();
$(".current-day").text(moment().format("D dddd MMMM"));


  //this alert is to be replaced by a function saving info to the page upon refresh//

  $(".save-button").click(function(){  //find save button, when clicked on find schedule-input class, 
    $(".schedule-input").each(function(){
            
        var id = $(this).attr("id");
        var value = $(this).val();
       localStorage.setItem(id, value);  //for each class get its's ID and value (value typed into input box), and store them juntos, 
        });
      });


function loadLocalStorage() //for each input.schedule-input class, get the id out of the class, find the matching value 
{
 $("input.schedule-input").each(function(){    
        var id = $(this).attr("id");
        var value = localStorage.getItem(id);

        $(this).val(value);
    }); 
};

function timeColor(){
    $(".schedule-input").each(function(){
        var id = $(this).attr("id");
        
    });
};




});














