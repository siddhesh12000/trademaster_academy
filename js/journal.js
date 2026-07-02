// journal.js - Trading journal logic

document.addEventListener('DOMContentLoaded', () => {
    // Only run on journal page
    const journalForm = document.getElementById('journalForm');
    const journalEntries = document.getElementById('journalEntries');
    
    if (!journalForm && !journalEntries) return;

    const loadEntries = () => {
        const entriesStr = localStorage.getItem('journalEntries');
        return entriesStr ? JSON.parse(entriesStr) : [];
    };

    const saveEntries = (entries) => {
        localStorage.setItem('journalEntries', JSON.stringify(entries));
    };

    window.addJournalEntry = (entry) => {
        const entries = loadEntries();
        entries.push({...entry, id: Date.now()});
        saveEntries(entries);
        if(window.showToast) window.showToast('Journal entry saved', 'success');
    };
});
