function storeData() {
    // Get the value entered in the input field
    var i = 0;
    var userInput = document.getElementById("input").value;
    document.getElementById(`print${i}`).innerHTML = userInput;
    document.getElementById("input").innerHTML = null;
    return userInput;
}

function addTask() {
    const li = document.getElementById("container");
    const input = document.getElementById("input");
    if (input.value == "") {
        alert("Type something")
    }

    else {
        list = document.createElement("p");
        list.id = `print${count}`
        list.innerHTML = input.value
        li.appendChild(list)
        input.value = ""

    }

}
