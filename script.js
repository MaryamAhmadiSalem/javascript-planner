let body = document.querySelector(".body")
let idCounter = 0;
let items = [{ 
    id : idCounter++,
    content : '',
    isStatus : false,
    myAlarm  : ''
}]

function input(){
    body.innerHTML = ''
    for(let i = 0 ; i < items.length ; i++){
        let row = document.createElement("div")
        row.className = "row"

        let inputText = document.createElement("input");
        inputText.addEventListener("input", function(e){
            items[i].content = e.target.value
            localStorage.setItem("myItems", JSON.stringify(items))
        })
        inputText.className = "text"
        inputText.value = items[i].content
        row.appendChild(inputText);

        let inputCheckbox= document.createElement("input");
        inputCheckbox.addEventListener("change", (e)=>{
            if(inputCheckbox.checked){
                items[i].isStatus = true
                localStorage.setItem("myItems", JSON.stringify(items))
                inputText.style.color = "#b1b1b1";
                console.log(items)
            }else{
                items[i].isStatus = false
                inputText.style.color = "black";
                console.log(items)
            }
        })
        inputCheckbox.type= "checkbox";
        inputCheckbox.className = "checkBox";
        row.appendChild(inputCheckbox);

        let timer = document.createElement("input")
        timer.addEventListener("change", ()=>{
            items[i].myAlarm = timer.value ;
            localStorage.setItem("myItems", JSON.stringify(items))
            console.log(timer.value)
        })
        timer.type = "time";
        timer.className = "timer";
        timer.value = items[i].myAlarm || "";
        row.appendChild(timer);

        let abort = document.createElement("img")
        abort.addEventListener("click" , ()=>{
            alarm.pause();
            alarm.currentTime  = 0
            alarmTurnedOff = true
            inputText.style.color = "black"
        })
        abort.type = "button"
        abort.className = "stopAlarm"
        abort.src =  "abort.png"
        row.appendChild(abort)

        let deleteIcon = document.createElement("img")
        deleteIcon.addEventListener("click", function deleteItem(e){
            let deleteItem = items.filter(x => x.id != items[i].id)
            if(items.length === 1){
                alert("خطا! نمیتوان این آیتم را حذف کرد")
            }else{
                items = deleteItem ; 
                localStorage.setItem("myItems", JSON.stringify(items))
                input()
            }
        })
        deleteIcon.className = 'icon'
        deleteIcon.src = "delete.png"
        deleteIcon.style.marginTop = "1px"
        row.appendChild(deleteIcon);

        let addIcon = document.createElement("img");
        addIcon.addEventListener("click" , function addItem(event){
            event.preventDefault();
            items.splice(i + 1, 0,{
                id : idCounter++ ,
                content : '',
                isStatus : false,
                myAlarm :  ''
            })
            localStorage.setItem("myItems", JSON.stringify(items))
            input()
            console.log(items)
        })
        addIcon.className = "icon addIcon"
        addIcon.src = 'Add.png'
        row.appendChild(addIcon)

        body.appendChild(row)
        inputCheckbox.checked = items[i].isStatus
        if(inputCheckbox.checked == true){
            inputText.style.color = "#b1b1b1";
        }
        idCounter = idCounter + 1
    }
}
let data = localStorage.getItem("myItems")
if(data != null){
    items = JSON.parse(data)
}
localStorage.clear()
input()

let dateTime = new Date();

let date = document.querySelector(".date");
date.innerHTML = new Intl.DateTimeFormat("en").format(dateTime)

let time = document.querySelector(".time")
let hours = {
    hour12: false ,    // خاموش کردن قالب 12 ساعته
    hour : '2-digit' , 
    minute : '2-digit' ,
}
time.innerHTML = dateTime.toLocaleString('en' , hours)

let alarm = document.querySelector("#music")

let alarmTurnedOff = false ;
setInterval(()=>{
    let dateTime = new Date();
    time.innerHTML = dateTime.toLocaleString('en' , hours)

    let alarmActiv = false ;
    let inputText = document.querySelectorAll(".text");

    for(let i = 0 ; i < items.length ; i++){
        if(items[i].myAlarm == time.innerHTML){
            alarmActiv = true
            if(alarmTurnedOff == false){
                console.log("alarm")
                alarm.play();
                inputText[i].style.color = "red";
            }
        }
    }
    if(alarmActiv == false){
        alarmTurnedOff = false
    }
}, 1000)