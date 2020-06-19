$(document).ready(function() {
    let currentDate = moment().format("dddd, MMMM Do YYYY");
    let currentTime = moment().format("hh:mm:ss A");
    let currentHour ;
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
    
});