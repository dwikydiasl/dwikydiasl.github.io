// Section
var sections = $('section')
, nav = $('nav')
, nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
    bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
  , id = $el.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 700);

  return false;
});



//

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay_menu').toggleClass('open');
  });


// Header scroll

$(function() {
  var header = $(".header");
  
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("scrolled");
    } 
    else {
      header.removeClass("scrolled");
    }
  });
  
});



//transition 2
var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'fade-right-content'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();


//button
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
  );


// Utils
var Util = function() {};

Util.prototype.getRandomInt = function(min, max) {
  return Math.floor(this.getRandomFloat(min, max));
};

Util.prototype.getRandomFloat = function(min, max) {
  return Math.random() * (max - min + 1) + min;
};

// Line
var Line = function() {
  this.x;
  this.y;
  this.width;
  this.height;
  
  this.elem;
}

Line.prototype.generateRandom = function() {
  var t = this;
  var u = new Util();

  t.x = u.getRandomInt(-100, screen.width);
  t.y = u.getRandomInt(-100, screen.height);

  t.width = u.getRandomInt(100, 300);
  t.height = u.getRandomInt(1, 10);
  
  console.log(t);
  
  var div = document.createElement("div");
  div.classList.add("line");
  div.style.width = t.width + "px";
  div.style.height = t.height + "px";
  div.style.top = t.y + "px";
  div.style.left = t.x + "px";
  div.style.setProperty('animation-delay', u.getRandomFloat(0, .5) + 's');
  div.style.setProperty('animation-duration', u.getRandomFloat(.8, 1.8) + 's');
  
  document.body.appendChild(div);
  
};


// DOM ready
(function(){
  for(var i = 0; i <= 200; i++){
    new Line().generateRandom();
  };
})();