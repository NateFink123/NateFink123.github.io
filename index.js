// The base directory and file name pattern
const imageDirectory = 'assets/images/';
const baseFileName = 'ezgif-frame-';
const fileExtension = '.jpg';

// Set the number of images you have (in this case, 150)
const totalImages = 150; // You can adjust this number as needed

let currentIndex = 0; // Starting index

// Get the image element, navigation textboxes, and frame number display
const photoElement = document.getElementById('photo');
const backwardTextbox = document.getElementById('backward');
const forwardTextbox = document.getElementById('forward');
const frameNumberElement = document.getElementById('frameNumber');

// Function to get the image filename based on the current index
function getImageFileName(index) {
  // Generate the filename using zero-padded index (e.g., 001, 002, etc.)
  return `${imageDirectory}${baseFileName}${String(index + 1).padStart(3, '0')}${fileExtension}`;
}

// Function to update the photo and frame number displayed
function updatePhoto() {
  // Set the source of the image using the generated filename
  photoElement.src = getImageFileName(currentIndex);

  // Update the frame number display
  frameNumberElement.textContent = `Frame ${String(currentIndex + 1).padStart(3, '0')}`;
}

// Event listener for clicking the "Backward" textbox
backwardTextbox.addEventListener('click', () => {
  // Move to the previous image in the array
  currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
  updatePhoto();
});

// Event listener for clicking the "Forward" textbox
forwardTextbox.addEventListener('click', () => {
  // Move to the next image in the array
  currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
  updatePhoto();
});

// Event listener for keyboard navigation (left and right arrow keys)
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    // Move to the previous image
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updatePhoto();
  } else if (event.key === 'ArrowRight') {
    // Move to the next image
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
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
