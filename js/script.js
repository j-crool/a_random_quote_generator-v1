/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing




var quotes = [
  {
    quote: "We all make choices in life, but in the end our choices make us.",
    source: "Andrew Ryan",
    citation: "Bioshock",
    tags: ['gaming', 'rpg', 'fps'],
  },
  {
    quote: "Get over here!",
    source: "Scorpion",
    citation: "Mortal Kombat",
    tags: ['gaming', 'fighter', '1v1'],
  },
  {
    quote: "Stay awhile, and listen!",
    source: "Deckard Cain",
    citation: "Diablo II",
    tags: ['gaming', 'dungeon crawler', 'mmo'],
  },
  {
    quote: "Thank you Mario! But our Princess is in another castle!",
    source: "Toad",
    citation: "Super Mario Bros.",
    tags: ['gaming', 'adventure', 'side scroller'],
  },
  {
    quote: "Send me out...with a bang.",
    source: "Sgt. Avery Johnson",
    citation: "Halo 3",
    year: "2007",
    tags: ['gaming', 'sci-fi adventure', 'fps'],
  },
]



function getRandomQuote(){
  var randomNumber = Math.floor((Math.random() * quotes.length));
  var selectedQuote = quotes[randomNumber];

  return selectedQuote;
}

function getRandomColor(){
  var R = Math.floor((Math.random() * 256));
  var G = Math.floor((Math.random() * 256));
  var B = Math.floor((Math.random() * 256));

  var body = document.getElementsByTagName("BODY")[0];

  document.body.style.background = 'rgb(' + R + ',' + G + ',' + B + ')';
}



function printQuote(){
  var theQuote = getRandomQuote();
  var quoteBox = document.getElementById('quote-box');
  var tagsList = document.getElementById('tags');

  var quoteBuilder = '';
  var tagsListBuilder = '';

  quoteBuilder = '<p class="quote">' + theQuote.quote + '</p><p class="source">' + theQuote.source;

  if ( 'citation' in theQuote ){
    quoteBuilder += '<span class="citation">' + theQuote.citation + '</span>';
  }

  if ( 'year' in theQuote ){
    quoteBuilder += '<span class="year">' + theQuote.year + '</span>';
  }

  if ( 'tags' in theQuote ){
     for (var i = 0; theQuote.tags.length > i ; i++) {
        tagsListBuilder += '<span class="tag">' + theQuote.tags[i] + '</span>'; 
     }
  }

  quoteBuilder += '</p>';
  quoteBuilder += tagsListBuilder;
  quoteBox.innerHTML = quoteBuilder;

  getRandomColor();

  setTimeout(printQuote, 25000);
}

printQuote();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
