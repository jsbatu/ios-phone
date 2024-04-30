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

    
    $("#youtube").click(function() {
        $("#youtube-screen, .top-gap").css("display", "block"); // Formun görünürlüğünü değiştirir,
        if ($("#youtube-screen, .top-gap").is(":visible")) {
            $("#home-screen").hide();
        } else {
            $("#home-screen").show();
        }
    });
    
});
