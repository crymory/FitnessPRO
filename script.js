// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved theme preference or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    }
    
    // Theme switch event listener
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Workout card click event
    const workoutCards = document.querySelectorAll('.workout-card');
    const modal = document.getElementById('workout-modal');
    const closeBtn = document.querySelector('.close-btn');
    
    workoutCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            const time = this.getAttribute('data-time');
            document.getElementById('modal-workout-title').textContent = title;
            modal.style.display = 'flex';
        });
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Timer functionality
    let timer;
    let seconds = 0;
    let isRunning = false;
    
    const timerDisplay = document.getElementById('workout-timer');
    const startTimerBtn = document.getElementById('start-timer');
    const pauseTimerBtn = document.getElementById('pause-timer');
    
    startTimerBtn.addEventListener('click', function() {
        if (!isRunning) {
            isRunning = true;
            timer = setInterval(updateTimer, 1000);
            startTimerBtn.textContent = 'Продолжить';
        }
    });
    
    pauseTimerBtn.addEventListener('click', function() {
        clearInterval(timer);
        isRunning = false;
    });
    
    function updateTimer() {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    
    // Simulate some workout activity for statistics
    // This is just for demonstration - in a real app would use stored data
    function simulateActivityData() {
        // Update total workouts
        document.getElementById('total-workouts').textContent = Math.floor(Math.random() * 50) + 10;
        
        // Update minutes of activity
        document.getElementById('total-minutes').textContent = Math.floor(Math.random() * 2000) + 500;
        
        // Update workout streak
        document.getElementById('workout-streak').textContent = Math.floor(Math.random() * 14) + 1;
        
        // Update weekly chart
        for (let i = 1; i <= 7; i++) {
            const dayBar = document.getElementById(`day-${i}`);
            const height = Math.floor(Math.random() * 80) + 20;
            dayBar.style.height = `${height}%`;
        }
    }
    
    // Call once on page load for demo purposes
    simulateActivityData();
    
    // Exercise rotation for workout modal
    const exercises = [
        "Приседания",
        "Отжимания",
        "Планка",
        "Выпады",
        "Бёрпи",
        "Скручивания",
        "Прыжки",
        "Подтягивания"
    ];
    
    let currentExerciseIndex = 0;
    
    function updateCurrentExercise() {
        if (isRunning) {
            document.getElementById('current-exercise').textContent = exercises[currentExerciseIndex];
            
            const nextIndex = (currentExerciseIndex + 1) % exercises.length;
            document.getElementById('next-exercise').textContent = exercises[nextIndex];
            
            // Update progress bar
            const progress = document.getElementById('exercise-progress');
            progress.style.width = '0%';
            
            // Simulate progress
            let width = 0;
            const progressInterval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(progressInterval);
                    currentExerciseIndex = (currentExerciseIndex + 1) % exercises.length;
                    setTimeout(updateCurrentExercise, 500); // Delay before next exercise
                } else {
                    width += 1;
                    progress.style.width = width + '%';
                }
            }, 300); // Each exercise lasts about 30 seconds
        }
    }
    
    // Start exercise rotation when timer starts
    startTimerBtn.addEventListener('click', function() {
        if (!document.getElementById('current-exercise').textContent.includes('Подготовка')) {
            return; // Don't restart exercises if already running
        }
        setTimeout(updateCurrentExercise, 1000);
    });
});
