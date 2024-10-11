let inputText =document.querySelector(".task");
 let time = document.querySelector(".time");
let btn = document.querySelector(".btn");




// add features 

btn.addEventListener("click" , function (){

if(inputText.value == "" || time.value == ""){
  alert ("Please enter your today Tasks")
  

} else{
   
  let listsTask = document.querySelector(".list-container") 
  //listsTask.style.display = "flex";
 
  let taskdetails = document.createElement("div");

  taskdetails.classList.add("task-details")

  let taskpara = document.createElement("p");
  let tasktime = document.createElement("p",);
  let deletetbtn = document.createElement("button");
  
taskpara.innerText = inputText.value;
taskpara.classList.add("task-list")

tasktime.innerText = time.value;
tasktime.classList.add("task-time")

deletetbtn.innerText = "Delete";
deletetbtn.classList.add("delete-btn")

taskdetails.appendChild(taskpara)
taskdetails.appendChild(tasktime)
taskdetails.appendChild(deletetbtn)

listsTask.appendChild(taskdetails);
saveHistory()

}
inputText.value ="";
time.value="";
})

//delete features 

let list = document.querySelector(".list-container")

list.addEventListener("click" , function(e){
  let delitem = (e.target.nodeName);
  if(delitem == "BUTTON"){
     (e.target.parentElement).remove();
     saveHistory()
  }
  
})

function saveHistory(){
  localStorage.setItem("data" , list.innerHTML)
}

function showtasks(){
  list.innerHTML = localStorage.getItem("data")
}
showtasks()