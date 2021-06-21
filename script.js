let result = document.querySelector(".totalValue");

let calBtn = document.querySelector(".submitBtn");
let resetBtn = document.querySelector(".resetBtn");
let values = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
let isFirstClick = [];
for(let i=0;i<9;i++){
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
    quantities[i].innerText = 0;
    quantitiesres[i].innerText = 0;
  }
  result.innerText = 0;
});

// let quantities = document.querySelectorAll(".quantity");
for (let i = 0; i < quantities.length; i++) {

    quantities[i].addEventListener("click", function (e){
    if(isFirstClick[i]){
        quantities[i].innerText ="";
          isFirstClick[i]=false;
      }})

  quantities[i].addEventListener("keyup", function (e) {
    if(isNaN(e.key)){
        quantities[i].innerText = 0;
        quantitiesres[i].innerText = 0;
        alert("Enter Only Number:");
        findSum();
        return;
    }
    setTimeout(100);
    findSum();
  });
}

function findSum() {
  sum1 = sum2 = 0;

  for (let i = 0; i < quantities.length; i++) {
    sum1 +=
      parseInt(quantities[i].innerText == "" ? 0 : quantities[i].innerText) *
      parseInt(values[i]);
    sum2 =
      parseInt(quantities[i].innerText == "" ? 0 : quantities[i].innerText) *
      parseInt(values[i]);
    quantitiesres[i].innerText = sum2;
    result.innerText = sum1;
  }
}

function appendOnRefresh() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  historyDiv.innerHTML = "";
  for (let i = tasks.length - 1; i >= 0; i--) {
    let div = document.createElement("div");
    div.classList.add("historyBox");
    div.innerText = tasks[i].sum1;
    historyDiv.append(div);
  }
}

appendOnRefresh();
