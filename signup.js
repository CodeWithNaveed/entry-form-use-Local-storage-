let submit = document.getElementById("submit")

submit?.addEventListener("click",function(event){
    event.preventDefault();

    const user_name = document.getElementById("user_name").value.trim()
    const password = document.getElementById("password").value
    const confirm_password = document.getElementById("confirm_password").value

    if (!user_name || !password || !confirm_password) {
        alert("Please fill in all fields.");
        return;
    }
  
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
  
    if (password.value !== confirm_password.value) {
        alert("Passwords do not match.");
        return;
    }

    const user = { user_name, password, posts: [] };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");
    window.location.href = "login.html";
})












