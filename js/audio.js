var audio = document.getElementById('audio'); //get audio
var pause = document.getElementById('pause'); //get id of pause icon
var play = document.getElementById('play'); //get id of play icon
var playPauseText = document.getElementById('play-pause'); //get id of span element for play-pause

//Check if page is loaded
document.addEventListener('DOMContentLoaded', () => {
  var audioStatus = localStorage.getItem('audioStatus'); //getting the audio status from local storage
  if(audioStatus === 'play'){ 
    audio.play(); //Audio will play if audioStatus is equivalent to "play"
    play.classList.add('d-none'); //d-none will add in class of play icon (hide play icon)
    pause.classList.remove('d-none'); //d-none will remove  in class of pause (show pause icon)
    playPauseText.innerHTML = 'Pause'; //span element will change its text to "pause"
  }else{
    audio.pause(); //Audio will pause if audioStatus is equivalent to "pause"
    pause.classList.add('d-none'); //d-none will add in class of pause icon (hide pause icon)
    play.classList.remove('d-none'); //d-none will remove  in class of play (show play icon)
    playPauseText.innerHTML = 'Play'; //span element will change its text to "play"
  }
});

//Function when div with id=music is clicked
document.getElementById('music').addEventListener('click', () =>{
  pause.classList.toggle('d-none'); //toggles pause
  play.classList.toggle('d-none');  //toggles play

  if(playPauseText.innerHTML === 'Play'){ //PLAY AUDIO
    audio.play(); //if span element's innerHTML is equals to "play" and when clicked, audio will play
    document.getElementById('play-pause').innerHTML = 'Pause'; //then span element's text will change to "pause"
    localStorage.setItem('audioStatus', 'play'); //setting the audioStatus to play in local storage
  }else{ //PAUSE AUDIO
    audio.pause(); //else audio will pause
    document.getElementById('play-pause').innerHTML = 'Play'; //then span element's text will change to "play"
    localStorage.setItem('audioStatus', 'pause'); //setting the audioStatus to pause in local storage
  }
});