var secondHand = document.querySelector('.second-hand');
var hourHand = document.querySelector('.hour-hand');
var minHand = document.querySelector('.min-hand');

function setDate() {
    var now = new Date();
    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = (`rotate(${secondsDegrees}deg`);
    
    var hours = now.getHours();
    var hoursDegrees = ((hours / 12) * 350) + 90;
    hourHand.style.transform = (`rotate(${hoursDegrees}deg`);
    
    var mins = now.getHours();
    var minsDegrees = ((mins / 60) * 350) + 90;
    minHand.style.transform = (`rotate(${minsDegrees}deg`);
    
    console.log(hours);
}

setInterval(setDate, 1000);
