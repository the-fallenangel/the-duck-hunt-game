document.getElementById('startButton').addEventListener('click', function() {
    let count = 3;
    const countdownElement = document.getElementById('countdown');
    const startButton = document.getElementById('startButton');
  
    // Hide the start button and display the countdown
    startButton.style.display = 'none';
    countdownElement.style.display = 'block';
  
    // Function to update the countdown and show "Go!" at the end
    function updateCountdown() {
      if (count > 0) {
        countdownElement.innerHTML = count;
        count--;
        setTimeout(updateCountdown, 1000); // Update every 1 second
      } else {
        countdownElement.innerHTML = 'Go!';
        setTimeout(() => {
            countdownElement.innerHTML = ' ';
        }, 1000);
        // Here, you can add any additional action you want to happen when the countdown reaches 0.
      }
    }
  
    // Start the countdown
    updateCountdown();
  });
 // In this code, we create a countdown timer that starts from 3 and counts down to "Go!" when the button with the ID "startButton" is clicked. The countdown is displayed in the center of the screen within a container. When the button is clicked, it hides the button and displays the countdown text using JavaScript. The countdown is updated every second using the setTimeout() function. Once the countdown reaches zero, the text changes to "Go!" as per your request.
  
  
  
  
  
  