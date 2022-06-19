const user =  'user1';
const pass = 'user1';

const login_auth = (e) => {
    e.preventDefault();
    const username = document.getElementsByName('username')[0];
    const password = document.getElementsByName('password')[0];
    if (user === username.value && pass === password.value) {
        window.location.href="home.html";
    }
    if (!username.value) {
        document.getElementById('username').removeAttribute("hidden");
        username.classList.add('border-danger');
    } 
    if (!password.value) {
        document.getElementById('password').removeAttribute("hidden");
        password.classList.add('border-danger');
    } 
    if (user != username.value) {
        document.getElementById('username').removeAttribute("hidden");
        username.classList.add('border-danger');
        
    }
    if (pass != password.value) {
      document.getElementById('password').removeAttribute("hidden");
      password.classList.add('border-danger');
    }
}


var seconds = 259200; //days to seconds

var startTimer = () => {

  var days        = Math.floor(seconds/24/60/60); //calculate days based in seconds
  var hoursLeft   = Math.floor((seconds) - (days*86400)); //calculate hours left by multiplying days to 86400sec/1day and subtract to seconds
  var hours       = Math.floor(hoursLeft/3600); //calculate hours by dividing hours left to 3600sec/1hr
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600)); //calculate minutes left by multiplying hours and 3600sec/1hr and subtract to hours left
  var minutes     = Math.floor(minutesLeft/60); //calculate minutes by dividing minutes left to 60sec/1min
  var remainingSeconds = seconds % 60; //calculate remaining seconds by getting the remainder of seconds in 1minute.
  
  function pad(x) {
    return (x < 10 ? "0" + x : x); //returning time number to 00 format, it changes when time number hits 10
  }

  document.getElementById('countdown').innerHTML = pad(days) + " Days : " + pad(hours) + " Hrs : " + pad(minutes) + " Mins : " + pad(remainingSeconds) + " Sec"; //setting countdown to span element

  if (seconds == 0) {
     //if seconds equal to 0 timer will stop and change the countdown to battle pass ended
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Battle Pass Ended";
  } else {
     //seconds will continue to decrease
    seconds--;
  }


}
var countdownTimer = setInterval('startTimer()', 1000); //setting the interval in 1 sec
