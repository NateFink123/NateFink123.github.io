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

];

let currentIndex = 0; // Starting index
let velocity = 0; // The current momentum (speed)
const maxVelocity = 5; // Maximum speed of image change
const friction = 0.1; // How fast momentum decays over time
const acceleration = 1; // How fast the image transition speed increases when clicked
let isMoving = false; // Whether the image is currently transitioning

// Get the image element and the navigation textboxes
const photoElement = document.getElementById('photo');
const backwardTextbox = document.getElementById('backward');
const forwardTextbox = document.getElementById('forward');
const timerElement = document.getElementById('timer');

// Function to update the photo displayed
function updatePhoto() {
  // Set the source of the image to the current photo in the array
  photoElement.src = images[currentIndex];
}

// Function to move forward or backward based on velocity
function move() {
  // Adjust currentIndex based on velocity
  if (velocity !== 0) {
    currentIndex = (currentIndex + velocity + images.length) % images.length; // Wrap around the array
    updatePhoto();
  }
}

// Gradual slowing down of momentum
function updateMomentum() {
  if (!isMoving && Math.abs(velocity) > 0) {
    // Apply friction to gradually slow down the momentum
    velocity -= velocity * friction; // Decay the velocity gradually
    if (Math.abs(velocity) < 0.01) {
      velocity = 0; // Stop the movement if the velocity is very low
    }
  }
}

// Event listener for clicking the "Backward" textbox
backwardTextbox.addEventListener('mousedown', () => {
  isMoving = true;
  velocity = Math.max(-maxVelocity, velocity - acceleration); // Increase backward momentum
  updatePhoto();
});

forwardTextbox.addEventListener('mousedown', () => {
  isMoving = true;
  velocity = Math.min(maxVelocity, velocity + acceleration); // Increase forward momentum
  updatePhoto();
});

// Event listener for releasing the "Backward" or "Forward" button (to gradually slow down)
backwardTextbox.addEventListener('mouseup', () => {
  isMoving = false; // Stop moving when the button is released
});

forwardTextbox.addEventListener('mouseup', () => {
  isMoving = false; // Stop moving when the button is released
});

// Event listener for keyboard navigation (left and right arrow keys)
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    velocity = -maxVelocity; // Move backward with max speed
    isMoving = true;
    updatePhoto();
  } else if (event.key === 'ArrowRight') {
    velocity = maxVelocity; // Move forward with max speed
    isMoving = true;
    updatePhoto();
  }
});

// Stop the movement when the arrow keys are released
document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    isMoving = false;
  }
});

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

// Update the photo and momentum in intervals
setInterval(() => {
  if (isMoving || Math.abs(velocity) > 0) {
    move();
  }
  updateMomentum();
}, 100); // Update every 100ms for smooth transition
