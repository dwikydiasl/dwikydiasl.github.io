//loading page
function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 500);
  function checkReady() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalID);
      callback.call(this);
    }
  }
}
function show(id, value) {
  document.getElementById(id).style.display = value ? 'block' : 'none';
}
onReady(function () {
  show('header', true);
  show('home', true);
  show('about', true);
  show('service', true);
  show('portofolio', true);
  show('info', true);
  show('footer', true);
  show('loading', false);
});

//sidemenu

function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

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

//button
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
  );


// owl-carousel
$('.owl-carousel').owlCarousel({
  margin:10,
  loop:true,
  autoWidth:true,
  items:3
})


/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
  );


AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});

$(document).ready(function(){
  $(".preloader").fadeOut();
})


