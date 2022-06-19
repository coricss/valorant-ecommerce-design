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
    if (user != username.value || pass != password.value) {
        document.getElementById('username').removeAttribute("hidden");
        username.classList.add('border-danger');
        password.classList.add('border-danger');
    }
}

// var upgradeTime = 10800;
// var seconds = upgradeTime;

// function timer() {
//   var days        = Math.floor(seconds/24/60/60);
//   var hoursLeft   = Math.floor((seconds) - (days*86400));
//   var hours       = Math.floor(hoursLeft/3600);
//   var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
//   var minutes     = Math.floor(minutesLeft/60);
//   var remainingSeconds = seconds % 60;
//   function pad(n) {
//     return (n < 10 ? "0" + n : n);
//   }
//   document.getElementById('countdown').innerHTML = pad(hours) + " : " + pad(minutes) + " : " + pad(remainingSeconds);
//   if (seconds == 0) {
//     clearInterval(countdownTimer);
//     // $('.countdown').html("Time's Up");
//     // $('#autoSubmit').val('submit');
//     // $('#testForm').submit();
//   } else {
//     seconds--;
//   }
// }
// var countdownTimer = setInterval(timer(), 1000);

var setTime = 259200;
var seconds = setTime;
 var startTimer = () => {
  var days        = Math.floor(seconds/24/60/60);
  var hoursLeft   = Math.floor((seconds) - (days*86400));
  var hours       = Math.floor(hoursLeft/3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  var minutes     = Math.floor(minutesLeft/60);
  var remainingSeconds = seconds % 60;
  function pad(x) {
    return (x < 10 ? "0" + x : x);
  }
  document.getElementById('countdown').innerHTML = pad(days) + " Days : " + pad(hours) + " Hrs : " + pad(minutes) + " Mins : " + pad(remainingSeconds) + " Sec";
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Battle Pass Ended";
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval('startTimer()', 1000);

// const myInterval = setInterval(myTimer, 1000);

// function myTimer() {
//   const date = new Date();
//   document.getElementById("countdown").innerHTML = date.toLocaleTimeString();
// }

// function myStopFunction() {
//   clearInterval(myInterval);
// }
