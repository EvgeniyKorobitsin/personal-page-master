$(document).ready(function () {

  var audio = $('#audioTrack')[0];

  $playBtn = $('#audio-play');
  $pauseayBtn = $('#audio-pause');
  $audioControl = $('[data-type="audio-control"');
  audio.volume = .1;

  setTimeout(initAudioPlayer, 1000);

  function initAudioPlayer() {
    $pauseayBtn.parent().show();
    $playBtn.parent().hide();
    audio.loop = true;
    audio.play();


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
