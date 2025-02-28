// Данные для тренировок
const workoutExercises = {
    'Руки и плечи': [
        { name: 'Разминка', duration: 60 },
        { name: 'Отжимания', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Планка с подъемом руки', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Обратные отжимания от скамьи', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Боковые подъемы рук', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Сгибания рук с гантелями', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Разгибания рук с гантелями', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Круговые движения руками', duration: 40 },
        { name: 'Растяжка', duration: 60 }
    ],
    'Кардио': [
        { name: 'Разминка', duration: 60 },
        { name: 'Прыжки с высоким подъемом колен', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Бег на месте', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Прыжки со скакалкой', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Выпады с прыжком', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Берпи', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Альпинист', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Приседания с прыжком', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Прыжки из стороны в сторону', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Высокие колени', duration: 45 },
        { name: 'Растяжка', duration: 60 }
    ],
    'Ноги и ягодицы': [
        { name: 'Разминка', duration: 60 },
        { name: 'Приседания', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Выпады вперед', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Боковые выпады', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Подъемы на носки', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Мостик', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Махи ногой назад', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Подъем ног лежа на боку', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Приседания сумо', duration: 45 },
        { name: 'Отдых', duration: 15 },
        { name: 'Ягодичный мостик на одной ноге', duration: 45 },
        { name: 'Растяжка', duration: 60 }
    ],
    'Полное тело': [
        { name: 'Разминка', duration: 60 },
        { name: 'Прыжки Джека', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Приседания', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Отжимания', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Выпады', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Планка', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Берпи', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Скручивания', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Подъемы рук с гантелями', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Ягодичный мостик', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Подтягивания ног к груди', duration: 40 },
        { name: 'Отдых', duration: 20 },
        { name: 'Боковая планка', duration: 40 },
        { name: 'Растяжка', duration: 60 }
    ]
};

// Советы по питанию
const nutritionTips = [
    'Пейте достаточно воды до, во время и после тренировки для поддержания гидратации.',
    'Ешьте углеводы за 1-2 часа до тренировки для обеспечения энергией.',
    'Употребляйте белок после тренировки для восстановления мышц.',
    'Включайте в рацион разнообразные фрукты и овощи для получения необходимых витаминов.',
    'Избегайте тяжелой пищи непосредственно перед тренировкой.',
    'Следите за размером порций, даже при здоровом питании.',
    'Включайте полезные жиры в свой рацион для поддержания гормонального баланса.',
    'Старайтесь есть медленно и осознанно, чтобы лучше чувствовать насыщение.',
    'Планируйте свои приемы пищи заранее, чтобы избежать нездоровых перекусов.',
    'Важно восполнять электролиты после интенсивных тренировок с повышенным потоотделением.'
];

// Рецепты
const recipes = [
    {
        title: 'Протеиновый смузи после тренировки',
        desc: 'Смешайте банан, ягоды, протеин и молоко для идеального восстановления после тренировки.'
    },
    {
        title: 'Овсянка с ягодами и орехами',
        desc: 'Питательный завтрак с овсянкой, свежими ягодами, медом и миксом орехов для длительной энергии.'
    },
    {
        title: 'Куриная грудка с киноа и овощами',
        desc: 'Нежирный белок с комплексными углеводами и витаминами для поддержки мышечного роста.'
    },
    {
        title: 'Зеленый смузи с авокадо',
        desc: 'Микс шпината, авокадо, яблока и имбиря для получения важных микроэлементов и антиоксидантов.'
    },
    {
        title: 'Запеченный лосось с овощами',
        desc: 'Богатый омега-3 лосось с запеченными овощами для здоровья сердца и восстановления мышц.'
    }
];

// Переменные для отслеживания состояния
let workoutInProgress = false;
let currentTimer = null;
let currentWorkout = null;
let currentExerciseIndex = 0;
let timerSeconds = 0;
let timerRunning = false;
let userStats = {
    totalWorkouts: 0,
    totalMinutes: 0,
    workoutStreak: 0,
    weeklyActivity: [0, 0, 0, 0, 0, 0, 0],
};

// Элементы DOM для быстрого доступа
const modal = document.getElementById('workout-modal');
const modalTitle = document.getElementById('modal-workout-title');
const currentExerciseElem = document.getElementById('current-exercise');
const nextExerciseElem = document.getElementById('next-exercise');
const timerElem = document.getElementById('workout-timer');
const progressBar = document.getElementById('exercise-progress');
const startTimerBtn = document.getElementById('start-timer');
const pauseTimerBtn = document.getElementById('pause-timer');
const closeBtn = document.querySelector('.close-btn');
const startWorkoutBtn = document.getElementById('start-workout-btn');
const workoutCards = document.querySelectorAll('.workout-card');

// Загружаем данные пользователя из localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    loadUserStats();
    updateStatsDisplay();
    setRandomTipAndRecipe();
    
    // Имитация данных для графика
    generateSampleData();
});

// Загрузка статистики пользователя
function loadUserStats() {
    const savedStats = localStorage.getItem('fitnessProStats');
    if (savedStats) {
        userStats = JSON.parse(savedStats);
    }
}

// Сохранение статистики пользователя
function saveUserStats() {
    localStorage.setItem('fitnessProStats', JSON.stringify(userStats));
}

// Обновление отображения статистики
function updateStatsDisplay() {
    document.getElementById('total-workouts').textContent = userStats.totalWorkouts;
    document.getElementById('total-minutes').textContent = userStats.totalMinutes;
    document.getElementById('workout-streak').textContent = userStats.workoutStreak;
    
    // Обновление графика активности
    userStats.weeklyActivity.forEach((activity, index) => {
        const dayBar = document.getElementById(`day-${index + 1}`);
        dayBar.style.height = `${activity}%`;
    });
}

// Генерация примера данных для визуализации
function generateSampleData() {
    // Если у пользователя нет данных, создаем пример для демонстрации
    if (userStats.totalWorkouts === 0) {
        userStats.weeklyActivity = [
            Math.floor(Math.random() * 70),
            Math.floor(Math.random() * 70),
            Math.floor(Math.random() * 70),
            Math.floor(Math.random() * 70),
            Math.floor(Math.random() * 70),
            Math.floor(Math.random() * 70),
            Math.floor(Math.random() * 70)
        ];
        updateStatsDisplay();
    }
}

// Установка случайного совета и рецепта
function setRandomTipAndRecipe() {
    const randomTip = nutritionTips[Math.floor(Math.random() * nutritionTips.length)];
    document.getElementById('daily-tip').textContent = randomTip;
    
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    document.getElementById('recipe-title').textContent = randomRecipe.title;
    document.getElementById('recipe-desc').textContent = randomRecipe.desc;
}

// Обработчики событий для карточек тренировок
workoutCards.forEach(card => {
    card.querySelector('.start-btn').addEventListener('click', () => {
        const workoutType = card.querySelector('h3').textContent;
        startWorkout(workoutType);
    });
});

// Обработчик для кнопки "Начать тренировку" в главном экране
startWorkoutBtn.addEventListener('click', () => {
    // Выбираем случайную тренировку
    const workouts = Object.keys(workoutExercises);
    const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
    startWorkout(randomWorkout);
});

// Функция запуска тренировки
function startWorkout(workoutType) {
    currentWorkout = workoutType;
    currentExerciseIndex = 0;
    workoutInProgress = true;
    timerSeconds = 0;
    
    // Настраиваем модальное окно
    modalTitle.textContent = workoutType;
    updateExerciseDisplay();
    
    // Показываем модальное окно
    modal.style.display = 'block';
}

// Обновление отображения текущего упражнения
function updateExerciseDisplay() {
    const exercises = workoutExercises[currentWorkout];
    
    if (currentExerciseIndex < exercises.length) {
        const currentExercise = exercises[currentExerciseIndex];
        currentExerciseElem.textContent = currentExercise.name;
        
        // Показываем следующее упражнение
        if (currentExerciseIndex + 1 < exercises.length) {
            nextExerciseElem.textContent = exercises[currentExerciseIndex + 1].name;
        } else {
            nextExerciseElem.textContent = 'Финиш!';
        }
        
        // Сбрасываем таймер
        timerSeconds = currentExercise.duration;
        updateTimerDisplay();
    } else {
        // Тренировка завершена
        completeWorkout();
    }
}

// Обновление отображения таймера
function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    timerElem.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Запуск таймера
function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        startTimerBtn.disabled = true;
        pauseTimerBtn.disabled = false;
        
        currentTimer = setInterval(() => {
            timerSeconds--;
            updateTimerDisplay();
            
            // Обновляем прогресс-бар
            const exercise = workoutExercises[currentWorkout][currentExerciseIndex];
            const progress = 100 - (timerSeconds / exercise.duration * 100);
            progressBar.style.width = `${progress}%`;
            
            if (timerSeconds <= 0) {
                // Переходим к следующему упражнению
                currentExerciseIndex++;
                clearInterval(currentTimer);
                timerRunning = false;
                startTimerBtn.disabled = false;
                pauseTimerBtn.disabled = true;
                
                // Воспроизводим звук окончания упражнения
                playSound();
                
                updateExerciseDisplay();
            }
        }, 1000);
    }
}

// Пауза таймера
function pauseTimer() {
    if (timerRunning) {
        clearInterval(currentTimer);
        timerRunning = false;
        startTimerBtn.disabled = false;
        pauseTimerBtn.disabled = true;
    }
}

// Воспроизведение звука (заглушка)
function playSound() {
    // Здесь может быть код для воспроизведения звука
    console.log('Звук: упражнение завершено!');
}

// Завершение тренировки
function completeWorkout() {
    workoutInProgress = false;
    
    // Обновляем статистику
    const workoutTime = calculateWorkoutTime();
    userStats.totalWorkouts++;
    userStats.totalMinutes += Math.ceil(workoutTime / 60);
    userStats.workoutStreak++;
    
    // Обновляем активность на текущий день недели
    const today = new Date().getDay();
    userStats.weeklyActivity[today] += 10; // Увеличиваем на 10%
    if (userStats.weeklyActivity[today] > 100) {
        userStats.weeklyActivity[today] = 100;
    }
    
    // Сохраняем данные
    saveUserStats();
    updateStatsDisplay();
    
    // Закрываем модальное окно с небольшой задержкой
    setTimeout(() => {
        closeModal();
        // Показываем уведомление об успешной тренировке
        alert('Поздравляем! Тренировка завершена!');
    }, 1000);
}

// Расчет общего времени тренировки
function calculateWorkoutTime() {
    let totalTime = 0;
    workoutExercises[currentWorkout].forEach(exercise => {
        totalTime += exercise.duration;
    });
    return totalTime;
}

// Закрытие модального окна
function closeModal() {
    modal.style.display = 'none';
    if (timerRunning) {
        clearInterval(currentTimer);
        timerRunning = false;
    }
}

// Обработчики событий
startTimerBtn.addEventListener('click', startTimer);
pauseTimerBtn.addEventListener('click', pauseTimer);
closeBtn.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите прервать тренировку?')) {
        closeModal();
    }
});

// Закрытие модального окна при клике вне содержимого
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        if (confirm('Вы уверены, что хотите прервать тренировку?')) {
            closeModal();
        }
    }
});

// Обработка нажатий клавиш
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        if (confirm('Вы уверены, что хотите прервать тренировку?')) {
            closeModal();
        }
    }
});

// Эффект анимации при прокрутке для секций
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.8) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Инициализация стилей для анимации прокрутки
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        if (section.id !== 'home') { // Не применяем к главной секции
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
    });
    
    // Вызываем событие скролла для инициализации видимых секций
    window.dispatchEvent(new Event('scroll'));
}

// Запуск инициализации анимаций
initScrollAnimations();
