var UI = require('ui');
var ajax = require('ajax');
var Vector2 = require('vector2');


// Create a Card with title and subtitle
var card = new UI.Card({
  title:'#MFM',
  subtitle:'Meat Free Monday \^o^/ '
});

//creating a window
var splashWindow = new UI.Window();

//text elements to inform user
var text = new UI.Text({
  position: new Vector2(0,0),
  size: new Vector2(144,168),
  text: 'Downloading data...',
  font: 'GOTHIC_28_BOLD',
  color: 'black',
  textOverflow: 'wrap',
  textAlign: 'center',
  backgroundColor: 'white'
});

splashWindow.add(text);
splashWindow.show();

/*
// Display the Card
card.show();

// Construct URL
var URL = 'https://flickering-fire-8922.firebaseio.com/.json';

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log("Successfully fetched food data!");

    // Extract data
    var food = data.food[1].name;

    // Show to user
    card.subtitle(food);
    card.body("Jenny likes food");
  },
  function(error) {
    // Failure!
    console.log('Failed fetching firebase data: ' + error);
  }
);
*/
