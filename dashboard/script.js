const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    let username = (loginForm.username.value).toLowerCase();
    const password = loginForm.password.value;

    function login() {
        document.getElementById("main-holder").style = "display: none";
        document.getElementById("success").style = "display: block";
        username = username.charAt(0).toUpperCase() + username.slice(1);
        document.getElementById('addName').innerHTML = `You did it <strong>${username}</strong>! You're logged in!`;
    }

    if (username === "chris" && password === "vitRocks") {
        login();
    } else if (username === "brett" && password === "vitRocks") {
        login();
    } else if (username === "daniel" && password === "vitRocks") {
        login();
    } else if (username === "joe" && password === "test") {
        login();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})


