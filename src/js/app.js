$(document).ready(function() {
    $("#locktohome ").click(function() {
        $("#home-screen").css("display", "flex"); // Formun görünürlüğünü değiştirir,
        $("#background").css("filter", "blur(0.4rem)");
        if ($("#home-screen").is(":visible")) {
            $("#lock-screen").hide();
        } else {
            $("#lock-screen").show();
        }
    });
});