$(document).ready(function () {

  var audio = $('#audioTrack')[0];

  $playBtn = $('#audio-play');
  $pauseayBtn = $('#audio-pause');
  $audioControl = $('[data-type="audio-control"');
  audio.volume = 0;

  setTimeout(initAudioPlayer, 1000);

  function initAudioPlayer() {
    audio.loop = true;
    audio.volume = .1;
    // audio.play();

    $playBtn.parent().show();
    $pauseayBtn.parent().hide();




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
