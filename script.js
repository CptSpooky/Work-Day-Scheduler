$(document).ready(function() {

  // listen for save button clicks
  $(".saveBtn").on("click", function() {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    console.log('value:', value);
    console.log('time:', time);

    // save the value in localStorage as time
    localStorage.setItem(time, JSON.stringify(value));
  });

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();
    console.log('current hour:', currentHour);

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      console.log("block hour:", blockHour);

      var id = $(this).attr("id");
      
      // load any saved data from localStorage
      var savedData = JSON.parse(localStorage.getItem(id));

      if (savedData != null){
        $(this).children(".description").val(savedData);
      }

      // check if we've moved past this time if the current hour is greater than the block hour then add class "past"
      // if they are equal then remove class "past" and add class "present"
      // else remove class "past", remove class "present", add class "future"

      if (currentHour > blockHour) {
        $(this).addClass('past');
      } else if (currentHour == blockHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  // set up interval to check if current time needs to be updated
  // which means execute hourUpdater function every 15 seconds
  function ticker(){
    setTimeout(ticker, 1000*15);
    console.log("tickerrun");
    hourUpdater();
  }
  ticker();

  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
