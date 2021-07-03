var today = moment();
var jumboDate = $("#currentDay");
var timeBlock = $(".time-block");

jumboDate.text(today.format("dddd, MMMM Do"));

function checkTime() 
{
    timeBlock.each(function ()
    {   
        //turns id string for each row div into number
        var timeID = parseInt(timeBlock.attr('id'));
        var currentHour = moment().format('h');
        var rowColor = timeBlock.children('.description');

        if (timeID == currentHour) {
            rowColor.addClass('present');
        } else if (timeID > currentHour) {
            rowColor.addClass('future');
        } else {
            rowColor.addClass('past');
        }
    })
}



checkTime();