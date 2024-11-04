//your JS code here. If required.
function updateTime() {
    const now = new Date();
    
    // Get date components
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    
    // Get time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Format the date and time
    const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
    // Display the date and time
    document.getElementById('timer').textContent = dateTimeString;
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);
