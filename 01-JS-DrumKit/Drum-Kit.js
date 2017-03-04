(function(window, document, undefined) {
  'use strict';

  function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
    console.log('insideRemoveTransition')
  }

  function playSound(event) {
    // 'audio[data-key="'+event.keyCode+'"]';
    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    var key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  var keys = Array.from(document.getElementsByClassName('key'));
  console.log('keys', keys);

  keys.forEach(function(key, index, arr){
    return key.addEventListener('transitionend', removeTransition);
  });
  window.addEventListener('keydown', playSound);

}(window, document));
