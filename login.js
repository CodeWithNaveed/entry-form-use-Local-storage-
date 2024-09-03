const login = document.getElementById("login");

login.addEventListener("click", () => {
    event.preventDefault();
    const getDetails = JSON.parse(localStorage.getItem("details"));
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) {
        alert("Please fill all the fields");
    } else if (email !== getDetails.email || password !== getDetails.password) {
        alert("Invalid email or password");
    } else {
        alert(`${getDetails.fullName} You are logged in successfully.`);
        window.location.href = "./home/home.html";
    }
})