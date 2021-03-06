// Generated by CoffeeScript 1.7.1
(function() {
  var $body, $height, $navright, $navtog, $width, getURL, init, menuToggle, socket;

  socket = io.connect(":8082");

  $body = $("body");

  $navright = $(".navbar-right");

  $navtog = $(".navbar-toggle");

  $height = window.innerHeight;

  $width = window.innerWidth;

  getURL = function() {
    var url;
    url = window.location.pathname;
    if (url !== "/") {
      return url;
    } else {
      return "/index";
    }
  };

  menuToggle = function(status) {
    var nStatus;
    if ($width < 768) {
      if (status === "close") {
        $navright.removeClass("visible").addClass("disable");
      } else {
        nStatus = $navright.hasClass("visible");
        if (nStatus !== true) {
          $navright.removeClass("disable").addClass("visible");
        } else {
          $navright.removeClass("visible").addClass("disable");
        }
      }
    }
  };

  init = function() {
    $body.append("<script src=\"http://localhost:3001/scripts" + getURL() + ".js\"></script>");
    menuToggle("close");
  };

  $navtog.click(function() {
    $height = window.innerHeight;
    $width = window.innerWidth;
    menuToggle();
  });

  init();

  $(window).resize(function() {
    var timer;
    $height = window.innerHeight;
    $width = window.innerWidth;
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      if ($width > 767) {
        $navright.removeClass("disable").removeClass("visible");
      }
    }, 200);
  });

}).call(this);
