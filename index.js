// document.getElementById('courses-toggle').addEventListener('click', function(event) {
//     event.preventDefault();
//     const dropdown = this.nextElementSibling;
//     dropdown.classList.toggle('show');
// });

// // Close dropdowns if clicking outside
// document.addEventListener('click', function(event) {
//     if (!event.target.closest('.dropdown-container')) {
//         document.querySelectorAll('.dropdown').forEach(dropdown => {
//             dropdown.classList.remove('show');
//         });
//     }
// });


// home js

document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        features.forEach(feature => {
            const { top } = feature.getBoundingClientRect();
            if (top < windowHeight - 100) {
                feature.style.opacity = '1';
                feature.style.transform = 'translateY(0)';
                feature.style.animation = 'slideIn 0.8s ease-out';
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();  // Initial check
});

// about js

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about-section');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const { top } = section.getBoundingClientRect();
            if (top < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.animation = 'slideIn 0.8s ease-out';
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();  // Initial check
});

// .contact us js

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.contact-section');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const { top } = section.getBoundingClientRect();
            if (top < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.animation = 'slideIn 0.8s ease-out';
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();  // Initial check
});
// cources js

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.courses-section');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const { top } = section.getBoundingClientRect();
            if (top < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.animation = 'slideIn 0.8s ease-out';
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();  // Initial check
});
