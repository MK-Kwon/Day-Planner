$(document).ready(function() {
    $(".saveBtn").on("click", function(){
        let clickId = $(this).attr("id");
        let textId;
        switch(clickId) {
            case "07AMsave":
                textId = $("#07AM").val();
                localStorage.setItem("07AMtext", textId);
            break;
        }
        switch(clickId) {
            case "08AMsave":
                textId = $("#08AM").val();
                localStorage.setItem("08AMtext", textId);
            break;
        }
        switch(clickId) {
            case "09AMsave":
                textId = $("#09AM").val();
                localStorage.setItem("09AMtext", textId);
            break;
        }
        switch(clickId) {
            case "10AMsave":
                textId = $("#10AM").val();
                localStorage.setItem("10AMtext", textId);
            break;
        }
        switch(clickId) {
            case "11AMsave":
                textId = $("#11AM").val();
                localStorage.setItem("11AMtext", textId);
            break;
        }
        switch(clickId) {
            case "12PMsave":
                textId = $("#12PM").val();
                localStorage.setItem("12PMtext", textId);
            break;
        }
        switch(clickId) {
            case "01PMsave":
                textId = $("#01PM").val();
                localStorage.setItem("01PMtext", textId);
            break;
        }
        switch(clickId) {
            case "02PMsave":
                textId = $("#02PM").val();
                localStorage.setItem("02PMtext", textId);
            break;
        }
        switch(clickId) {
            case "03PMsave":
                textId = $("#03PM").val();
                localStorage.setItem("03PMtext", textId);
            break;
        }
        switch(clickId) {
            case "04PMsave":
                textId = $("#04PM").val();
                localStorage.setItem("04PMtext", textId);
            break;
        }
        switch(clickId) {
            case "05PMsave":
                textId = $("#05PM").val();
                localStorage.setItem("05PMtext", textId);
        }
    });
    function loadSavedData() {
        $("#07AM").text(localStorage.getItem("07AMtext"));
        $("#08AM").text(localStorage.getItem("08AMtext"));
        $("#09AM").text(localStorage.getItem("09AMtext"));
        $("#10AM").text(localStorage.getItem("10AMtext"));
        $("#11AM").text(localStorage.getItem("11AMtext"));
        $("#12PM").text(localStorage.getItem("12PMtext"));
        $("#01PM").text(localStorage.getItem("01PMtext"));
        $("#02PM").text(localStorage.getItem("02PMtext"));
        $("#03PM").text(localStorage.getItem("03PMtext"));
        $("#04PM").text(localStorage.getItem("04PMtext"));
        $("#05PM").text(localStorage.getItem("05PMtext"));

    }

    loadSavedData();
});