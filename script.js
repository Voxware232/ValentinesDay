let noBtnTexts = ["Are you sure?", "C'mon", "Pleaseee"];
let noBtnIndex = 0;

function yesClicked() {
  document.getElementById("question").innerText = "Yay!";
  document.getElementById("yes-btn").style.fontSize = "20px";
}

function noClicked() {
  document.getElementById("no-btn").innerText = noBtnTexts[noBtnIndex];
  noBtnIndex = (noBtnIndex + 1) % noBtnTexts.length;
  document.getElementById("yes-btn").style.fontSize = `${
    parseInt(document.getElementById("yes-btn").style.fontSize) + 2
  }px`;
}
