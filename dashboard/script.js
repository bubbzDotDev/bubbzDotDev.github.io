const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "chris" && password === "vitRocks") {
        location.href = "success.html";
    } else if (username === "brett" && password === "vitRocks") {
        location.href = "success.html";
    } else if (username === "daniel" && password === "vitRocks") {
        location.href = "success.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

document.getElementById('addName').innerText = `You did it ${username}! You logged in!`;
