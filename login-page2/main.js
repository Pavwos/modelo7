const olho = document.getElementById("olho");
const password = document.getElementById("password");

olho.addEventListener('click', function(){
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
});