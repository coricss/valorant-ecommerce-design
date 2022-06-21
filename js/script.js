
//TIMER
var seconds = 259200; //days to seconds

var startTimer = () => {

  var days        = Math.floor(seconds/24/60/60); //calculate days based in seconds
  var hoursLeft   = Math.floor((seconds) - (days*86400)); //calculate hours left by multiplying days to 86400sec/1day and subtract to seconds
  var hours       = Math.floor(hoursLeft/3600); //calculate hours by dividing hours left to 3600sec/1hr
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600)); //calculate minutes left by multiplying hours and 3600sec/1hr and subtract to hours left
  var minutes     = Math.floor(minutesLeft/60); //calculate minutes by dividing minutes left to 60sec/1min
  var remainingSeconds = seconds % 60; //calculate remaining seconds by getting the remainder of seconds in 1minute.
  
  pad = (x) => {
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


//LOGIN AUTH
const user = 'user1'; //username
const pass = 'user1'; //password

const username = document.getElementsByName('username')[0]; //get username class index 0
const password = document.getElementsByName('password')[0]; //get passowrd class index 0

const usernameError = document.getElementById('username-error'); //get username span element id
const passwordError = document.getElementById('password-error'); //get password span element id

//when typing in username input this function will execute
document.getElementById('username').addEventListener('keyup', (e) => {
  e.preventDefault();
  if(user !== username.value){ // check if inputted username is not equal to declared username
    username.classList.add('border-danger'); // if true, username input will have border red
    username.classList.remove('border-success'); // removing border success to replace by border danger
    usernameError.classList.remove('d-none'); // to show username error message
  }else{
    username.classList.remove('border-danger'); // if false, will remove border danger
    username.classList.add('border-success');  // replace border success
    usernameError.classList.add('d-none'); // to hide username error message
  }
});

//when typing in password input this function will execute
document.getElementById('password').addEventListener('keyup', (e) => {
  e.preventDefault();
  if(pass !== password.value){ // check if inputted password is not equal to declared password
    password.classList.add('border-danger'); // if true, password input will have border red
    password.classList.remove('border-success'); // removing border success to replace by border danger
    passwordError.classList.remove('d-none'); // to show password error message
  }else{
    password.classList.remove('border-danger'); // if false, will remove border danger
    password.classList.add('border-success'); // replace border success
    passwordError.classList.add('d-none'); // to hide password error message
  }
});

//when log in button clicked this will excute
document.getElementById('btn-login').addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('audioStatus', 'play'); //set audioStatus to play when logged in
  if((username.value === '') && (password.value === '')){ // check if username and password is both empty
    username.classList.add('border-danger');
    password.classList.add('border-danger');
  }else if(username.value === ''){  // check if username is empty
    username.classList.add('border-danger');
  }else if(password.value === ''){ // check if password is empty
    password.classList.add('border-danger');
  }else if ((user === username.value) && (pass === password.value)) { // check if username and password is both correct
    window.location.href="home.html";
  }
});
