
function toggleDarkMode() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("dark-mode");
  }
 
  var quotes = [  "The best way to predict the future is to invent it. - Alan Kay",  "If you can't explain it simply, you don't understand it well enough. - Albert Einstein",  "Do what you can, with what you have, where you are. - Theodore Roosevelt",  "Believe you can and you're halfway there. - Theodore Roosevelt",  "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein"];

  function displayRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];
     alert(quote);
    }