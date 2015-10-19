(function ($) {
  $.fn.blink = function (speed) {
    setInterval(function () {
      this.toggle();
    }.bind(this), speed);
    return this;
  };
}(jQuery));

$('html').blink(20).css("background-color", "red");
