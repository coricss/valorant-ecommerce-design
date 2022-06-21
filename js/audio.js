var audio = document.getElementById('audio');
document.addEventListener('DOMContentLoaded', () => {
  audio.play();
});

document.getElementById('music').addEventListener('click', () =>{
  var pause = document.getElementById('pause');
  var play = document.getElementById('play');
  var playPauseText = document.getElementById('play-pause');

  pause.classList.toggle('d-none');
  play.classList.toggle('d-none');

  if(playPauseText.innerHTML === 'Pause'){
    audio.pause();
    document.getElementById('play-pause').innerHTML = 'Play';
  }else if(playPauseText.innerHTML === 'Play'){
    audio.play();
    document.getElementById('play-pause').innerHTML = 'Pause';
  }
});