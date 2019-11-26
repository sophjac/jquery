// useBilling.onchange = function() {
//     let home = document.querySelector("#home");
//     if (this.checked) {
//         home.value = document.querySelector("#billing").value;
//         home.disabled = true;
//     } else {
//         home.value = "";
//         home.disabled = false;
//     }

// }
var checked = 0;

$("#useBilling").click(function() {
    if (checked == 0) {
        $("#home").val($("#billing").val());
        checked = 1;
    } else {
        $("#home").val("");
        checked = 0;
    }
});