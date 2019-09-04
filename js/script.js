//loading page
function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 3000);
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



//chat
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

