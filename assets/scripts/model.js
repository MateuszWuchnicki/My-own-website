function initializeModals() {
    // Get all buttons that open modals
    const openButtons = document.querySelectorAll('.cv-button[data-modal]');
    const openButtons2 = document.querySelectorAll('.cv-button_2[data-modal]');

    // Get all buttons that close modals
    const closeButtons = document.querySelectorAll('.close-button[data-close]');

    // Get all arrow buttons
    const arrowButtons = document.querySelectorAll('.arrow-button[data-modal]');


    // Add event listeners to open buttons
    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('show');
        });
    });
    
    // Add event listeners to open buttons
    openButtons2.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('show');
        });
    });


    // Add event listeners to close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-close');
            const modal = document.getElementById(modalId);
            modal.classList.remove('show');
        });
    });

    // Add event listeners to arrow buttons
    arrowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentModal = button.closest('.modal');
            const modalId = button.getAttribute('data-modal');
            const nextModal = document.getElementById(modalId);
            currentModal.classList.add('exiting');
            setTimeout(() => {
                currentModal.classList.remove('show', 'exiting');
                nextModal.classList.add('show');
            }, 300); // Match this delay to the CSS transition duration
        });
    });


    // Optional: Close the modal when clicking outside the modal-content
    window.addEventListener('click', (event) => {
        openButtons.forEach(button => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (event.target === modal) {
                modal.classList.remove('show');
            }
        });
    });
}

// Call the function after DOM has loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeModals();
});