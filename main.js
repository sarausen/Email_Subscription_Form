//Was Bored so added some fast code and a working modal. 

// Get the email input and subscribe button elements
const emailInput = document.getElementById("emailInput");
const subscribeBtn = document.getElementById("subscribeBtn");

// Add event listener to the subscribe button
subscribeBtn.addEventListener("click", function () {
  // Get the entered email address
  const email = emailInput.value;

  // Validate the email address using a simple regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Perform the subscription logic here
  alert("Subscription successful!");
});

