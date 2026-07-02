// bookmark.js - Manage bookmarks

document.addEventListener('DOMContentLoaded', () => {
    const loadBookmarks = () => {
        const str = localStorage.getItem('userBookmarks');
        return str ? JSON.parse(str) : [];
    };

    const saveBookmarks = (bookmarks) => {
        localStorage.setItem('userBookmarks', JSON.stringify(bookmarks));
    };

    window.toggleBookmark = (itemId, itemData) => {
        let bookmarks = loadBookmarks();
        const index = bookmarks.findIndex(b => b.id === itemId);
        
        if (index > -1) {
            bookmarks.splice(index, 1);
            if(window.showToast) window.showToast('Removed from bookmarks', 'info');
        } else {
            bookmarks.push({ id: itemId, ...itemData, dateAdded: new Date().toISOString() });
            if(window.showToast) window.showToast('Added to bookmarks', 'success');
        }
        
        saveBookmarks(bookmarks);
        return index === -1; // returns true if added, false if removed
    };

    // Attach to existing bookmark buttons on load
    const setupBookmarkButtons = () => {
        const btns = document.querySelectorAll('.btn-bookmark');
        const bookmarks = loadBookmarks();
        
        btns.forEach(btn => {
            // Find a suitable title to use for the bookmark ID
            let titleEl = null;
            const card = btn.closest('.glass-card') || btn.closest('.topic-card') || btn.closest('.lesson-row');
            
            if (card) {
                titleEl = card.querySelector('.lesson-title') || card.querySelector('.card-title');
            }
            
            if (!titleEl) {
                const section = btn.closest('.section') || btn.closest('header');
                if (section) {
                    titleEl = section.querySelector('.section-title') || section.querySelector('h1');
                }
            }
            
            if (!titleEl) {
                titleEl = document.querySelector('.section-title') || document.querySelector('h1');
            }
            
            const title = titleEl ? titleEl.textContent.trim() : 'Bookmarked Item';
            const itemId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            
            const isBookmarked = bookmarks.some(b => b.id === itemId);
            if(isBookmarked) {
                btn.querySelector('i').classList.replace('ph-bookmark-simple', 'ph-fill');
                btn.querySelector('i').classList.add('gold-text');
            }

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const icon = btn.querySelector('i');
                const added = window.toggleBookmark(itemId, { title });
                
                if (added) {
                    icon.classList.replace('ph-bookmark-simple', 'ph-fill');
                    icon.classList.add('gold-text');
                } else {
                    icon.classList.replace('ph-fill', 'ph-bookmark-simple');
                    icon.classList.remove('gold-text');
                }
            });
        });
    };

    setupBookmarkButtons();
});
