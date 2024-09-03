const signup = document.getElementById("signup");

signup.addEventListener("click", () => {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    const details = {
        fullName,
        email,
        phoneNumber,
        password,
        confirmPassword
    }

    localStorage.setItem("details", JSON.stringify(details));

    if (!fullName || !email  || !phoneNumber || !password || !confirmPassword) {
        alert("Please fill all the fields");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match");
    } else {
        alert(`${fullName} You are signed up successfully.`);
        window.location.href = "../index.html";
    }
})