// ch3form.onsubmit = function() {
//     var fruit = document.querySelectorAll('input[name="fruit"]')
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//     alert("You must pick a fruit!")
//     return false;

// Advanced Answer
// if(document.querySelector('input[name="fruit"]:checked'))
//     return true;

// alert("You must pick a fruit!")
// return false;
//   }

// find a way to iterate
//this is so inefficient (sorry drew)
var val1 = 0;
$("#kum").click(function() {
    val1 = 1;
});
$("#figs").click(function() {
    val1 = 1;
});
$("#straw").click(function() {
    val1 = 1;
});
$("#blue").click(function() {
    val1 = 1;
});
$("#ofrui").click(function() {
    val1 = 1;
});
var val2 = 0;
$("#freshman").click(function() {
    val2 = 1;
});
$("#soph").click(function() {
    val2 = 1;
});
$("#jr").click(function() {
    val2 = 1;
});
$("#sr").click(function() {
    val2 = 1;
});
$("#grad").click(function() {
    val2 = 1;
});
$("#other").click(function() {
    val2 = 1;
});


$("form").submit(function() {
    if (val1 == 0) {
        alert("You must pick a fruit!");
        return false;
    } else if (val2 == 0) {
        alert("You must pick a class standing!");
        return false;
    } else {
        return true;
    }
});