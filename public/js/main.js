const profileuser = document.getElementById('profile-username');
let user = localStorage.getItem("loginUser");
if (user) {
    profileuser.textContent = user;
}
else {
    window.location.href = "../log.htm"
}
document.getElementById('logout').addEventListener('click', () => {
   localStorage.removeItem("loginUser");
   window.location.href = "../log.htm";
});