function timing() {
const timer = document.getElementById('root');
// Create a new Date object representing the current date and time
const now = new Date(); 
// Convert the current time into a readable format based on Indian locale
const IndianTime = now.toLocaleTimeString();
// Update the inner HTML of the 'timer' element to display the formatted time
timer.innerHTML = IndianTime; 
}
// Call the 'timing' function every 1000 milliseconds (1 second) using setInterval
setInterval(timing, 1000); // 1000ms (milisecond) = 1s 
// Get the same 'root' element again to apply styling
const timer = document.getElementById('root');
timer.style.fontSize = "20px";
timer.style.display = "flex";
// Align text horizontally to the center
timer.style.justifyContent = "center";
// Align text vertically to the center
timer.style.alignItems = "center";
// Set the height of 'root' to 100% of the viewport height
timer.style.height = "100vh";

