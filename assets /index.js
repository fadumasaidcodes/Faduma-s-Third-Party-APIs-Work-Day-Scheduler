$(document).ready(function() {
  var calendar = $(".container");
  var currentHour = moment().format("H");

  for (var i = 9; i < 18; i++) {
    var hourRow = $("<div>").addClass("row");
    var hourColumn = $("<div>").text(i + ":00").addClass("hour");
    var eventColumn = $("<div>").addClass("event");
    var eventInput = $("<textarea>").attr("class", "col-10");
    var saveButton = $("<button>").html(`<i class="far fa-save"></i>`).addClass("saveBtn");

    if (i < currentHour) {
      eventInput.addClass("past");
    } else if (i === parseInt(currentHour)) {
      eventInput.addClass("present");
    } else {
      eventInput.addClass("future");
    }


    eventColumn.append(eventInput);
    hourRow.append(hourColumn, eventColumn, saveButton);
    calendar.append(hourRow);
  }
});
