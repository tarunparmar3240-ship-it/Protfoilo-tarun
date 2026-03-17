// ── Mobile Menu Toggle ──
const menuBtn = document.getElementById('menuBtn');
const navItems = document.querySelectorAll('.list ul li');

menuBtn.addEventListener('click', () => {
    navItems.forEach(li => {
        li.style.display = li.style.display === 'block' ? 'none' : 'block';
    });
});


// Close menu on nav link click
navItems.forEach(li => {
    li.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navItems.forEach(item => item.style.display = 'none');
        }
    });
});

// ── Scroll Reveal Animation ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-box, .About-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ── Active Nav Highlight on Scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.list ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${current}` ? '#4fffb0' : '';
    });
});

// ── CV Download ──
function downloadCV() {
    window.open("tarun_parmar_cv.pdf");
}
