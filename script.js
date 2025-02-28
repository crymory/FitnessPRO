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
const currentExerc
