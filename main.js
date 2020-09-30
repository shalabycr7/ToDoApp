let mainSec = document.querySelector("main");
const addBtn = document.querySelector("#addBtn");
let saveCu = () => {
   let lsMainSec = localStorage.getItem("mainHTML");
   lsMainSec == null ?
      console.log("no added tasks") :
      (mainSec.innerHTML = lsMainSec);
};
addBtn.addEventListener("click", () => {
   let taskName = prompt("Pls Enter Task");
   if (taskName) {
      let newSec = document.createElement("section");
      newSec.className = "todoDiv";
      newSec.classList.add("slideIn");
      let newLabel = document.createElement("label");
      newLabel.className = "container";
      let newInput = document.createElement("input");
      newInput.setAttribute("type", "checkbox");
      newInput.className = "checkInput";
      let newSpan = document.createElement("span");
      newSpan.className = "checkmark";
      newLabel.appendChild(newInput);
      newLabel.appendChild(newSpan);
      let newTaskBame = document.createElement("h3");
      newTaskBame.textContent = taskName;
      let newMenu = document.createElement("img");
      newMenu.setAttribute("src", "pics/ellipsis-h.svg");
      newMenu.setAttribute("alt", "menu icon");
      newSec.appendChild(newLabel);
      newSec.appendChild(newTaskBame);
      newSec.appendChild(newMenu);
      mainSec.appendChild(newSec);
      newSec.scrollIntoView();
      localStorage.setItem("mainHTML", mainSec.innerHTML);
      isChecked();
   } else {
      alert("Task Discarded");
   }
});

let isChecked = () => {
   let checkInputs = document.getElementsByClassName("checkInput");
   let chs = document.getElementsByClassName("todoDiv");
   for (let ch of chs) {
      ch.addEventListener("click", (e) => {
 if (e.target.className === "checkInput") {
   if (e.target.checked) {
      e.currentTarget.classList.add("deleted");
   e.currentTarget.classList.remove("slideIn");
   let target = e.currentTarget;
   let imgChild=target.children[2];
   imgChild.remove();
   setTimeout(() => {
   target.remove();
localStorage.setItem("mainHTML", mainSec.innerHTML);
},500,target);
}
}
   });
   }
};

saveCu();
isChecked();