function validate(){
        if(document.Form1.username.value == "") {
        alert("Введите имя");
        document.Form1.username.focus();
        return false;
    } if (document.Form1.password.value == "") {
    alert("Введите пароль");
    document.Form1.password.focus();
        return false;
} if (document.Form1.username.value == "ats" && document.Form1.password.value == "lf")  {   // alert("Добро пожаловать"); 
window.location.href='zahodokok.html';
} else  {   // alert("Неправильное имя или пароль");
window.location.href='uhodbyby.html';
}
}
