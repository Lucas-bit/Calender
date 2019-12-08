const m = moment();

//console.log(m.format("dddd MMM Mo YYYY"));
//console.log(m.format("[Yeah the day is] dddd [and we're in] YYYY"))

alert(m.format("LLL")) //current date and time//



const datePickerElement = $(".date-picker");
const selectedDateElement = $(".date-picker .selected-date");
const datesElement = $(".date-picker .dates");


//Event Listeners
$(document).click(datePickerElement).toggle(datePickerElement);