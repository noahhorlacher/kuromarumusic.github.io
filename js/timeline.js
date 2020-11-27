(function() {

    'use strict';
  
    // check if an element is in viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      $("timeline li").each(function(){
        if (isElementInViewport(this)) {
          $(this).addClass("in-view");
        } else {
          //$(this).removeClass("in-view");
        }
      });
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();