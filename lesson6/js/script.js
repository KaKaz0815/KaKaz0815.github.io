//get date
let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];
let months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];

let d = new Date();
let dayName = daynames [d.getDay()];
let monthName = months [d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + year ;


document.getElementById("currentdate").innerHTML = fulldate;

console.log(fulldate);



//Humberger Menu Button

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}




//wind Chill calculator


const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("WSpeed").textContent);
 
document.getElementById("windChill").textContent =  35.74 + (0.6215 * temperature) + (0.4275 * temperature - 35.75)  *  windSpeed ^ 0.16;