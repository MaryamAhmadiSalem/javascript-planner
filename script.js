let body = document.querySelector(".body")

for(let i = 0 ; i <= 5 ; i++){
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
}