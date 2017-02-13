var Like = require ('./models/like').Like;
var $ = require ('jquery');

// creates a new model instance
var like = new Like();

$('.count').text('0');
$('.label').text('Likes');

like.on("change:count", function(){
  // do stuff
  $('.count').text(like.get('count'));
});

like.on("change:label", function(){
  // do stuff
  $('.label').text(like.get('label'));
});

// click event
$('#like-button').on('click', function(){
  // run the model's incrementCount method
  like.incrementCount();
  // run the model's toJSON method
  like.toJSON();
});
