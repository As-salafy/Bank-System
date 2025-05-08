
document.getElementById("log_box").addEventListener("click", logbtn);

var main_body = document.getElementById("main");
main_body.style.display = "none";


function logbtn() {

    var log_boxs = document.getElementById("log_box");
     
    var userN = document.getElementById("user_in").Value;
    var userPass = document.getElementById("pass_in").value;

    if(userN =="") {
     
        alert("Invalid UserName");
    }
    else if(userPass =="") {
   alert("Invalid Password");
    }
    else {
        log_boxs.style.display ="none";
        main_body.style.display ="block";
    }
}




// Deposit

document.getElementById("Deposit-btn").addEventListener("click", deposit_fn);

function deposit_fn() {
    var input_amount = parseFloat(document.getElementById("input-deposit").value);
     var deposit_number = parseFloat(document.getElementById("deposit-number").innerHTML);

     var total = deposit_number + input_amount;

     document.getElementById("deposit-number").innerHTML = total;
// deposit
     var depoam = parseFloat(document.getElementById("depo-am").innerHTML);

     var total_depo = depoam + input_amount;

     document.getElementById("depo-am").innerHTML = total_depo;

    //  balance

    var balance =parseFloat(document.getElementById("balance").innerHTML);
    var total_balance = balance + input_amount;

    document.getElementById("balance").innerHTML = total_balance



}

// Withdraw

document.getElementById("withdraw-btn").addEventListener("click", withdrawfn);

function withdrawfn() {
       
    var with_input = parseFloat(document.getElementById("with-input").value);

    var with_amount = parseFloat(document.getElementById("with-amount").innerHTML);

    var total_with = with_amount + with_input;

    document.getElementById("with-amount").innerHTML = total_with;

    // withdraw 2

    var wit =parseFloat(document.getElementById("wit-am").innerHTML);
    var totalwi = wit + with_input;
    document.getElementById("wit-am").innerHTML = totalwi;

    // balance 
    var totalbl = document.getElementById("balance").innerHTML;

    var mainbl = totalbl - with_input;

    document.getElementById("balance").innerHTML = mainbl;

}
 