var checked = 0;

$("#check").click(function() {
    if (checked == 0) {
        $("#emailField").show();
        checked = 1;
    } else {
        $("#emailField").hide();
        checked = 0;
    }
});


// Advanced Option....
//   	x.style.display == "block" ? 
//		x.style.display = "none" : 
// 		x.style.display = "block";