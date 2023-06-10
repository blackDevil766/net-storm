import React, { useState } from "react";
import CardInfo from "./CardInfo";

// var hours = now.getHours();
// var minutes = now.getMinutes();
// var seconds = now.getSeconds();

// var timer = setInterval(function () {

//     document.getElementById("days1").innerHTML = days;

//     document.getElementById("hours1").innerHTML = hours;

//     document.getElementById("mins1").innerHTML = minutes;

//     document.getElementById('secs1').innerHTML = seconds;


//     seconds++;
//     if (seconds > 59) {

//         seconds = 0
//         minutes++
//     }

// }, 1000);

// if (minutes > 59) {
//     minutes = 0
//     hours++
// }

// if (hours > 23) {
//     hours = 0
//     days++
// }

// if (timeleft < 0) {
//     clearInterval(timer);
//     document.getElementById("days").innerHTML = ""
//     document.getElementById("hours").innerHTML = ""
//     document.getElementById("mins").innerHTML = ""
//     document.getElementById("secs").innerHTML = ""
// }


function Card1() {


    return (
        <div className = "carsoulItems">
            <CardInfo img = "https://netstrom-angular.theme-land.com/assets/img/auction_1.jpg"/>
            <CardInfo img = "https://netstrom-angular.theme-land.com/assets/img/auction_4.jpg"/>
            <CardInfo img = "https://netstrom-angular.theme-land.com/assets/img/auction_5.jpg"/>
            <CardInfo img = "https://netstrom-angular.theme-land.com/assets/img/auction_6.jpg"/>
        </div>
    )
}


export default Card1