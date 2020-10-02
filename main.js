let mainSec = document.querySelector("main");
const addBtn = document.querySelector("#addBtn");
const editBtn = document.querySelector(".editBtn");
let tray = document.querySelector('.onTop');
let titleInput=document.querySelector('#title');
let saveBtn=document.querySelector('#saveCheck');

let saveCu = () => {
   let lsMainSec = localStorage.getItem("mainHTML");
   lsMainSec == null ?
      console.log("no added tasks") :
      (mainSec.innerHTML = lsMainSec);
};

addBtn.addEventListener("click", () => {
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
      newMenu.classList.add('menuIcon');
      newSec.appendChild(newLabel);
      newSec.appendChild(newTaskBame);
      newSec.appendChild(newMenu);
      newSec.classList.add("slideIn");
      mainSec.appendChild(newSec);
      newSec.scrollIntoView();
      localStorage.setItem("mainHTML", mainSec.innerHTML);
      titleInput.value='';
      saveCu();
      isChecked();
      overlay(0,'none');
      this.removeEventListener("click", arguments.callee);
   }
   else{
      alert('Please add a task');
   }
   });
}
);
function pageOnLoad(){
   saveCu();
   isChecked();
}

let isChecked = () => {
   let checkInputs = document.getElementsByClassName("checkInput");
   let chs = document.getElementsByClassName("todoDiv");
   for (let ch of chs) {
      ch.addEventListener("click", (e) => {
         
         let target = e.currentTarget;
         let sideMenuTray = document.querySelector('.onTop');
         
         sideMenuTray.style.top = `${target.offsetTop}px`;
 if (e.target&&e.target.className === "checkInput") {
   if (e.target.checked) {
      e.currentTarget.classList.add("deleted");
      e.currentTarget.classList.remove("slideIn");
      //
      let imgChild = target.children[2];
      imgChild.remove();
      setTimeout(() => {
         target.remove();
         localStorage.setItem("mainHTML", mainSec.innerHTML);
      }, 500, target);
   }
}
if(e.target&&e.target.className==='menuIcon'){
tray.classList.toggle('traySlideLeft');
   sideMenu(target);
}
   });
   }
};


let overlay=(index,state)=>{
   document.querySelectorAll('.overlay')[index].style.display=state;
}


let sideMenu=(target)=>{
editBtn.addEventListener('click',function(){
  let editedTaskName=prompt('Please Enter New Task Title');
  if (editedTaskName){
   let currentTaskName=target.children[1];
   currentTaskName.textContent=editedTaskName;
  tray.classList.toggle('traySlideLeft');
  localStorage.setItem("mainHTML", mainSec.innerHTML);
   saveCu();
   isChecked();
   
  }
})
}
