
var quotes = [
{
  quote: "Not all those who wander are lost.",
  
  source: "J.R.R. Tolkien"
},
{
  quote: "I have found that it is the small everyday deeds of ordinary folk that keep the darkness at bay. Small acts of kindness and love.",

  source: "J.R.R. Tolkien",

  citation: "Tolkein Biography",

  year: " 1968"

},
{
  quote: "Courage is found in unlikely places.",

  source: "J.R.R. Tolkien"
},
{
  quote: "The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.",
  
  source: "J.R.R. Tolkien"
},
{
  quote: "It does not do to leave a live dragon out of your calculations, if you live near one.",
  
  source: "J.R.R. Tolkien"
}

];

//quotes array

console.log(quotes);
// log to make sure quotes print to console



function getRandomQuote() {

  var ranNum = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[ranNum];



  console.log("The Random Number", ranNum);
  console.log("Random Quote Generator",randomQuote );


  return randomQuote;
 
}

/***
function to make a random number
from zero to last index of quotes
and logging source to make sure it works
assinging, the random number
to qoutes to get the randomly 
generated quote
 ***/

getRandomQuote();
// call the function outside



function printQuote() {

var randomQuote2 = getRandomQuote();
console.log("Random Quote Object:", randomQuote2);
console.log("Quote:", randomQuote2.quote);
console.log("Source:", randomQuote2.source);
//logging per assignment
var htmlString  = '<p class="quote">' + randomQuote2.quote + '</p>';
htmlString  += '<p class="source">' + randomQuote2.source;
//make a var named htmlString to assign source and quote to the class

if(randomQuote2.citation) {
  htmlString += '<span class="citation">' + randomQuote2.citation + '</span>';
  }
//code for citation per assignment
if(randomQuote2.year) {

  htmlString += '<span class="year">' + randomQuote2.year + '</span>';
   
}
//code for year per assignment


htmlString += '</p>';
//closing out the tag

console.log("Complete HTML String:", htmlString);

// log the whole htmlString

document.getElementById('quote-box').innerHTML = htmlString;

}

/***
assign htmlString to quote-box inner html to 
show all information on the page

 ***/


printQuote();
//finally call the function


document.getElementById('load-quote').addEventListener("click", printQuote, false);
//logic needed to click on the load quote button to make the quote change



