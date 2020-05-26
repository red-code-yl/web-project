function regist() {
    var username=document.getElementById("username");
    var userpass=document.getElementById("userpassword");
    var userpass2=document.getElementById("userpassword");
    if (username=="") 
    {
        alert("用户名不能为空");
    }
    else if(userpass=="") 
    {
        alert("用户密码不能为空");
    }
    else if(userpass!=userpass2)
    {
        alert("两次密码输入不一致!");
    }
    else 
    {
        window.location.href="index.html"
    }
}