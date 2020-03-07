//wind Chill calculator


const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wSpeed").textContent);
 
document.getElementById("windChill").textContent = 

((35.74+0.6215)/(temperature-35.75)/(Math.pow(windSpeed,.016))+0.4275/temperature/(Math.pow(windSpeed,0.16)))
.toFixed(2);