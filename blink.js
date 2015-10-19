(function ($) { //an Immediately Invoked Function Expression, and then pass the function jQuery, and name the parameter $:
  $.fn.blink = function (speed) {
    setInterval(function () { //setTimeout did not work: just ran 1 time
      this.toggle(); // is ideal because it does the opposite of current state of hide/show
    }.bind(this), speed); // set the state of the blink object using bind
    return this; // makes code chainable
  };
}(jQuery));
