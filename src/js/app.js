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

    $("#youtubetohome ").click(function() {
        $("#home-screen").css("display", "flex"); // Formun görünürlüğünü değiştirir,
        $("#background").css("filter", "blur(0.4rem)");
        if ($("#home-screen").is(":visible")) {
            $("#youtube-screen, .youtube-video-1, #youtubetohome, .top-gap, .black-top-gap").hide();
        } else {
            $("#youtube-screen").show();
        }
    });

    
    $("#youtube").click(function() {
        $("#youtube-screen, .top-gap, #youtubetohome").css("display", "block"); // Formun görünürlüğünü değiştirir,

        if ($("#youtube-screen, .top-gap").is(":visible")) {
            $("#home-screen").hide();
        } else {
            $("#home-screen").show();
        }
    });
    

    $("#video1").click(function() {
        $(".youtube-video-1, .black-top-gap").css("display", "block"); // Formun görünürlüğünü değiştirir,

        if ($(".youtube-video-1, .black-top-gap").is(":visible")) {
            $("#youtube-screen").hide();
        } else {
            $("#youtube-screen").show();
        }
    });
});
