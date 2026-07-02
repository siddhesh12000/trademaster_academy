// theme.js - Dark/Light mode toggle

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    // Check local storage or system preference
    const getPreferredTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'theme-dark' : 'theme-light';
    };

    const setTheme = (theme) => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
        
        // Update toggle icon
        if (themeToggleBtn) {
            const icon = themeToggleBtn.querySelector('i');
            if (icon) {
                if (theme === 'theme-light') {
                    icon.className = 'ph ph-sun';
                } else {
                    icon.className = 'ph ph-moon';
                }
            }
        }
    };

    // Initialize theme
    setTheme(getPreferredTheme());

    // Toggle on click
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.body.className;
            const newTheme = currentTheme === 'theme-dark' ? 'theme-light' : 'theme-dark';
            setTheme(newTheme);
            
            if (window.showToast) {
                window.showToast(`${newTheme === 'theme-dark' ? 'Dark' : 'Light'} mode enabled`, 'info');
            }
        });
    }
});
