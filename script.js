let result = document.querySelector(".totalValue");

let calBtn = document.querySelector(".submitBtn");
let resetBtn = document.querySelector(".resetBtn");
let values = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
let isFirstClick = [];
for (let i = 0; i < 9; i++) {
  isFirstClick.push(true);
}
let sum1 = 0;
let sum2 = 0;
let historyDiv = document.querySelector(".historyData");
let resetHistory = document.querySelector(".reset");
let quantitiesres = document.querySelectorAll(".totalquantity");
let quantities = document.querySelectorAll(".quantity");

resetHistory.addEventListener("click", function () {
  historyDiv.innerHTML = "";
  let tasks = [];
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

calBtn.addEventListener("click", function () {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks == null) tasks = [];
  tasks.push({ sum1 });
  console.log(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  appendOnRefresh();
});

resetBtn.addEventListener("click", function () {
  for (let i = 0; i < quantities.length; i++) {
    quantities[i].value = null;
    quantitiesres[i].innerText = 0;
  }
  result.innerText = 0;
});

// let quantities = document.querySelectorAll(".quantity");
for (let i = 0; i < quantities.length; i++) {
  quantities[i].addEventListener("keyup", function () {
    setTimeout(100);
    findSum();
  });
  quantities[i].addEventListener("click", function () {
    if (quantities[i] != null) {
      setTimeout(100);
      findSum();
    }
  });
}

function findSum() {
  sum1 = sum2 = 0;

  for (let i = 0; i < quantities.length; i++) {
    sum1 += quantities[i].value * parseInt(values[i]);
    sum2 = quantities[i].value * parseInt(values[i]);
    quantitiesres[i].innerText = sum2;
    result.innerText = sum1;
  }
}

function appendOnRefresh() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks == null) tasks = [];
  historyDiv.innerHTML = "";
  for (let i = tasks.length - 1; i >= 0; i--) {
    let div = document.createElement("div");
    div.classList.add("historyBox");
    div.innerText = tasks[i].sum1;
    historyDiv.append(div);
  }
}

appendOnRefresh();
