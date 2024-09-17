document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('languageToggle');

    // Fetch language data
    fetch('assets/json/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data loaded:', data); // Debugging line

            function switchLanguage(lang) {
                console.log('Switching to:', lang); // Debugging line

                document.querySelectorAll('[data-key]').forEach(element => {
                    const key = element.getAttribute('data-key');
                    console.log('Element key:', key); // Debugging line
                    if (data[lang] && data[lang][key]) {
                        let text = data[lang][key];
                        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                            element.setAttribute('placeholder', text);
                        } else if (element.tagName === 'IMG') {
                            element.setAttribute('src', text);
                        } else {
                            // Handle &#10; without converting to <br>
                            element.innerHTML = text.replace(/&#10;/g, '\n');
                        }
                    } else {
                        console.warn('Missing key:', key); // Debugging line
                    }
                });
            }

            // Initial language setting
            let currentLang = 'PL';
            switchLanguage(currentLang);

            // Event listener for toggle change
            languageToggle.addEventListener('change', () => {
                currentLang = languageToggle.checked ? 'EN' : 'PL';
                switchLanguage(currentLang);
            });
        })
        .catch(error => console.error('Error loading language data:', error));
});
