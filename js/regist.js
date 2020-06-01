function regist() {
    var username=document.getElementById("username");
    var userpass=document.getElementById("pass");
    var tel=document.getElementById("tel");
    var userpass1=document.getElementById("pass1");

    if (username.value=="") {
        alert("请输入用户名")
    }
    else if (userpass.value=="") {
        alert("请输入密码")
    }
    elsr if (userpass1.value=="") {
        alert("请再次输入密码")
    }
    lese if (userpass.value!=userpass1.value) {
        alert("两次密码输入不一致")
    }
    else if(telp.value=="") {
        alert("请输入正确电话号码")
    }
    else {
        window.location.href="index.html"
        alert("注册成功")
    }
}