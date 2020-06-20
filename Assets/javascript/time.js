// function will not run unless document's fully ready
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
            "11PM",
            "12PM"
        ]
    };
    
    function init() {
        // Display current date
        $("#date").text(currentDate);
        //Display current time
        $("#time").text(currentTime);
        // Set colors based on current time
        timeColor();
        // Update current date and time every second
        let currentTimer = setInterval(function() {
            currentDate = moment().format("dddd, MMMM Do YYYY");
            $("#date").text(currentDate);
            currentTime = moment().format("hh:mm:ss A");
            $("#time").text(currentTime);
            timeColor();
        }, 1000);
    }

    // Update textarea color for past, present and future hours
    function timeColor() {
        currentHour = moment().format("hhA");
        // If current hour is before Work hours, set all hours background color to #ffd376
        if (possibleHours.before.indexOf(currentHour) !== -1) {
            $(".hourMemo").css("background-color", "#ffd376");
        }
        // If current hour is after Work hours, set all hours background color to #9adcf0
        if (possibleHours.after.indexOf(currentHour) !== -1) {
            $(".hourMemo").css("background-color", "#9adcf0");
        }
        // If current hour is Work hours, set all hours background color to black and font color to white
        if (possibleHours.work.indexOf(currentHour) !== -1) {
            $("#" + currentHour).css({"background-color":"black", "color":"white"});
            // Set background color for all hours before current work hours to #9adcf0 and change the font color to black
            for (let i = 0; i < possibleHours.work.indexOf(currentHour); i++) {
                $("#" + possibleHours.work[i]).css({"background-color":"#9adcf0", "color":"black"});
            }
            // Set background color for all ours after current work hours to #f8cadf and change the font color to black
            for (let i = possibleHours.work.length - 1; i > possibleHours.work.indexOf(currentHour); i--) {
                $("#" + possibleHours.work[i]).css({"background-color":"#f8cadf", "color":"black"});
            }
        }

    }


    init();
});