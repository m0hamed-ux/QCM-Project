// Sample data for demonstration (you can remove this when you have real data)
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

// Get current user data from localStorage
function getCurrentUserData() {
    const username = localStorage.getItem('username') || 'Toi';
    const points = parseInt(localStorage.getItem('lastQuizPoints')) || 0;
    let jsScore = localStorage.getItem('jsScore') ? parseFloat(localStorage.getItem('jsScore')) : 0;
    let htmlScore = localStorage.getItem('htmlScore') ? parseFloat(localStorage.getItem('htmlScore')) : 0;
    let cssScore = localStorage.getItem('cssScore') ? parseFloat(localStorage.getItem('cssScore')) : 0;
    let reactScore = localStorage.getItem('reactScore') ? parseFloat(localStorage.getItem('reactScore')) : 0;
    let bootstrapScore = localStorage.getItem('bootstrapScore') ? parseFloat(localStorage.getItem('bootstrapScore')) : 0;
    let score = (jsScore + htmlScore + cssScore + reactScore + bootstrapScore) / 5;
    const time = localStorage.getItem('fullTime') || "000";
    const lastQuiz = localStorage.getItem('lastQuiz') || new Date().toISOString().split('T')[0];
    const avatar = localStorage.getItem('avatar') || "https://i.pravatar.cc/150?img=11";

    if (username) {
        return {
            username,
            points,
            score,
            time,
            lastQuiz,
            avatar
        };
    }
    return null;
}

function initializeLeaderboard() {
    const hasCompletedQuiz = localStorage.getItem('lastQuizPoints') !== null;
    const noQuizMessage = document.getElementById('no-quiz-message');
    const leaderboardContent = document.getElementById('leaderboard-content');

    if (!hasCompletedQuiz) {
        noQuizMessage.classList.remove('hidden');
        leaderboardContent.classList.add('hidden');
        return;
    }

    noQuizMessage.classList.add('hidden');
    leaderboardContent.classList.remove('hidden');

    let users = [...sampleUsers];
    
    const currentUser = getCurrentUserData();
    if (currentUser) {
        const existingUserIndex = users.findIndex(user => user.username === currentUser.username);
        
        if (existingUserIndex !== -1) {
            users[existingUserIndex] = currentUser;
        } else {
            users.push(currentUser);
        }
    }

    users.sort((a, b) => b.points - a.points);

    displayTopPlayers([users[1], users[0], users[2]]);

    displayLeaderboard(users);
}

// Display top 3 players
function displayTopPlayers(topPlayers) {
    const topPlayersContainer = document.getElementById('top-players');
    const positions = ['2ème Place', '1ère Place', '3ème Place'];
    const colors = ['from-slate-200 to-slate-100', 'from-yellow-200 to-amber-100', 'from-amber-300 to-amber-200'];

    topPlayersContainer.innerHTML = topPlayers.map((player, index) => `
        <div class="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg transform transition-all duration-300 hover:scale-105 ${index === 1 ? 'md:-mt-4 md:mb-4 scale-105 md:scale-110 z-10' : ''}">
            <div class="bg-gradient-to-b ${colors[index]} p-3 flex justify-center items-center">
                <div class="flex items-center space-x-2">
                    <img src="${index == 1 ? 'https://em-content.zobj.net/source/telegram/386/1st-place-medal_1f947.webp': index == 2? 'https://em-content.zobj.net/source/telegram/386/3rd-place-medal_1f949.webp':'https://em-content.zobj.net/source/telegram/386/2nd-place-medal_1f948.webp'}" class="w-10 mx-auto" alt="">
                    <span class="font-bold ${index === 1 ? 'text-amber-700' : 'text-gray-700'}">${positions[index]}</span>
                </div>
            </div>
            <div class="p-4 flex flex-col items-center text-center">
                <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200 mb-3">
                    <img src="${player.avatar}" alt="${player.username}" class="w-full h-full object-cover">
                </div>
                <h3 class="font-bold text-lg mb-1 text-gray-800">${player.username}</h3>
                <div class="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">${player.points} pts</div>
                <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                    <div>Score :</div>
                    <div class="font-semibold text-gray-800">${player.score}/10</div>
                    <div>Temps :</div>
                    <div class="font-semibold text-gray-800">${Math.floor(player.time / 60)}:${(player.time % 60).toString().padStart(2, '0')}</div>
                    <div>Dernier Quiz :</div>
                    <div class="font-semibold text-gray-800">${player.lastQuiz}</div>
                </div>
            </div>
        </div>
    `).join('');
}


function displayLeaderboard(users) {
    const leaderboardBody = document.getElementById('leaderboard-body');
    
    leaderboardBody.innerHTML = users.map((user, index) => `
        <tr class="relative transition-colors ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:bg-slate-100 ${(user.username == 'Toi') ? 'bg-indigo-50 text-blue-400 font-bold border-l-4 border-blue-400 hover:bg-indigo-100' : ''}">
            ${(user.username == 'Toi') ? '' : ''}
            <td class="py-4 px-4 sm:px-6 font-medium flex items-center">
                <div class="flex items-center gap-1.5">
                    <span class="${index < 3 ? 'font-bold text-amber-700' : ''}">#${index + 1}</span>
                    ${index < 3 ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal text-amber-700"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg>` : ''}
                </div>
            </td>
            <td class="py-4 px-2 sm:px-6">
                <div class="flex items-center">
                    <div class="h-9 w-9 rounded-full overflow-hidden mr-3">
                        <img src="${user.avatar}" alt="${user.username}" class="h-full w-full object-cover">
                    </div>
                    <div>
                        <div class="font-medium">${user.username}</div>
                        <div class="text-xs mt-0.5 sm:hidden text-slate-500">${user.score}/10</div>
                    </div>
                </div>
            </td>
            <td class="py-4 px-2 sm:px-6 text-right">
                <div class="font-bold">${user.points}</div>
                <div class="w-full rounded-full h-1.5 mt-1 hidden sm:block bg-slate-200">
                    <div class="h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" style="width: ${(user.points / users[0].points * 100)}%;"></div>
                </div>
            </td>
            <td class="py-4 px-2 sm:px-6 text-right md:table-cell">${user.score}/10</td>
            <td class="py-4 px-2 sm:px-6 text-right lg:table-cell">${Math.floor(user.time / 60)}:${(user.time % 60).toString().padStart(2, '0')}</td>
            <td class="py-4 px-2 sm:px-6 text-right lg:table-cell text-slate-600">${user.lastQuiz}</td>
        </tr>
    `).join('');
}

document.addEventListener('DOMContentLoaded', initializeLeaderboard);
