function login() {
    var username=document.getElementById("username");
    var userpass=document.getElementById("userpassword");

    if (username.value=="") 
    {
        alert("请输入用户名");
    }
    else if(userpass.value=="") 
    {
        alert("请输入用户密码");
    }
    else if(username.value=="a" && userpass.value=="123456")
    {
        window.location.href="index.html"
    }
    else
    {
        alert("请输入正确的用户名和密码!");
    }
}