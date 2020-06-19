$(document).ready(function () {
    let currentDate = moment().format("dddd, MMMM Do YYYY");
    let currentTime = moment().format("hh:mm:ss A");
    let currentHour;
    const possibleHours = {
        before: [
            "12AM",
            "01AM",
            "02AM",
            "03AM",
            "04AM",
            "05AM",
            "06AM"
        ],
        work: [
            "07AM",
            "08AM",
            "09AM",
            "10AM",
            "11AM",
            "12PM",
            "01PM",
            "02PM",
            "03PM",
            "04PM",
            "05PM"
        ],
        after: [
            "06PM",
            "07PM",
            "08PM",
            "09PM",
            "10PM",
            "11PM"
        ]
    };

    function init() {
        $("#date").text(currentDate);
        $("#time").text(currentTime);

        timeColor();

        let currentTimer = setInterval(function () {
            currentDate = moment().format("dddd, MMMM Do YYYY");
            $("#date").text(currentDate);
            currentTime = moment().format("hh:mm:ss A");
            $("#time").text(currentTime);
        }, 1000);
    }

    function timeColor() {
        currentHour = moment().format("hhA");

        if (possibleHours.before.indexOf(currentHour) !== -1) {
            $(".hourMemo").css("background-color", "#ffd376");
        }
        if (possibleHours.after.indexOf(currentHour) !== -1) {
            $(".hourMemo").css("background-color", "#9adcf0");
        }
        if (possibleHours.work.indexOf(currentHour) !== -1) {
            $("#" + currentHour).css({"background-color":"black", "color":"white"});
            
            for (let i = 0; i < possibleHours.work.indexOf(currentHour); i++) {
                $("#" + currentHour.css("background-color", "#9adcf0"));
            }
            for (let i = possibleHours.work.indexOf(currentHour)-1; i > possibleHours.work.indexOf(currentHour); i--) {
                $("#" + currentHour.css("background-color", "#f8cadf"));
            }
        }

    }


    init();
});