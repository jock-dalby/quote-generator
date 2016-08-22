$(document).ready(function() {
  // Handler for .ready() called.
  // API URL is lifted from the page.
  var url = "http://api.icndb.com/jokes/random";
  // var url = document.getElementById("dropdown");
  // console.log(url.options[url.selectedIndex].value)
  $("#quoteButton1").click(function() {
    // Change button text while getting quote
    $("#quoteButton1").html("Retrieving quote...");
    $("#quoteBox").addClass("loader");
    $.ajax({
      method: "GET",
      url: 	url
    })

    .done(function(msg) {
        // Change button text back when quote is received
        $("#quoteButton1").html("Hit me with a quote from the one and only ");
        $("#quoteBox").removeClass("loader");
        // Print the entire msg object to console.log to decifer which part we want.
        console.log(msg);

        // Print the quote part of the msg object to the page.
        // If length of quote is > 10 words, reduce the font size.
        var newQuote = '"' + msg.value.joke + '"';
        var quoteSize = newQuote.split(" ");
        if (quoteSize.length > 10) {
          $("#quoteBox").html(newQuote.fontsize(6));
        } else {
          $("#quoteBox").html(newQuote.fontsize(18));
        }


        // Random change background color.
        function changeColor() {
          // Create random rgb color
          var x = Math.floor(Math.random() * 256); // range is 0-255
          var y = Math.floor(Math.random() * 256);
          var z = Math.floor(Math.random() * 256);
          var thergb = "rgb(" + x + "," + y + "," + z + ")";
          console.log(thergb);
          // Change background to random rgb color.
          $(".mainBox").css({
            background: thergb
          });
        }
        // Call the changeColor() function.
        changeColor();

        // Print the category of the joke if it has one.
        var category = msg.value.categories;
        if (category.length == 0) {
          $("#infoBar").html("Sorry folks, we do not have a category for this particular quote.");
        }
        for (var i = 0; i < category.length; i++) {
          console.log(category[i]);
          $("#infoBar").html("This joke is from the <strong>" + category[i] + "</strong> category!");
        }
      });
    });

    $("#quoteButton2").click(function(){
      $("#quoteButton2").css({
        background: "red"
      });
    })

    $("#quoteButton3").click(function(){
      $("#quoteButton3").html("I'm not working either!");
      $("#quoteButton3").css({
        background: "red"
      });
    })
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
