// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

// Project data
const projects = [
    {
        title: 'Project 1',
        description: 'A brief description of project 1 and its features.',
        image: 'https://via.placeholder.com/300x200',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'A brief description of project 2 and its features.',
        image: 'https://via.placeholder.com/300x200',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: '#'
    },
    {
        title: 'Project 3',
        description: 'A brief description of project 3 and its features.',
        image: 'https://via.placeholder.com/300x200',
        technologies: ['Vue.js', 'Express', 'PostgreSQL'],
        link: '#'
    }
];

// Theme Toggle
function toggleTheme() {
    body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Mobile Navigation
function toggleMobileMenu() {
    navLinks.classList.toggle('show');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
}

// Scroll Animation
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('show');
        }
    });
}

// Generate Project Cards
function generateProjectCards() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card animate-on-scroll';
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 200px; object-fit: cover;">
            <div style="padding: 1.5rem;">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div style="display: flex; gap: 0.5rem; margin: 1rem 0;">
                    ${project.technologies.map(tech => `<span style="background: var(--card-bg); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.9rem;">${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="btn primary-btn" style="margin-top: 1rem;">View Project</a>
            </div>
        `;
        
        projectGrid.appendChild(card);
    });
}

// Form Handling
function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
}

// Event Listeners
themeToggle.addEventListener('click', toggleTheme);
hamburger.addEventListener('click', toggleMobileMenu);
window.addEventListener('scroll', handleScrollAnimation);
document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateProjectCards();
    handleScrollAnimation();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('show');
        }
    });
});

// Update active navigation link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink); 