 function updateWin() {
    //Emma?
    console.log('updateLose!')
}

function updateLose() {
    //Emma?
    console.log('updateLose!')
}      

function showScoreBoard() {
    leaderboard.sort((a, b) => {
        // 1. Sort by score (higher is better)
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        // 2. Tie-break by accuracy
        return b.accuracy - a.accuracy;
    });
}

export {updateLose, updateWin}