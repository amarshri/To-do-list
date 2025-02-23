
const inputbox = document.getElementById("input-box");
const listbox = document.getElementById("list");
document.getElementsByTagName("button");


function addTask(){
    if(inputbox.value ===''){
        alert("you must write something");
    }
    else{
        let content = document.createElement("li");
        content.innerHTML = inputbox.value;
        listbox.appendChild(content);
    }
    inputbox.value = "";
}
    