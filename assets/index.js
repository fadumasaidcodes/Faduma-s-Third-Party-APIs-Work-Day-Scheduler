$(document).ready(function () {
  // added the currentDay to the front of the pge
  var currentDay = moment().format("dddd, MMMM Do")
  // Select the calendar container
  $("#currentDay").text(currentDay)
  var calendar = $(".container");

  // Get the current hour in military time
  var currentHour = moment().format("H");

  // Loop through the standard business hours (9am to 5pm)
  for (var i = 9; i < 18; i++) {
    // Create a row for each hour
    var hourRow = $("<div>").addClass("row input-group");
    // Create a column for the hour
    var hourColumn = $("<div>").text(i + ":00").addClass("hour");
    // Create a textarea for the event input
    var eventInput = $("<textarea>").attr("class", "textarea form-control");
    // Create a button for saving the event
    var saveButton = $("<button>").html(`<i class="far fa-save"></i>`).addClass("saveBtn");

    // Add classes to the textarea based on whether the hour is in the past, present, or future
    if (i < currentHour) {
      eventInput.addClass("past");
    } else if (i === parseInt(currentHour)) {
      eventInput.addClass("present");
    } else {
      eventInput.addClass("future");
    }

    // Append the hour column, event input, and save button to the hour row
    hourRow.append(hourColumn, eventInput, saveButton);

    // Append the hour row to the calendar container
    calendar.append(hourRow);
  }

  // Handle clicking the save button
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();


    // Get the value of the event input
    var eventValue = $(this).siblings(".textarea").val();

    // Get the hour of the event
    var eventHour = $(this).parent().find(".hour").text();

    // Save the event in local storage with the key as the hour
    localStorage.setItem(eventHour, eventValue);
  });

  // Load saved events from local storage on page load
  $("textarea").each(function () {
    var eventHour = $(this).parent().find(".hour").text();
    var savedEvent = localStorage.getItem(eventHour);

    if (savedEvent) {
      $(this).val(savedEvent);
    }
  });
});
;