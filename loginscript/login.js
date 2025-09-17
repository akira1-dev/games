const loginbtn = document.getElementById('loginbtn');
loginbtn.addEventListener('click', () => {
    const loginerror = document.getElementById('login-error');
    const loginuser = document.getElementById('login-username').value;
    const loginpass = document.getElementById('login-password').value;
    const loginframe = document.getElementById('login-frame');
    
    let find = users.find(acc => acc.name == loginuser && acc.pass == loginpass);
    
    if (find) {
        loginerror.innerText = "Success";
        loginerror.style.color = "green";
        loginbtn.disabled = true;
        loginbtn.innerText = "Please wait...";
        localStorage.setItem("loginUser", find.name);
        setTimeout(() => {
            window.location.href = "main/game.htm";
        }, 2000);
    }
    else {
        loginerror.innerText = "Wrong username or password...";
        loginerror.style.color = "red";
    }
    
});