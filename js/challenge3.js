$("form").submit(function() {
    if ($('input[name="fruit"]:checked').val() > 0 & $('input[name="standing"]:checked').val() > 0) {
        return true;
    } else {
        alert("You must pick from both columns");
        return false;
    }
});