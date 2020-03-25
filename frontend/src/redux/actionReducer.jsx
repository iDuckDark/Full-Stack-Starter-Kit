const defaultState = {
    users: "heree",
};

export default function actionReducer(state = defaultState, action) {
    const newState = { ...state };
    switch (action.type) {
        case "getUsersSuccess": {
            newState.users = action.payload;
            return newState;
        }
        default:
            return newState;
    }
}
