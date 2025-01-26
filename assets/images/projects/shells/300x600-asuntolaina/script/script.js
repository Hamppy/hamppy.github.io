// VARIABLES
var tl1 = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();

var animationSpeed = 1;
var animationDelay = 14.5;

// **YLEISET ANIMAATIOT**
TweenMax.set('.hide', {autoAlpha:1});

// tl1
// .from('.bg', animationSpeed, {autoAlpha:0})
// .fromTo('.bg', animationDelay, {y:0}, {y:400, ease: Power1.easeInOut})
// .to('.bg', animationDelay, {y:0, ease: Power1.easeInOut})

tl2
.staggerFrom('.otsikko, .alaotsikko', 0.8, {ease: Power1.easeOut, x:-200, autoAlpha:0}, 0.2)
.staggerFrom('.cta, .disclaimer', 0.8, {autoAlpha:0}, 0.2, '-=0.6')
;

//stoppaa animaation 30 sekunnin kuluttua
TweenLite.delayedCall(30, stopAnimation);

function stopAnimation(){
  tl1.stop();
  tl2.stop();
  tl3.stop();
  tl4.stop();
  tl5.stop();
}

// hover animation
var banner = document.getElementById('banner');
banner.onmouseover = function(){
  TweenLite.to('.cta', 0.2, {backgroundColor: '#e35600'});
  TweenLite.to('.bg', 0.6, {scale:1.02});
};

banner.onmouseout = function(){
  TweenLite.to('.cta', 0.2, {backgroundColor: '#f15c00'});
  TweenLite.to('.bg', 0.8, {scale:1});
};
