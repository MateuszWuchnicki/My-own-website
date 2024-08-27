//document.addEventListener('DOMContentLoaded', function() {
//    const imgElement = document.querySelector('.hover-image');
//
//    // Verify element selection
//    console.log(imgElement);
//
//    // Change image on hover
//    imgElement.addEventListener('mouseover', function() {
//        imgElement.src = 'assets/icons/close_hover.png';
//    });
//
//    // Revert to original image when mouse leaves
//    imgElement.addEventListener('mouseout', function() {
//        imgElement.src = 'assets/icons/close.png';
//    });
//});


document.addEventListener('DOMContentLoaded', function() {
    const imgElements = document.querySelectorAll('.hover-image');

    imgElements.forEach(function(imgElement) {
        // Store the original src
        const originalSrc = imgElement.src;
        // Get the hover image from the data-hover attribute
        const hoverSrc = imgElement.getAttribute('data-hover');

        // Change image on hover
        imgElement.addEventListener('mouseover', function() {
            imgElement.src = hoverSrc;
        });

        // Revert to original image when mouse leaves
        imgElement.addEventListener('mouseout', function() {
            imgElement.src = originalSrc;
        });
    });
});