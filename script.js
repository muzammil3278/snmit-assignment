const form = document.getElementById("form");

function eventhandle() {
    form.addEventListener("submit", (event) => {
        event.preventDefault()
    })
}


function validate() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    if (username === "admin" && password === "123456") {
        alert("Login Successful");
        return false;
    }
    else {
        alert("Login Failed");
        eventhandle()
    }

}