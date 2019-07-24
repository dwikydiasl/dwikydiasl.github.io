//loading page
function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 2000);
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



/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
  );



