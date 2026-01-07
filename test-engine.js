let timeLeft = 20 * 60;
let timer = document.getElementById("timer");
let selected = "";

setInterval(() => {
  timeLeft--;
  let m = Math.floor(timeLeft / 60);
  let s = timeLeft % 60;
  timer.innerText = m + ":" + (s < 10 ? "0" : "") + s;

  if (timeLeft <= 0) {
    submitTest();
  }
}, 1000);

function selectAnswer(ans) {
  selected = ans;
}

function submitTest() {
  localStorage.setItem("answer", selected);
  window.location.href = "result.html";
}
