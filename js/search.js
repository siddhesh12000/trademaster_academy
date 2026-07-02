// search.js - Global search functionality

document.addEventListener('DOMContentLoaded', () => {
    const searchModal = document.getElementById('searchModal');
    const openSearchBtn = document.getElementById('openSearchBtn');
    const closeSearchBtn = document.getElementById('closeSearchBtn');
    const modalSearchInput = document.getElementById('modalSearchInput');

    const openSearch = () => {
        if (searchModal) {
            searchModal.classList.add('active');
            if (modalSearchInput) modalSearchInput.focus();
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    };

    const closeSearch = () => {
        if (searchModal) {
            searchModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (openSearchBtn) {
        openSearchBtn.addEventListener('click', openSearch);
    }

    if (closeSearchBtn) {
        closeSearchBtn.addEventListener('click', closeSearch);
    }

    // Close on overlay click
    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                closeSearch();
            }
        });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Cmd/Ctrl + K to open search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        // Esc to close search
        if (e.key === 'Escape' && searchModal && searchModal.classList.contains('active')) {
            closeSearch();
        }
    });
});
