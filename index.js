// Array of image filenames with relative paths to the "assets/images" folder
const images = [
  'assets/images/ezgif-frame-001.jpg',
  'assets/images/ezgif-frame-002.jpg',
  'assets/images/ezgif-frame-003.jpg',
  'assets/images/ezgif-frame-004.jpg',
  'assets/images/ezgif-frame-005.jpg',
  'assets/images/ezgif-frame-006.jpg',
  'assets/images/ezgif-frame-007.jpg',
  'assets/images/ezgif-frame-008.jpg',
  'assets/images/ezgif-frame-009.jpg',
  'assets/images/ezgif-frame-010.jpg',
  'assets/images/ezgif-frame-011.jpg',
  'assets/images/ezgif-frame-012.jpg',
  'assets/images/ezgif-frame-013.jpg',
  'assets/images/ezgif-frame-014.jpg',
  'assets/images/ezgif-frame-015.jpg',
  'assets/images/ezgif-frame-016.jpg',
  'assets/images/ezgif-frame-017.jpg',
  'assets/images/ezgif-frame-018.jpg',
  'assets/images/ezgif-frame-019.jpg',
  'assets/images/ezgif-frame-020.jpg',
  'assets/images/ezgif-frame-021.jpg',
  'assets/images/ezgif-frame-022.jpg',
  'assets/images/ezgif-frame-023.jpg',
  'assets/images/ezgif-frame-024.jpg',
  'assets/images/ezgif-frame-025.jpg',
  'assets/images/ezgif-frame-026.jpg',
  'assets/images/ezgif-frame-027.jpg',
  'assets/images/ezgif-frame-028.jpg',
  'assets/images/ezgif-frame-029.jpg',
  'assets/images/ezgif-frame-030.jpg',
  'assets/images/ezgif-frame-031.jpg',
  'assets/images/ezgif-frame-032.jpg',
  'assets/images/ezgif-frame-033.jpg',
  'assets/images/ezgif-frame-034.jpg',
  'assets/images/ezgif-frame-035.jpg',
  'assets/images/ezgif-frame-036.jpg',
  'assets/images/ezgif-frame-037.jpg',
  'assets/images/ezgif-frame-038.jpg',
  'assets/images/ezgif-frame-039.jpg',
  'assets/images/ezgif-frame-040.jpg',
  'assets/images/ezgif-frame-041.jpg',
  'assets/images/ezgif-frame-042.jpg',
  'assets/images/ezgif-frame-043.jpg',
  'assets/images/ezgif-frame-044.jpg',
  'assets/images/ezgif-frame-045.jpg',
  'assets/images/ezgif-frame-046.jpg',
  'assets/images/ezgif-frame-047.jpg',
  'assets/images/ezgif-frame-048.jpg',
  'assets/images/ezgif-frame-049.jpg',
  'assets/images/ezgif-frame-050.jpg',
  'assets/images/ezgif-frame-051.jpg',
  'assets/images/ezgif-frame-052.jpg',
  'assets/images/ezgif-frame-053.jpg',
  'assets/images/ezgif-frame-054.jpg',
  'assets/images/ezgif-frame-055.jpg',
  'assets/images/ezgif-frame-056.jpg',
  'assets/images/ezgif-frame-057.jpg',
  'assets/images/ezgif-frame-058.jpg',
  'assets/images/ezgif-frame-059.jpg',
  'assets/images/ezgif-frame-060.jpg',
  'assets/images/ezgif-frame-061.jpg',
  'assets/images/ezgif-frame-062.jpg',
  'assets/images/ezgif-frame-063.jpg',
  'assets/images/ezgif-frame-064.jpg',
  'assets/images/ezgif-frame-065.jpg',
  'assets/images/ezgif-frame-066.jpg',
  'assets/images/ezgif-frame-067.jpg',
  'assets/images/ezgif-frame-068.jpg',
  'assets/images/ezgif-frame-069.jpg',
  'assets/images/ezgif-frame-070.jpg',
  'assets/images/ezgif-frame-071.jpg',
  'assets/images/ezgif-frame-072.jpg',
  'assets/images/ezgif-frame-073.jpg',
  'assets/images/ezgif-frame-074.jpg',
  'assets/images/ezgif-frame-075.jpg',
  'assets/images/ezgif-frame-076.jpg',
  'assets/images/ezgif-frame-077.jpg',
  'assets/images/ezgif-frame-078.jpg',
  'assets/images/ezgif-frame-079.jpg',
  'assets/images/ezgif-frame-080.jpg',
  'assets/images/ezgif-frame-081.jpg',
  'assets/images/ezgif-frame-082.jpg',
  'assets/images/ezgif-frame-083.jpg',
  'assets/images/ezgif-frame-084.jpg',
  'assets/images/ezgif-frame-085.jpg',
  'assets/images/ezgif-frame-086.jpg',
  'assets/images/ezgif-frame-087.jpg',
  'assets/images/ezgif-frame-088.jpg',
  'assets/images/ezgif-frame-089.jpg',
  'assets/images/ezgif-frame-090.jpg',
  'assets/images/ezgif-frame-091.jpg',
  'assets/images/ezgif-frame-092.jpg',
  'assets/images/ezgif-frame-093.jpg',
  'assets/images/ezgif-frame-094.jpg',
  'assets/images/ezgif-frame-095.jpg',
  'assets/images/ezgif-frame-096.jpg',
  'assets/images/ezgif-frame-097.jpg',
  'assets/images/ezgif-frame-098.jpg',
  'assets/images/ezgif-frame-099.jpg',
  'assets/images/ezgif-frame-100.jpg',
  'assets/images/ezgif-frame-101.jpg',
  'assets/images/ezgif-frame-102.jpg',
  'assets/images/ezgif-frame-103.jpg',
  'assets/images/ezgif-frame-104.jpg',
  'assets/images/ezgif-frame-105.jpg',
  'assets/images/ezgif-frame-106.jpg',
  'assets/images/ezgif-frame-107.jpg',
  'assets/images/ezgif-frame-108.jpg',
  'assets/images/ezgif-frame-109.jpg',
  'assets/images/ezgif-frame-110.jpg',
  'assets/images/ezgif-frame-111.jpg',
  'assets/images/ezgif-frame-112.jpg',
  'assets/images/ezgif-frame-113.jpg',
  'assets/images/ezgif-frame-114.jpg',
  'assets/images/ezgif-frame-115.jpg',
  'assets/images/ezgif-frame-116.jpg',
  'assets/images/ezgif-frame-117.jpg',
  'assets/images/ezgif-frame-118.jpg',
  'assets/images/ezgif-frame-119.jpg',
  'assets/images/ezgif-frame-120.jpg',
  'assets/images/ezgif-frame-121.jpg',
  'assets/images/ezgif-frame-122.jpg',
  'assets/images/ezgif-frame-123.jpg',
  'assets/images/ezgif-frame-124.jpg',
  'assets/images/ezgif-frame-125.jpg',
  'assets/images/ezgif-frame-126.jpg',
  'assets/images/ezgif-frame-127.jpg',
  'assets/images/ezgif-frame-128.jpg',
  'assets/images/ezgif-frame-129.jpg',
  'assets/images/ezgif-frame-130.jpg',
  'assets/images/ezgif-frame-131.jpg',
  'assets/images/ezgif-frame-132.jpg',
  'assets/images/ezgif-frame-133.jpg',
  'assets/images/ezgif-frame-134.jpg',
  'assets/images/ezgif-frame-135.jpg',
  'assets/images/ezgif-frame-136.jpg',
  'assets/images/ezgif-frame-137.jpg',
  'assets/images/ezgif-frame-138.jpg',
  'assets/images/ezgif-frame-139.jpg',
  'assets/images/ezgif-frame-140.jpg',
  'assets/images/ezgif-frame-141.jpg',
  'assets/images/ezgif-frame-142.jpg',
  'assets/images/ezgif-frame-143.jpg',
  'assets/images/ezgif-frame-144.jpg',
  'assets/images/ezgif-frame-145.jpg',
  'assets/images/ezgif-frame-146.jpg',
  'assets/images/ezgif-frame-147.jpg',
  'assets/images/ezgif-frame-148.jpg',
  'assets/images/ezgif-frame-149.jpg',
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

// Start the timer when the page loads
startTimer();

startTimer();
