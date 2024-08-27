function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'block'

    const startButton = document.querySelector('.startButton')
    startButton.style.display = 'none'

    const closeButton = document.querySelector('.closeButton')
    closeButton.style.display = 'block'

    const menu = document.querySelector('.menu')
    menu.style.borderBottom = '3px solid #e0e0e0'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'

    const startButton = document.querySelector('.startButton')
    startButton.style.display = 'block'

    const closeButton = document.querySelector('.closeButton')
    closeButton.style.display = 'none'

    const menu = document.querySelector('.menu')
    menu.style.borderBottom = '1px solid #dbdbdb'
}





document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu .menu-links li a");

    // Get the profile picture element
    const profilePic = document.querySelector('.profile-pic img');
    const profilePicElement = document.querySelector('.profile-pic');

    // Function to remove active class from all nav links
    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove("active"));
    }

    // Function to add active class to the current nav link
    function addActiveClass(link) {
        removeActiveClasses();
        link.classList.add("active");
    }

    // Function to check which section is active and update profile picture
    function updateProfilePic() {
        if (document.querySelector('.menu .menu-links li a[href="#section-home"]').classList.contains('active')) {
            profilePic.classList.remove('img-expanded');
            profilePicElement.classList.remove('profile-pic-expanded');

        } else {
            profilePic.classList.add('img-expanded');
            profilePicElement.classList.add('profile-pic-expanded');
        }
    }

    // Intersection Observer to observe sections
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                const activeLink = document.querySelector(`.menu .menu-links li a[href="#${id}"]`);
                addActiveClass(activeLink);

                // Update the profile picture based on the active section
                updateProfilePic();
            }
        });
    }, {
        threshold: 0.2
    });

    // Observe each section
    sections.forEach(section => observer.observe(section));

    // Smooth scroll to section on nav link click
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

            addActiveClass(this);

        });
    });

    updateProfilePic();
});



