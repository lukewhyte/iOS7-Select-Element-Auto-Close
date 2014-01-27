(function ($) {
  // The purpose of this plugin is to override the necessity to click 'close' after choosing an option
  // via iOS7's default select element functionality on iPhone and iPad. The option is provided to either
  // sniff out the OS (via getOS()) or, if such functionality isn't your cup of tea, override the default 
  // by setting a max width.
  //
  // In order to override the native functionality, the option elements must be wrapped in an optgroup.
  // In case you're populating select elements dynamically (and, in turn, removing the optgroup wrappers
  // added by init()), the class 'iOS_select' is added to all select elements so you've got a selector to 
  // target for manually reapplying optgroups

  "use strict"

  var pluginName = 'iOSSelect';

  function iOSSelect(element, maxWidth) {
    this.$element = $(element);
    if (typeof maxWidth === 'number') {
      this.getWidth(maxWidth);
    }
    else {
      this.getOS();
    }
  }

  iOSSelect.prototype = {
    getOS: function() {
      if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
        this.init();
      }
    },
    getWidth: function(width) {
      if ($(window).width() <= width) {
        this.init();
      }
    },
    wrapOptions: function () {
      if (!(this.$element.children('optgroup').length)) {
        this.$element.wrapInner('<optgroup value="" />');
      }
    },
    init: function () {
      this.wrapOptions();
      this.$element
        .addClass('iOS_select')
        .on({
          'focus mousedown': function () {      
            $(this).on({
              change: function () {
                $(this).blur();
              }
            });
          }
        });
    }
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, pluginName)) {
        $.data(this, pluginName, new iOSSelect(this, options));
      }
    });
  };
}(jQuery));