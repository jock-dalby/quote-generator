var quoteButton = document.getElementById('quoteButton');
var displayQuote = document.getElementById('quoteBox');
var url = document.getElementById('url').textContent;
console.log(quoteButton);
console.log(displayQuote);
console.log(url);



// Get button event listener
quoteButton.addEventListener('click', newQuote);

function newQuote() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send(null);

  xhr.onreadystatechange = function () {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE) {
      if (xhr.status === OK)
        console.log(xhr.responseText); // 'This is the returned text.'
        var quote = xhr.responseText;
        displayQuote.textContent = quote;
      } else {
        console.log('Error: ' + xhr.status); // An error occurred during the request.
      }
    }
  };







// Generate API quote from url

// var xhr = new XMLHttpRequest();
// xhr.open ("GET", url, true);
// xhr.send();
//
// xmlDocument = xhr.responseXML;
// console.log(xmlDocument);
// function newQuote() {
//   $.ajax({
//     method: "GET",
//     url: url
//   })
//   .done(function(msg) {
//   console.log(msg);
//   })
// }
//
// console.log(newQuote());
