// script.js

document.addEventListener('DOMContentLoaded', () => {
    const contents = document.querySelectorAll('.animation');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    contents.forEach(content => {
        observer.observe(content);
    });
});
