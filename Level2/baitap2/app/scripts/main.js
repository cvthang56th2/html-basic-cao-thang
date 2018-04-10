$(document).ready(function() {
    $("#btn1").click(function() {
        $("#line1").toggleClass("showLine");
        $(this).toggleClass("blackDot");
    });

    $("#btn2").click(function() {
        $("#line2").toggleClass("showLine");
        $(this).toggleClass("blackDot");
    });

    $("#btn3").click(function() {
        $("#line3").toggleClass("showLine");
        $(this).toggleClass("blackDot");
    });

    $("#btn4").click(function() {
        $("#line4").toggleClass("showLine");
        $(this).toggleClass("blackDot");
    });
});