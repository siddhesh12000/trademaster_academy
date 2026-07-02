// navigation.js - Sidebar and header interactions

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    
    // Toggle Sidebar on mobile
    if (menuToggleBtn && sidebar) {
        menuToggleBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }

    if (closeSidebarBtn && sidebar) {
        closeSidebarBtn.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 992 && sidebar && sidebar.classList.contains('open')) {
            if (!sidebar.contains(e.target) && !menuToggleBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });
    
    // Set active nav link based on current page
    const setNavActive = () => {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === currentPath) {
                link.classList.add('active');
            }
        });
    };
    
    setNavActive();
});
