// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//     console.log("Here");
//     console.log(name);
//     console.log(address)
//     if (name.value.length == 0) {
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     } else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }

//     if (address.value.length == 0) {
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     } else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }

//     return validInput;
// }

var name_ok = 0;
var addr_ok = 0;

$("form").submit(function() {
    if ($("#fullname").val() == "") {
        $("#nameerrormsg").show();
        name_ok = 1;
    } else {
        $("#nameerrormsg").hide();
        name_ok = 0;
    }
    if ($("#streetaddr").val() == "") {
        $("#addrerrormsg").show();
        addr_ok = 1;
    } else {
        $("#addrerrormsg").hide();
        addr_ok = 0;
    }

    if (name_ok == 1 | addr_ok == 1) {
        return false;
    } else { return true; }

})