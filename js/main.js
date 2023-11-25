function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    // Simple validation
    if (username === "Bunkheng" && password === "cosinbunkheng") {
      errorMessage.style.color = "green";
      errorMessage.textContent = "Login successful!";
  
      // Redirect to the About Me page after a short delay (for demonstration purposes)
      setTimeout(function () {
        window.location.href = "html/about-me.html";
      }, 2000);
    } else {
      errorMessage.style.color = "red";
      errorMessage.textContent =
        "Invalid username or password. Please try again.";
    }
  }