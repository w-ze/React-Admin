function countReducer(state = { count: 5 }, action: { type: string, data?: {} }) {
    switch (action.type) {
        case "ADD":
            state.count = state.count + 1;
            return Object.assign({}, state);
        case "SUB":
            state.count = --state.count;
            return Object.assign({}, state);
        default:
            return state
    }
}

export default countReducer