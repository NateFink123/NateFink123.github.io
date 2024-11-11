// Start at image 1000 and increment dynamically, with a max of 2000
let currentIndex = 1000; // Starting index
const maxIndex = 2000; // Maximum index value

// Get the image element and the navigation textboxes
const photoElement = document.getElementById('photo');
const backwardTextbox = document.getElementById('backward');
const forwardTextbox = document.getElementById('forward');
const timerElement = document.getElementById('timer');

// Function to update the photo displayed
function updatePhoto() {
  // Set the source of the image to the dynamically generated image filename
  photoElement.src = `assets/backgrounds/${currentIndex}.jpg`;
}

// Event listener for clicking the "Backward" textbox
backwardTextbox.addEventListener('click', () => {
  // Move to the previous image, decrementing the index
  currentIndex--;
  // Ensure the index stays within the valid range (1000 to 2000)
  if (currentIndex < 1000) {
    currentIndex = 1000; // Loop back to 1000
  }
  updatePhoto();
});

// Event listener for clicking the "Forward" textbox
forwardTextbox.addEventListener('click', () => {
  // Move to the next image, incrementing the index
  currentIndex++;
  // Ensure the index stays within the valid range (1000 to 2000)
  if (currentIndex > maxIndex) {
    currentIndex = maxIndex; // Stop at 2000
  }
  updatePhoto();
});

// Event listener for keyboard navigation (left and right arrow keys)
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    // Decrement index to go backward
    currentIndex--;
    if (currentIndex < 1000) {
      currentIndex = 1000; // Loop back to 1000
    }
    updatePhoto();
  } else if (event.key === 'ArrowRight') {
    // Increment index to go forward
    currentIndex++;
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex; // Stop at 2000
    }
    updatePhoto();
  }
});

// Initial photo load
updatePhoto();

// Timer setup
let timeLeft = 60; // Start from 1 minute (60 seconds)

// Timer function to update the countdown every second
function startTimer() {
  const timerInterval = setInterval(() => {
    // Update the displayed timer
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Format the time as MM:SS
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // If time reaches 0, refresh the page
    if (timeLeft <= 0) {
      clearInterval(timerInterval); // Stop the timer
      location.reload(); // Refresh the page
    } else {
      timeLeft--; // Decrease the time left by 1 second
    }
  }, 1000);
}

// Start the timer when the page loads
startTimer();
