$(document).ready(function () {

  var audio = $('#audioTrack')[0];

  $playBtn = $('#audio-play');
  $pauseayBtn = $('#audio-pause');
  $audioControl = $('[data-type="audio-control"');

  // audio.play();

  setTimeout(initAudioPlayer, 800);

  function initAudioPlayer() {
    $pauseayBtn.parent().show();
    audio.loop = true;
    audio.play();
    audio.volume = .1;

    $audioControl.click(function () {
      if (audio.paused) {
        audio.play();
        $playBtn.parent().hide();
        $pauseayBtn.parent().show();
      } else {
        audio.pause();
        $playBtn.parent().show();
        $pauseayBtn.parent().hide();
      }
    });
  }

});
