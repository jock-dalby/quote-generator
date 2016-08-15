$(document).ready(function() {
  // Handler for .ready() called.
  // API URL is lifted from the page.
  var url = $('#urlInput').text();
  console.log(url)
  // Declare colors variable
  var colors = ["orange", "limegreen",  "lightblue", "beige", "pink", "olive"]
  var index = 0;
  $("#quoteButton").click(function() {
    // Change button text while getting quote
    $("#quoteButton").html("Retrieving quote...");
    $.ajax({
      method: "GET",
      url: url
    })

    .done(function(msg) {
        // Change button text back when quote is received
        $("#quoteButton").html("Quote me happy!");

        // Print the entire msg object to console.log to decifer which part we want.
        console.log(msg);

        // Print the quote part of the msg object to the page.
        $("#quoteBox").html('"' + msg.value.joke + '"');

        // Cycle through the colors array each time quote button is pressed.
        console.log(colors[index])
        $("#quoteBox").css({
          background: colors[index]
        })
        index++ ;
        if (index == colors.length) {
          index = 0;
        }

        // Print the category of the joke if it has one.
        var category = msg.value.categories;
        if (category.length == 0) return
        for (var i = 0; i < category.length; i++) {
          console.log(category[i]);
          $("#infoBar").html("This joke is from the <strong>" + category[i] + "</strong> category!");
        }
      });
    });
});



        // if (msg.value.categories.length == 0) return;
        // for (var i = 0; i < msg.value.categories.length; i++) {
        //   console.log(msg.value.categories[i]);
        // }


        //console.log the category name for each joke generated.
        // if (msg.value.categories.length > 0) {
        //   for (var i = 0; i < msg.value.categories.length; i++) {
        //     console.log(msg.value.categories[i]);
        //   }
        // }
        // else {
        //   console.log("No category");
        // }
