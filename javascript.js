$(document).ready(function(){
    loadLocalStorage();
     timeColor();
$(".current-day").text(moment().format("D dddd MMMM")); // creates the text of the date using the specific moment.js format and applies it to the ".current-day" class


  

  $(".save-button").click(function(){  //find save button, when clicked on find schedule-input class, 
    $(".schedule-input").each(function(){
            
        var id = $(this).attr("id"); //assing my id's a variable 
        var value = $(this).val(); // assing the value typed in to the input box a variable
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
        var fieldTime = moment().format(id, "HH"); // formatting the id fieldTime to make it into a "moment" *converting to a moment //have moment create a date object of a string
        // var thing = moment().isAfter(id);
        var scheduleInput = $(this);
        console.log(fieldTime)

        if (moment() >= moment(fieldTime)){             //this if statement is where im having issues
            scheduleInput.css({"opacity": "45%"}) //!important overides css
        } else if (fieldTime === moment(fieldTime)){
            scheduleInput.css(({"background-color": "purple"}))
        } else { 
            scheduleInput
        }
           
    }

       
        
        
        // console.log(thing)
        // console.log(fieldTime);
        // console.log(moment());
        
        

        // console.log(scheduleInput)
       
)}





//when comparing dates and times, formmating is dumb importante. must compare the exact same string. must be compatable, with each other as well with momentjs library. 
//read more doc, use if statements for if its true that it is after *apply styling* if else *different style* (CSS) 



});













