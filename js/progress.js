// progress.js - Handle user learning progress (Mock implementation for UI)

document.addEventListener('DOMContentLoaded', () => {
    // Load progress from local storage
    const loadProgress = () => {
        const progressStr = localStorage.getItem('userProgress');
        return progressStr ? JSON.parse(progressStr) : {
            completedLessons: [],
            totalStudyHours: 0,
            quizScores: {}
        };
    };

    const saveProgress = (progress) => {
        localStorage.setItem('userProgress', JSON.stringify(progress));
    };

    // Global function to mark lesson completed
    window.markLessonCompleted = (lessonId) => {
        const progress = loadProgress();
        if (!progress.completedLessons.includes(lessonId)) {
            progress.completedLessons.push(lessonId);
            saveProgress(progress);
            if(window.showToast) window.showToast('Lesson marked as completed!', 'success');
        }
    };
});
