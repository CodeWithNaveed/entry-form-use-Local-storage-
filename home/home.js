const navbar = document.getElementById("navbar");
const userDetails = JSON.parse(localStorage.getItem("details"));
const postContent = document.getElementById("postContent");
const postBtn = document.getElementById("postBtn");
const posts = document.getElementById("posts");
const time = new Date().toLocaleTimeString();

navbar.innerHTML = `
    <div class="homepage_icon">
        <h1>Home</h1>
        <p>Welcome ${userDetails.fullName}</p>
    </div>
    <button id="logout">Logout</button>
`   
           
const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
    window.location.reload()
    // event.preventDefault();
    // localStorage.removeItem("details");
    window.location.href = "../index.html";
})

postBtn.addEventListener("click", () => {
    console.log("clicked")
    if(!postContent.value) {
        alert("Please write something")
    }
    else {
        const li = document.createElement("li");

        li.innerHTML = `
            ${postContent.value}
            <button class="delete-btn">delete</button>
            <div>${time}</div>
        `

        const dltBtn = li.querySelector(".delete-btn");
        
        posts.appendChild(li)

        dltBtn.addEventListener("click", () => {
            li.remove()
        })

        if(postContent.value){
            postContent.value = ""
        }
    }
})








// postBtn.addEventListener("click", () => {
//     const li = document.createElement("li");

//     const contentText = document.createTextNode(postContent.value);
//     li.appendChild(contentText);

//     const dltBtn = document.createElement("button");
//     dltBtn.innerHTML = "delete";
//     dltBtn.classList.add("delete-btn"); // Use class instead of id
//     li.appendChild(dltBtn);

//     const time = new Date().toLocaleTimeString(); // Assuming 'time' is a formatted time string
//     const timeDiv = document.createElement("div");
//     timeDiv.innerHTML = time;
//     li.appendChild(timeDiv);

//     posts.appendChild(li);

//     // Attach the event listener directly to the delete button
//     dltBtn.addEventListener("click", () => {
//         li.remove();
//     });

//     if (postContent.value) {
//         postContent.value = "";
//     }
// });