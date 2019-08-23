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

//humberger


var svgIcon = document.getElementById("menu-icon-svg");

var topLine = document.getElementById("top-line");
var middleLine = document.getElementById("middle-line");
var bottomLine = document.getElementById("bottom-line");

var state = "menu";  // can be "menu" or "arrow"

var topLineY;
var middleLineY;
var bottomLineY;
var arrowLegY;
var arrowPointY;
var hideawayLinesOpacity;



///ANIMATIONS

var collapseDurationInFrames = 35;
var arrowAppearDurationInFrames = 25;
var menuReturnDurationInFrames = 45;
var fadeInDurationInFrames = 25;

var collapseComplete = false;
var arrowAppearComplete = false;
var menuReturnComplete = true;

var currentFrame = 1;


//Collapse

function collapseAnimation( durationInFrames, currentFrame ) {
  currentFrame++;
  if ( currentFrame <= collapseDurationInFrames ) {
    window.requestAnimationFrame( ()=> { 
      //top line
      topLineY = AJS.easeInOutBack( 20, 80, collapseDurationInFrames, currentFrame );
      topLine.setAttribute( "points", "7 "+topLineY+" 50 "+topLineY+" 93 "+topLineY );
      //middle line
      middleLineY = AJS.easeInOutBack( 50, 80, collapseDurationInFrames, currentFrame );
      middleLine.setAttribute( "d", "M7,"+middleLineY+" L93,"+middleLineY );
      if ( middleLineY >= 80) middleLine.style.opacity = "0";
      //bottom line
      if ( middleLineY >= 80) bottomLine.style.opacity = "0";
      //recursion
      collapseAnimation( collapseDurationInFrames, currentFrame );
    });
  } else {
    bottomLine.style.opacity = "0";
    currentFrame = 1;
    collapseComplete = true;
    openMenuAnimation();
  }
}


//Arrow Appear

function arrowAppearAnimation( durationInFrames, currentFrame ) {
  currentFrame++;
  if ( currentFrame <= arrowAppearDurationInFrames ) {
    window.requestAnimationFrame( ()=> { 
      //arrow
      arrowLegY = AJS.easeOutBack( 80, 70, durationInFrames, currentFrame );
      arrowPointY = AJS.easeOutBack( 80, 30, durationInFrames, currentFrame );
      topLine.setAttribute("points", "7 "+arrowLegY+" 50 "+arrowPointY+" 93 "+arrowLegY);
      //recursion
      arrowAppearAnimation( arrowAppearDurationInFrames, currentFrame );
    });
  } else {
    currentFrame = 1;
    arrowAppearComplete = true;
    menuReturnComplete = false;
    openMenuAnimation();
  }
}


//Combined Open Menu Animation

function openMenuAnimation() {
  if ( !collapseComplete ) { 
    collapseAnimation( collapseDurationInFrames, currentFrame );
  } else if ( !arrowAppearComplete) {
    arrowAppearAnimation( arrowAppearDurationInFrames, currentFrame );
  }
}


//Menu Return

function menuReturnAnimation( durationInFrames, currentFrame ) {
  currentFrame++;
  if ( currentFrame <= menuReturnDurationInFrames ) {
    window.requestAnimationFrame( ()=> { 
      //arrow to top line
      arrowLegY = AJS.easeOutBounce( 70, 20, durationInFrames, currentFrame );
      arrowPointY = AJS.easeOutBounce( 30, 20, durationInFrames, currentFrame );
      topLine.setAttribute("points", "7 "+arrowLegY+" 50 "+arrowPointY+" 93 "+arrowLegY);
      //middle line
      middleLineY = AJS.easeOutBounce( 80, 50, menuReturnDurationInFrames, currentFrame );
      middleLine.setAttribute( "d", "M7,"+middleLineY+" L93,"+middleLineY );
      //bottom line
      bottomLineY = AJS.easeOutBounce( 94, 80, menuReturnDurationInFrames, currentFrame );
      bottomLine.setAttribute( "d", "M7,"+bottomLineY+" L93,"+bottomLineY );
      //middle and bottom lines opacity
      hideawayLinesOpacity = AJS.linear( 0, 1, fadeInDurationInFrames, currentFrame );
      middleLine.style.opacity = hideawayLinesOpacity;
      bottomLine.style.opacity = hideawayLinesOpacity;
      //recursion
      menuReturnAnimation( menuReturnDurationInFrames, currentFrame );
    });
  } else {
    currentFrame = 1;
    collapseComplete = false;
    arrowAppearComplete = false;
    menuReturnComplete = true;
  }
}


// Close Menu Animation

function closeMenuAnimation() {
  if ( !menuReturnComplete ) {
    menuReturnAnimation( menuReturnDurationInFrames, currentFrame );
  }
}



///EVENTS

svgIcon.addEventListener( "click", ()=> {
  if ( state === "menu" ) {
    openMenuAnimation();
    state = "arrow"
  } else if ( state === "arrow" ) {
    closeMenuAnimation();
    state = "menu"
  }
});






//sidemenu

// function openNav() {
//   document.getElementById("myNav").style.height = "100%";
//   // var x = document.getElementById("myNav").style.height = "100%";
//   // if (x.style.display === "none") {
//   //   x.style.display = "block";
//   // } else {
//   //   x.style.display = "none";
//   // }
// }

// function closeNav() {
//   document.getElementById("myNav").style.height = "0%";
// }

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



