function currentDay() {
    var date = new Date();
    var weekday = [];
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    var n = weekday[date.getDay()];
    
    Document.getElementById("day").innerHTML = n;

    Document.getElementById("currentDate").innerHTML = date.toDateString();
}