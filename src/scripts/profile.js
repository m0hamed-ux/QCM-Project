function getUserData() {
    const username = localStorage.getItem('username') || 'Utilisateur';
    const points = parseInt(localStorage.getItem('lastQuizPoints')) || 0;
    const jsScore = localStorage.getItem('jsScore') ? parseFloat(localStorage.getItem('jsScore')) : 0;
    const htmlScore = localStorage.getItem('htmlScore') ? parseFloat(localStorage.getItem('htmlScore')) : 0;
    const cssScore = localStorage.getItem('cssScore') ? parseFloat(localStorage.getItem('cssScore')) : 0;
    const reactScore = localStorage.getItem('reactScore') ? parseFloat(localStorage.getItem('reactScore')) : 0;
    const bootstrapScore = localStorage.getItem('bootstrapScore') ? parseFloat(localStorage.getItem('bootstrapScore')) : 0;
    const avatar = localStorage.getItem('avatar') || "https://i.pravatar.cc/150?img=11";
    const lastQuiz = localStorage.getItem('lastQuiz') || new Date().toISOString().split('T')[0];
    const fullTime = parseInt(localStorage.getItem('fullTime')) || 0;

    return {
        username,
        points,
        jsScore,
        htmlScore,
        cssScore,
        reactScore,
        bootstrapScore,
        avatar,
        lastQuiz,
        fullTime
    };
}

function calculateOverallProgress(userData) {
    const scores = [
        userData.jsScore,
        userData.htmlScore,
        userData.cssScore,
        userData.reactScore,
        userData.bootstrapScore
    ];
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    return (totalScore / 50) * 100;
}

function calculateStats(userData) {
    const totalScore = (userData.jsScore + userData.htmlScore + userData.cssScore + userData.reactScore + userData.bootstrapScore)/5;
    const totalTime = Math.floor(userData.fullTime / 60) + ':' + (userData.fullTime % 60).toString().padStart(2, '0');
    const rank = getUserRank();

    return {
        totalScore: totalScore.toFixed(1),
        rank,
        totalTime,
        points: userData.points
    };
}

function getUserRank() {
    const points = parseInt(localStorage.getItem('lastQuizPoints')) || 0;
    const currentUser = {
        username: localStorage.getItem('username') || 'Toi',
        points: points,
        avatar: localStorage.getItem('avatar') || "https://i.pravatar.cc/150?img=11"
    };

    const allUsers = [...sampleUsers, currentUser];
    const sortedUsers = allUsers.sort((a, b) => b.points - a.points);
    const userRank = sortedUsers.findIndex(user => user.username === currentUser.username) + 1; 
    return userRank;
}

const sampleUsers = [
    { username: "Ahmed", points: 8100, score: "8", time: "230", lastQuiz: "2025-04-15", avatar: "https://i.pravatar.cc/150?img=1" },
    { username: "Fatima", points: 9200, score: "9", time: "215", lastQuiz: "2025-04-14", avatar: "https://i.pravatar.cc/150?img=5" },
    { username: "Karim", points: 7800, score: "7", time: "245", lastQuiz: "2025-04-13", avatar: "https://i.pravatar.cc/150?img=3" },
    { username: "Laila", points: 9500, score: "9", time: "200", lastQuiz: "2025-04-16", avatar: "https://i.pravatar.cc/150?img=9" },
    { username: "Youssef", points: 8800, score: "8.4", time: "220", lastQuiz: "2025-04-12", avatar: "https://i.pravatar.cc/150?img=8" },
    { username: "Amine", points: 9100, score: "8.8", time: "225", lastQuiz: "2025-04-17", avatar: "https://i.pravatar.cc/150?img=12" },
    { username: "Mehdi", points: 8700, score: "8.2", time: "235", lastQuiz: "2025-04-18", avatar: "https://i.pravatar.cc/150?img=13" },
    { username: "Sofiane", points: 8900, score: "8.6", time: "228", lastQuiz: "2025-04-19", avatar: "https://i.pravatar.cc/150?img=14" },
    { username: "Omar", points: 8600, score: "8.1", time: "240", lastQuiz: "2025-04-20", avatar: "https://i.pravatar.cc/150?img=15" },
    { username: "Nadia", points: 9000, score: "8.7", time: "230", lastQuiz: "2025-04-21", avatar: "https://i.pravatar.cc/150?img=16" }
];

const achievements = [
    {
        id: 'first-quiz',
        title: 'Premier Quiz',
        description: 'Compléter votre premier quiz',
        icon: 'https://em-content.zobj.net/source/telegram/386/crown_1f451.webp',
        condition: (userData) => userData.points > 0
    },
    {
        id: 'js-master',
        title: 'Maître JavaScript',
        description: 'Obtenir un score de 9+ en JavaScript',
        icon: 'https://em-content.zobj.net/source/telegram/386/video-game_1f3ae.webp',
        condition: (userData) => userData.jsScore >= 9
    },
    {
        id: 'html-master',
        title: 'Maître HTML',
        description: 'Obtenir un score de 9+ en HTML',
        icon: 'https://em-content.zobj.net/source/telegram/386/crystal-ball_1f52e.webp',
        condition: (userData) => userData.htmlScore >= 9
    },
    {
        id: 'css-master',
        title: 'Maître CSS',
        description: 'Obtenir un score de 9+ en CSS',
        icon: 'https://em-content.zobj.net/source/telegram/386/artist-palette_1f3a8.webp',
        condition: (userData) => userData.cssScore >= 9
    },
    {
        id: 'react-master',
        title: 'Maître React',
        description: 'Obtenir un score de 9+ en React',
        icon: 'https://em-content.zobj.net/source/telegram/386/rocket_1f680.webp',
        condition: (userData) => userData.reactScore >= 9
    },
    {
        id: 'bootstrap-master',
        title: 'Maître Bootstrap',
        description: 'Obtenir un score de 9+ en Bootstrap',
        icon: 'https://em-content.zobj.net/source/telegram/386/magic-wand_1fa84.webp',
        condition: (userData) => userData.bootstrapScore >= 9
    },
    {
        id: 'speed-demon',
        title: 'Démon de la Vitesse',
        description: 'Compléter le quiz en moins de 5 minutes',
        icon: 'https://em-content.zobj.net/source/telegram/386/high-voltage_26a1.webp',
        condition: (userData) => userData.fullTime < 300
    },
    {
        id: 'perfect-score',
        title: 'Score Parfait',
        description: 'Obtenir un score de 10/10 dans n\'importe quel quiz',
        icon: 'https://em-content.zobj.net/source/telegram/386/trophy_1f3c6.webp',
        condition: (userData) => [userData.jsScore, userData.htmlScore, userData.cssScore, userData.reactScore, userData.bootstrapScore].includes(10)
    }
];

function displayAchievements(userData) {
    const container = document.getElementById('achievements-container');
    const unlockedAchievements = achievements.filter(achievement => achievement.condition(userData));

    container.innerHTML = unlockedAchievements.map(achievement => `
        <div class="bg-gray-50 rounded-lg p-4 text-center">
            <img src="${achievement.icon}" alt="${achievement.title}" class="w-16 h-16 mx-auto mb-2">
            <h3 class="font-bold text-gray-800">${achievement.title}</h3>
            <p class="text-sm text-gray-600">${achievement.description}</p>
        </div>
    `).join('');
}

function updateProgressBars(userData) {
    const skills = ['js', 'html', 'css', 'react', 'bootstrap'];
    skills.forEach(skill => {
        const score = userData[`${skill}Score`];
        const progressBar = document.getElementById(`${skill}-progress`);
        const scoreElement = document.getElementById(`${skill}-score`);
        
        if (progressBar && scoreElement) {
            progressBar.style.width = `${(score / 10) * 100}%`;
            scoreElement.textContent = `${score}/10`;
        }
    });

    
    const overallProgress = calculateOverallProgress(userData);
    const overallProgressBar = document.getElementById('overall-progress');
    const progressPercentage = document.getElementById('progress-percentage');
    
    if (overallProgressBar && progressPercentage) {
        overallProgressBar.style.width = `${overallProgress}%`;
        progressPercentage.textContent = `${overallProgress.toFixed(1)}%`;
    }
}

function hasCompletedQuiz() {
    const points = parseInt(localStorage.getItem('lastQuizPoints')) || 0;
    return points > 0;
}

function toggleQuizRequiredOverlays() {
    const hasQuiz = hasCompletedQuiz();
    const overlays = document.querySelectorAll('.quiz-required-overlay');
    const rankElement = document.getElementById('rank');
    if (rankElement) {
        rankElement.style.display = hasQuiz ? 'flex' : 'none';
    }
    overlays.forEach(overlay => {
        if (!hasQuiz) {
            overlay.classList.remove('hidden');
        } else {
            overlay.classList.add('hidden');
        }
    });
}

function initializeProfile() {
    const userData = getUserData();
    const stats = calculateStats(userData);

    
    document.getElementById('profile-username').textContent = userData.username;
    document.getElementById('profile-avatar').src = userData.avatar;
    document.getElementById('total-points').textContent = userData.points;
    document.getElementById('rank').textContent = `#${stats.rank}`;
    document.getElementById('join-date').textContent = userData.lastQuiz;

    
    document.getElementById('total-score').textContent = `${stats.totalScore}/10`;
    document.getElementById('user-rank').textContent = `#${stats.rank}`;
    document.getElementById('total-time').textContent = `${stats.totalTime}m`;
    document.getElementById('total-points').textContent = stats.points;

    updateProgressBars(userData);

    displayAchievements(userData);

    toggleQuizRequiredOverlays();
}

document.addEventListener('DOMContentLoaded', initializeProfile);
