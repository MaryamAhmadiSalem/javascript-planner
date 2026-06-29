let body = document.querySelector(".body")
let item = []

let inputText = document.createElement("input");
inputText.classList.add("text");   
inputText.style.position= "absolute";
inputText.style.direction = "rtl";
inputText.style.width = "300px";
inputText.style.height = "30px";
inputText.style.top = "20px";
inputText.style.right = "60PX";
inputText.style.borderRadius = "10px";
body.appendChild(inputText);

let inputCheckbox= document.createElement("input");
inputCheckbox.classList.add("checkbox");
inputCheckbox.type= "checkbox";
inputCheckbox.style.position= "absolute";
inputCheckbox.style.width = "25px";
inputCheckbox.style.height = "30px";
inputCheckbox.style.top = "20px";
inputCheckbox.style.right = "15px";
body.appendChild(inputCheckbox);

let addIcon = document.createElement("img");
addIcon.addEventListener("click" , addItem)
addIcon.style.position= "absolute";
addIcon.src = 'Add.png';
addIcon.style.width = '30px';
addIcon.style.height = '30px';
addIcon.style.left = '10px';
addIcon.style.top = "20px";
body.appendChild(addIcon)

let deleteIcon = document.createElement("img")
deleteIcon.addEventListener("click" , deleteItem)
deleteIcon.style.position= "absolute";
deleteIcon.src = "delete.png"
deleteIcon.style.width = '30px'
deleteIcon.style.height = '30px'
deleteIcon.style.left = '45px'
deleteIcon.style.top =  "22px";
body.appendChild(deleteIcon)

function addItem(){
    item.splice( , 0, {});
    for(let i = 0 ; i < item.length ; i++){
        let inputText = document.createElement("input");
        inputText.classList.add("text");
        inputText.style.position= "absolute";
        inputText.style.direction = "rtl";
        inputText.style.width = "300px";
        inputText.style.height = "30px";
        inputText.style.top = (20  +( i*70 )) + "px";
        inputText.style.right = "60PX";
        inputText.style.borderRadius = "10px";
        body.appendChild(inputText);

        let inputCheckbox= document.createElement("input");
        inputCheckbox.classList.add("checkbox");
        inputCheckbox.type= "checkbox";
        inputCheckbox.style.position= "absolute";
        inputCheckbox.style.width = "25px";
        inputCheckbox.style.height = "30px";
        inputCheckbox.style.top = (20  +( i*70 )) + "px";
        inputCheckbox.style.right = "15px";
        body.appendChild(inputCheckbox);

        let addIcon = document.createElement("img");
        addIcon.addEventListener("click" , addItem)
        addIcon.style.position= "absolute";
        addIcon.src = 'Add.png'
        addIcon.style.width = '30px'
        addIcon.style.height = '30px'
        addIcon.style.left = '10px'
        addIcon.style.top = (20  +( i*70 )) + "px";
        body.appendChild(addIcon)

        let deleteIcon = document.createElement("img")
        deleteIcon.addEventListener("click" , deleteItem)
        deleteIcon.style.position= "absolute";
        deleteIcon.src = "delete.png"
        deleteIcon.style.width = '30px'
        deleteIcon.style.height = '30px'
        deleteIcon.style.left = '45px'
        deleteIcon.style.top = (22  +( i*70 )) + "px";
        body.appendChild(deleteIcon)
    }
}

function deleteItem(){
console.log("bye")

}

let dateTime = new Date();

let date = document.querySelector(".date");
date.innerHTML = new Intl.DateTimeFormat("fa").format(dateTime)
// date.innerHTML = `${dateTime.getMonth() + 1}/${dateTime.getDate()}`; 

let time = document.querySelector(".time")
let hours = {
    hour : '2-digit' , 
    minute : '2-digit' ,
    second :'2-digit'
}
time.innerHTML = dateTime.toLocaleString('fa-IR' , hours);
// time.innerHTML = `${dateTime.getHours()}:${dateTime.getMinutes()}`;

// let i = 0
// while(i < 86400){
//     setTimeout(()=>{
//         time.innerHTML = dateTime.toLocaleString('fa-IR' , hours);
//         i++
//     }, 1000)
// }