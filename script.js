const inputBox = document.getElementById("input-box");
const container = document.getElementById("list-container");

function add() {
    if (inputBox.value === "") {
        alert("please enter something")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        container.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = '';

    saveData();
}

container.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
       
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData();
       
    }

})

function saveData() {
    localStorage.setItem("data", container.innerHTML);
}

function showdata()
{
    container.innerHTML=localStorage.getItem("data");
}
showdata()