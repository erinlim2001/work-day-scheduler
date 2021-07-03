var today = moment();
var jumboDate = $("#currentDay");
var timeBlock = $(".time-block");
var saveIcon = $('.fa-save');
var description = $('.description');

jumboDate.text(today.format("dddd, MMMM Do"));

function checkTime() {
    timeBlock.each(function () {   
        //turns id string for each row div into number
        var timeID = parseInt(($(this)).attr('id'));
        var currentHour = today.format('H');
        var rowColor = $(this).children(description);

        if (timeID == currentHour) {
            rowColor.addClass('present');
        } else if (timeID > currentHour) {
            rowColor.addClass('future');
        } else {
            rowColor.addClass('past');
        }
    })
}

function scheduleInput() {
    timeBlock.each(function () {
        var timeID = parseInt(($(this)).attr('id'));
        var scheduleText = $(this).children(description);
        var savedText = localStorage.getItem(timeID);
        if (savedText !== null) {
            scheduleText.val(savedText);
        }
        

    })
}

$('.fa-save').click(function(event) {
    var target = $(this);
    localStorage.setItem((target.parents('.row').attr('id')), target.parent().siblings('.description').val())
});
checkTime();
scheduleInput();