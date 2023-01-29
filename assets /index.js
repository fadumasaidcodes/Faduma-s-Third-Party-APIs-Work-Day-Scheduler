$(document).ready(function() {
    var calendar = $("#calendar");
    var currentHour = moment().format("H");
  
    for (var i = 0; i < 24; i++) {
      var hourRow = $("<tr>");
      var hourColumn = $("<td>").text(i + ":00");
      var eventColumn = $("<td>").addClass("event");
      var eventInput = $("<input>").attr("type", "text");
      var saveButton = $("<button>").text("Save").addClass("save-button");
  
      eventColumn.append(eventInput);
      hourRow.append(hourColumn, eventColumn, saveButton);
      calendar.append(hourRow);
    }
  });
  