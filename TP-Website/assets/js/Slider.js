var sequenceElement = document.getElementById("sequence");

var options = {
  autoPlay:true,
  autoPlayInterval:3000,
  autoPlayPauseOnHover:true,
  keyNavigation: true,
  animateCanvas: false,
  phaseThreshold: false,
  reverseWhenNavigatingBackwards: true
}

var mySequence = sequence(sequenceElement, options);