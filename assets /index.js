$(document).ready(function() {
    var calendar = $(".container");
    var currentHour = moment().format("H");
  
    for (var i = 0; i < 24; i++) {
      var hourRow = $("<div>").addClass("row" );
      var hourColumn = $("<div>").text(i + ":00");
      var eventColumn = $("<div>").addClass("event");
      var eventInput = $("<textarea>").attr("class", "col-10");
      var saveButton = $("<button>").text("Save").addClass("saveBtn");
  
      eventColumn.append(eventInput);
      hourRow.append(hourColumn, eventColumn, saveButton);
      calendar.append(hourRow);
    }
  });
  