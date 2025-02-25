// Responsive Background Glow
const responsiveGlow = document.getElementById('responsiveGlow');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    responsiveGlow.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(74, 144, 226, 0.2), transparent 70%)`;
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
});
// 3D Scroll Animation for Project Cards
const projectCards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    },
    {
        threshold: 0.5, // Trigger when 50% of the card is visible
    }
);

projectCards.forEach((card) => {
    observer.observe(card);
});