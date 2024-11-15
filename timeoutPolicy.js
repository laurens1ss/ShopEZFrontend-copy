let logoutTimeout;

function resetTimeout() {
   clearTimeout(logoutTimeout);
   logoutTimeout = setTimeout(() => {
      alert("You have been logged out due to inactivity.");
      localStorage.removeItem('token'); // Clear stored token
      window.location.href = '/login';  // Redirect to login
   }, 180000); // 3 minutes
}

// Add event listeners for user activity
const events = ["mousemove", "click", "keypress", "scroll", "touchstart"];
events.forEach(event => {
   window.addEventListener(event, resetTimeout);
});

// Initialize the timeout
resetTimeout();
