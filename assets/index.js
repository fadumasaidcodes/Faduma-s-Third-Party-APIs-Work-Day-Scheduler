$(document).ready(function () {
  var calendar = $(".container");
  var currentHour = moment().format("H");

  for (var i = 9; i < 20; i++) {
    var hourRow = $("<div>").addClass("row input-group");
    var hourColumn = $("<div>").text(i + ":00").addClass("hour");
    // var eventColumn = $("<form>").addClass("event");
    var eventInput = $("<textarea>").attr("class", "textarea form-control");
    var saveButton = $("<button>").html(`<i class="far fa-save"></i>`).addClass("saveBtn");

    if (i < currentHour) {
      eventInput.addClass("past");
    } else if (i === parseInt(currentHour)) {
      eventInput.addClass("present");
    } else {
      eventInput.addClass("future");
    }



    // eventColumn.append(eventInput)
    hourRow.append(hourColumn, eventInput, saveButton);

    calendar.append(hourRow);
  }
});
