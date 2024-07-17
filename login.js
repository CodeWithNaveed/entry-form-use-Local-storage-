let submit = document.getElementById("submit")

submit?.addEventListener("click",function(event){
    event.preventDefault();

    const user_name = document.getElementById("user_name").value.trim()
    const password = document.getElementById("password").value

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.user_name === user_name && storedUser.password === password) {
        localStorage.setItem("currentUser", JSON.stringify(storedUser));
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password.");
    }
})