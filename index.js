// Array of image filenames with relative paths to the "assets/images" folder
const images = [
  'assets/images/ezgif-frame-001.jpg',
  'assets/images/ezgif-frame-002.jpg',
  'assets/images/ezgif-frame-003.jpg',
  'assets/images/ezgif-frame-004.jpg',
  'assets/images/ezgif-frame-005.jpg',
  // Continue for all your images up to 150 (adjust as needed)
  'assets/images/ezgif-frame-150.jpg'
];

let currentIndex = 0; // Starting index

// Get the image element and the navigation textboxes
const photoElement = document.getElementById('photo');
const backwardTextbox = document.getElementById('backward');
const forwardTextbox = document.getElementById('forward');

// Function to update the photo displayed
function updatePhoto() {
  // Set the source of the image to the current photo in the array
  photoElement.src = images[currentIndex];
}

// Event listener for clicking the "Backward" textbox
backwardTextbox.addEventListener('click', () => {
  // Move to the previous image in the array
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updatePhoto();
});

// Event listener for clicking the "Forward" textbox
forwardTextbox.addEventListener('click', () => {
  // Move to the next image in the array
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updatePhoto();
});

// Event listener for keyboard navigation (left and right arrow keys)
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updatePhoto();
  } else if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
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

