Username = document.getElementById("user_name").ariaValueMax;

function adduser()
{
    localStorage.setItem(Username);
    window.location = "kwitter.html";
}