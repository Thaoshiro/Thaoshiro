//** Kiểm tra cake Name *//
function checkCombo(){
    var combo =document.getElementById('combo').value;
    if ( combo == "default"){
        document.getElementById("msgError1").innerHTML ="Please select our product";
        return false;
    }
    else{
        document.getElementById("msgError1").innerHTML ="";
    }
}
//** Kiểm tra name *//
function checkName(){
    var name=document.getElementById('name').value;
    if (name.length == ''){
        document.getElementById("msgError2").innerHTML ="Please fill out your name";
        return false;
    }
    else if (name.length > 100){
        document.getElementById("msgError2").innerHTML ="Your name should not exceed 100 characters.";
        return false;
    }
    else{
        document.getElementById("msgError2").innerHTML ="";
    }
}
//** Kiểm tra Message *//
function checkMess(){
    var mess =document.getElementById("message").value;
    if (mess.length >30){
        document.getElementById("msgError3").innerHTML ="Message should not exceed 30 characters";
        return false;
    }
    else {
        document.getElementById("msgError3").innerHTML ="";
    }
}
//** Kiểm tra date *//
function checkDate(){
    var nowdate = new Date();
    var day = nowdate.getDate();
    var month = nowdate.getMonth() + 1;
    var year = nowdate.getFullYear();
    var inputdate = document.getElementById('date').value;
    var datedeli = new Date(inputdate);
    if (inputdate == '') {
        document.getElementById('msgError4').innerHTML ='Please fill out the deliver date!';
          return false;
        }
        else if (datedeli < nowdate ) {
          document.getElementById('msgError4').innerHTML = 'Oops!! Something went wrong, Please check date again!';
          return false;
        } else {
          document.getElementById('msgError4').innerHTML ="";
        }
    }
//** Kiểm tra Address *//
function checkAddress(){
    var addr =document.getElementById("address").value;
    if (addr.length == ''){
        document.getElementById("msgError5").innerHTML ="Please fill out the address";
        return false;
    }
    else if (addr.length > 500 ){
        document.getElementById("msgError5").innerHTML ="Address should not exceed 500 characters";
        return false;
    }
    else {
        document.getElementById("msgError5").innerHTML ="";
    }
}

//** Kiểm tra lại *//
function checkOrder(){
    checkName();
    checkCombo();
    checkMess();
    checkDate();
    checkAddress();
    if (checkName() == false || checkCombo() == false || checkMess() == false || checkDate() == false || checkAddress() == false) {
        alert("Xem lại các trường nhập");
        return false;
    }
}
