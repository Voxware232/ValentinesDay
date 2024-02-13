let noBtnTexts = [
  "Are you sure?",
  "C'mon",
  "Pleaseee",
  "Are you sure?",
  "Come on, you know you want to!",
  "Pretty please?",
  "Oh, don't make me beg!",
  "You're really going to say no to this face?",
  "Just say yes and make my day!",
  "I promise it'll be fun!",
  "Give in to the love!",
  "You won't regret it, I promise!",
  "Come on, take a chance!",
  "Let's make some memories together!",
  "You'll be my hero if you say yes!",
  "Don't be shy, say yes!",
  "You're my sunshine, say yes!",
  "It's a once in a lifetime opportunity!",
  "Say yes and let's create some magic!",
  "Take my hand and let's make it official!",
  "You won't regret saying yes, I promise!",
  "I'll owe you one if you say yes!",
  "I'll be your Valentine's Day superhero!",
  "Saying yes is the best decision you'll make today!",
  "Don't miss out on all the fun, say yes!",
  "I'll bring the chocolates if you say yes!",
  "Be my partner in crime, say yes!",
  "Let's make this Valentine's Day unforgettable!",
  "Say yes and let's spread the love together!",
  "Let's make hearts flutter, say yes!",
];
let noBtnIndex = 0;
let yesButtonSize = 20;
function noClicked() {
  document.getElementById("question").innerText = "Will you be my valentine?";
  document.getElementById("no-btn").innerText = noBtnTexts[noBtnIndex];
  noBtnIndex = (noBtnIndex + 1) % noBtnTexts.length;
  /*
  document.getElementById("yes-btn").style.fontSize = `${
    parseInt(document.getElementById("yes-btn").style.fontSize) + 2
  }px`;
  */
  yesButtonSize += 2;
  document.getElementById("yes-btn").style.fontSize = yesButtonSize + "px";
  document.getElementById("valentine-img").src = "bunny-sad.jpg";
}

function yesClicked() {
  document.getElementById("question").innerText = "Yay!";
  document.getElementById("yes-btn").style.fontSize = "20px";
  document.getElementById("valentine-img").src = "bunny-jumping.gif";

  setTimeout(function () {
    window.alert("Love you :)");
  }, 1000);

  setTimeout(function () {
    window.location.reload();
  }, 10000);
}
