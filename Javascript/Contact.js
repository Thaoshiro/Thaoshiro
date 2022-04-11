//** Kiểm tra Name *//
function checkName(){
    var name =document.getElementById('name').value;
    if (name.length == ''){
        document.getElementById("msgError1").innerHTML ="Please fill out your name";
        return false;
    }
    else if (name.length > 100){
        document.getElementById("msgError1").innerHTML ="Your name should not exceed 100 characters";
        return false;
    }
    else{
        document.getElementById("msgError1").innerHTML ="";     
    }
}
//** Kiểm tra Email *//
function checkEmail(){
    var email=document.getElementById('email').value;
    if (email.length == ''){
        document.getElementById("msgError2").innerHTML ="Please fill out your email";
        return false;
    }
    else if (email.length > 100){
        document.getElementById("msgError2").innerHTML ="Your email should not exceed 100 characters";
        return false;
    }
    else{
        document.getElementById("msgError2").innerHTML ="";
    }
}
//** Kiểm tra Subject *//
function checkSubject(){
    var subject =document.getElementById("subject").value;
    if (subject.length == ''){
        document.getElementById("msgError3").innerHTML ="Please fill out the subject";
    }
    else if (subject.length < 50 ){
        document.getElementById("msgError3").innerHTML ="Subject should not shorter than 50 characters";
    }
    else if (subject.length > 250 ){
        document.getElementById("msgError3").innerHTML ="Subject should not exceed 250 characters";
    }
    else {
        document.getElementById("msgError3").innerHTML ="";
    }
}
//** Kiểm tra Message *//
function checkMess(){
    var mess =document.getElementById("message").value;
    if (mess.length == ''){
        document.getElementById("msgError4").innerHTML ="Please fill out the message";
    }
    else if (mess.length > 500 ){
        document.getElementById("msgError4").innerHTML ="Message should not exceed 500 characters";
    }
    else {
        document.getElementById("msgError4").innerHTML ="";
    }
}
//** Kiểm tra lại *//
function checkContact(){
    checkName();
    checkEmail();
    checkSubject();
    checkMess();
        if (checkName() == false || checkEmail() == false || checkSubject() == false || checkMess() == false) {
            alert("Xem lại các trường nhập");
            return false;
        }
}