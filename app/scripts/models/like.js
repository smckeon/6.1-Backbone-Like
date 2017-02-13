// get access to Backbone library
var Backbone = require('backbone');
// get access to jQuery library
var $ = require ('jquery');

// create model constructor
var Like = Backbone.Model.extend({
  // set default values
  defaults: {
    'count': 0,
    'label': ''
  },

  initialize: function(){
    // this.on('change:count', this.updateHTMLCount);
    // this.on('change:label', this.updateHTMLLabel);
  },
  // add method that increments the count by one
  incrementCount: function() {
    // set the value to current value + 1; in otherwords, increment the count by 1
    this.set('count', this.get('count') + 1);
  },

  // updateHTMLCount: function() {
  //   $('.count').text(this.get('count'));
  // },

  // updateHTMLLabel: function(){
  //   $('.label').text(this.get('label'));
  // },

  toJSON: function(){
    if(this.get('count') != 1) {
      this.set('label', 'Likes')
    } else {
      this.set('label', 'Like')
    }
    // return what Backbone's Model toJSON would normally return (models attributes);
    return Backbone.Model.prototype.toJSON.call(this);
  }

})

module.exports = {
  'Like': Like
}


// js var Like = Backbone.Model.extend({ // ... like: function() { // do some stuff } });
