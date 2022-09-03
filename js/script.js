// ===============================typing animation================================

getLocation();
        var j75 = document.getElementById("location n-j75");
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                j75.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
        function showPosition(position) {
            j75.innerHTML = "latitude:" + position.coords.latitude + "Longitude:" + position.coords.longitude;
        }
        var now = new Date();
        document.getElementById("date-j75").innerHTML = now;


var typed = new Typed (".typing",{
    strings:["","Web Developer" , "Web Designer" , "Graphic Designer", "Youtuber" , "Video Editor"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})