var ohword = '[class^="ohword"]';
var letter = '[class*="char"]';
var letterWrapper = '.letter-wrapper';

var $ow1 = $('.ohword-1');
var $ow2 = $('.ohword-2');
var $btn = $('button');

var tl = new TimelineMax();

// Lettering.js magic!
// https://github.com/davatron5000/Lettering.js
$(ohword).lettering();

// Wrap each letter in a div
$(letter).wrap('<div class="letter-wrapper" />');

// Stagger letter animation
tl.staggerFrom($ow1.find(letterWrapper), 0.2, {
  ease: Power4.easeOut,
  opacity: 0,
  x: '-100%'
}, 0.05)
  .staggerFrom($ow1.find(letter), 0.6, {
  ease: Power4.easeOut,
  opacity: 0,
  x: '100%'
}, 0.1)
  .staggerTo($ow2, 0.6, {
  ease: Power4.easeOut,
  opacity: 1,
  height: '100%',
}, 0)
  .staggerFrom($ow2.find(letterWrapper), 0.2, {
  ease: Power4.easeOut,
  opacity: 0,
  x: '-100%'
}, 0.05)
.staggerFrom($ow2.find(letter), 0.6, {
  ease: Power4.easeOut,
  opacity: 0,
  x: '100%'
}, 0.1)
  .staggerTo($ow2.find(letterWrapper), 0.6, {
  ease: Power4.easeOut,
}, 0)
  .staggerTo($btn, 0.6, {
  ease: Power4.easeOut,
  opacity: 1
}, 0);


// Use button to restart GSAP animation
$btn.on('click', function() {
  tl.restart();
});