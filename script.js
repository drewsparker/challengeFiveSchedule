var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

function colorRow() {
    $('td.content').each(function (index, element) {
        var calendarHour = index + 9;
        var time = getCurrentHour();
        if (time > calendarHour) {
            $(element).addClass("past");
        }
        else if (time == calendarHour) {
            $(element).addClass("present");
        }
        else {
            $(element).addClass("future");
        }
    })
}

function getCurrentHour() {
    return new Date().getHours();
}
function saveText(hour, text) {
    localStorage.setItem(hour, text);
}
function getText(hour) {
    var text = localStorage.getItem(hour);
    if (text === null) {
        text = "";
    }
    return text;
}

function setupButtons() {
    $('td.saveBtn').each(function (index, element) {
        $(element).on('click', function () {
            saveText(index + 9, $('textarea')[index].value)
        })
    })
}


function populateFields() {
    $('textarea').each(function (index, element) {
        var text = getText(index + 9);
        console.log(text);
        console.log(index);
        element.value = text;
    })
}

colorRow();
setupButtons();
populateFields();