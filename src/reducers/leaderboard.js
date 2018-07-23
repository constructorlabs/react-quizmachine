function leaderboard(state = {
    1: {
        player: "Bear",
        points: "60"
    },
    2: {
        player: "Wolf",
        points: "20"
    },
    3: {
        player: "Ant",
        points: "30"
    },
    4: {
        player: "Bob",
        points: "300"
    },
    5: {
        player: "Core",
        points: "0"
    }
}, action) {
    switch (action.type) {
        case 'RECEIVE_LEADERBOARD':
            return action.leaderboard
        default:
            return state
    }
}

export default leaderboard;