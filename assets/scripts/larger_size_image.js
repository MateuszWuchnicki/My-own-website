// Get the modal
var modalImgM = document.getElementById("m-image");

// Get all thumbnail images
var thumbnails = document.getElementsByClassName("thumbnail");
var modalImgXl = document.getElementById("xl-image");

// Add click event to each thumbnail
for (let thumbnail of thumbnails) {
    thumbnail.onclick = function () {
        modalImgXl.src = this.src; // Set the source of the modal image to the clicked thumbnail
        modalImgM.style.display = "flex"; // Ensure the modal display is flex (visible)
        setTimeout(() => {
            modalImgM.classList.add("show"); // Show the modal by adding the 'show' class with opacity transition
        }, 10);
    }
}

// Get the <div> element that closes the modal
var closeBtn = document.getElementsByClassName("close-image")[0];

// When the user clicks on the close button, close the modal
closeBtn.onclick = function () {
    modalImgM.classList.remove("show"); // Hide the modal by removing the 'show' class
    setTimeout(() => {
        modalImgM.style.display = "none"; // Set the modal display to none after transition ends
    }, 500); // Wait for the transition to finish (0.5s)
}

// Optional: Close modal when clicking outside of the image
modalImgM.onclick = function(event) {
    if (event.target === modalImgM) { // Check if the click is outside the modal content
        closeBtn.onclick(); // Close the modal
    }
};
