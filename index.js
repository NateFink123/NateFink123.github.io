// Array of image filenames with the new paths
const images = [
    'assets/images/ezgif-frame-001.jpg',
    'assets/images/ezgif-frame-002.jpg',
    'assets/images/ezgif-frame-003.jpg',
    'assets/images/ezgif-frame-004.jpg',
    // Add more photo filenames as needed
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
  
