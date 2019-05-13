function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
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