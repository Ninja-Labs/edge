// JavaScript Document
$(document).ready(function ($) {

    var abiertomenu = false;

    function cambiarOverflow() {
        $("#menu ul").css("overflow", "visible");
    }

    function abrirmenu(event) {

        $("#menu ul").css("overflow", "hidden");

        if (abiertomenu == true) {
            $("#menu nav>ul").animate({ "width": "0px" }, 500, "linear", null);
            abiertomenu = false;
        } else {
            $("#menu nav>ul").animate({ "width": "755px" }, 500, "linear", cambiarOverflow);
            abiertomenu = true;
        }

    }


     


    $("#menu h3").bind("click", abrirmenu);

});