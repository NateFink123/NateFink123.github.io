// Define the directory where images are stored
const imageDirectory = 'assets/images/';

// Start with the first image (index 1 for ezgif-frame-001.jpg)
let currentIndex = 1;

// Get the image element and the navigation textboxes
const photoElement = document.getElementById('photo');
const backwardTextbox = document.getElementById('backward');
const forwardTextbox = document.getElementById('forward');

// Function to update the photo displayed
function updatePhoto() {
  // Construct the image filename based on current index
  let imageFilename = `${imageDirectory}ezgif-frame-${String(currentIndex).padStart(3, '0')}.jpg`;
  
  // Set the source of the image to the dynamically constructed filename
  photoElement.src = imageFilename;
}

// Event listener for clicking the "Backward" textbox
backwardTextbox.addEventListener('click', () => {
  // Move to the previous image
  currentIndex = (currentIndex === 1) ? 150 : currentIndex - 1;
  updatePhoto();
});

// Event listener for clicking the "Forward" textbox
forwardTextbox.addEventListener('click', () => {
  // Move to the next image
  currentIndex = (currentIndex === 150) ? 1 : currentIndex + 1;
  updatePhoto();
});

// Event listener for keyboard navigation (left and right arrow keys)
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    // Move to the previous image
    currentIndex = (currentIndex === 1) ? 150 : currentIndex - 1;
    updatePhoto();
  } else if (event.key === 'ArrowRight') {
    // Move to the next image
    currentIndex = (currentIndex === 150) ? 1 : currentIndex + 1;
    updatePhoto();
  }
});

// Initial photo load
updatePhoto();

// Timer setup
let timeLeft = 60; // Start from 1 minute (60 seconds)
const timerElement = document.getElementById('timer');

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
