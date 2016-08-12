$(document).ready(function() {
  // Handler for .ready() called.
  var url = "http://api.icndb.com/jokes/random";
  var colors = ["orange", "blue",  "indigo", "green", "pink", "red"]
  var index = 0;
  $(".quoteButton").click(function() {
    $.ajax({
      method: "GET",
      url: url
    })
    .done(function(msg) {
        // $(".test").text(msg);
        console.log(msg);
        //print the quote to the page
        $(".test").html('"' + msg.value.joke + '"');
        // color thingy
        console.log(colors[index])
        index++ ;
        $(".test").css({
          background: colors[index]
        })
        if (index == colors.length) {
          index = 0;
        }

        //category thingy
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
