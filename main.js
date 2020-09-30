let mainSec = document.querySelector("main");
const addBtn = document.querySelector("#addBtn");
let titleInput=document.querySelector('#title');
let saveBtn=document.querySelector('#saveCheck');
let saveCu = () => {
   let lsMainSec = localStorage.getItem("mainHTML");
   lsMainSec == null ?
      console.log("no added tasks") :
      (mainSec.innerHTML = lsMainSec);
};
addBtn.addEventListener("click", () => {
  // let taskName = prompt("Pls Enter Task");
   overlay(0,'block');
   saveBtn.addEventListener('click',function(){
   if(titleInput.value!==''){
      let newSec = document.createElement("section");
      newSec.className = "todoDiv";
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
      newTaskBame.textContent = titleInput.value;
      let newMenu = document.createElement("img");
      newMenu.setAttribute("src", "pics/ellipsis-h.svg");
      newMenu.setAttribute("alt", "menu icon");
      newSec.appendChild(newLabel);
      newSec.appendChild(newTaskBame);
      newSec.appendChild(newMenu);
      newSec.classList.add("slideIn");
      mainSec.appendChild(newSec);
      newSec.scrollIntoView();
      localStorage.setItem("mainHTML", mainSec.innerHTML);
      saveCu();
      isChecked();
      titleInput.value='';
      overlay(0,'none');
        this.removeEventListener("click", arguments.callee);
   }
   else{
      alert('Please add a task')
   }
   });
}
);
saveCu();

let isChecked = () => {
   let checkInputs = document.getElementsByClassName("checkInput");
   let chs = document.getElementsByClassName("todoDiv");
   for (let ch of chs) {
      ch.addEventListener("click", (e) => {
         
         let target = e.currentTarget;
 if (e.target.className === "checkInput") {
   if (e.target.checked) {
      e.currentTarget.classList.add("deleted");
   e.currentTarget.classList.remove("slideIn");
   //
   let imgChild=target.children[2];
  imgChild.remove();
   setTimeout(() => {
   target.remove();
localStorage.setItem("mainHTML", mainSec.innerHTML);
},500,target);
}
}
if(e.target.className==='menuIcon'){
   
let q=document.querySelector('.onTop');
//q.style.animation='hh 1s alternate';
q.classList.toggle('traySlideLeft')
console.log('nb')
}
   });
   }
};
isChecked();
function overlay(index,state){
   document.querySelectorAll('.overlay')[index].style.display=state;
}
