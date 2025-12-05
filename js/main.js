// ============================================
// DARK MODE TOGGLE
// ============================================

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply theme on page load
document.documentElement.setAttribute('data-theme', currentTheme);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Update button text on load
    updateThemeButton();

    // Add click listener to theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Initialize scroll to top button
    initScrollToTop();
});

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Apply new theme
    document.documentElement.setAttribute('data-theme', newTheme);

    // Save preference
    localStorage.setItem('theme', newTheme);

    // Update button
    updateThemeButton();
}

function updateThemeButton() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        themeToggle.innerHTML = '☀️ Light';
    } else {
        themeToggle.innerHTML = '🌙 Dark';
    }
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function initScrollToTop() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (!scrollButton) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// KEYBOARD SHORTCUTS (Optional)
// ============================================

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to toggle dark mode
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleTheme();
    }

    // Press 'Home' key to scroll to top
    if (e.key === 'Home' && !e.shiftKey && !e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
