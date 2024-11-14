let idleTime = 0;

// Increment the idle time counter every minute
const idleInterval = setInterval(() => {
  idleTime++;
  if (idleTime >= 15) { // 15-minute timeout
    alert("Session expired due to inactivity");
    logoutUser(); // Call the logout function
  }
}, 60000); // 1 minute

// Reset idle timer on user actions
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;

function resetTimer() {
  idleTime = 0;
}

function logoutUser() {
  localStorage.removeItem("sessionToken"); // Remove token
  window.location.href = "/login"; // Redirect to login page
}
