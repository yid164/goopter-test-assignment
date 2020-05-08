const defaultState = {
    auth: false,
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    nickname: ''
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'change_username':
            newState.username = action.value;
            return newState;
        case 'change_password':
            newState.password = action.value;
            return newState;
        case 'change_last_name':
            newState.last_name = action.value;
            return newState;
        case 'login':
            newState.auth = true;
            return newState;
        case 'change_first_name':
            newState.first_name = action.value;
            return newState;
        case 'change_nickname':
            newState.nickname = action.value;
            return newState;
        case 'update':
            return newState;
        case 'refresh':
            return newState;
        default:
            return state;
    }
    // if (action.type === 'change_username') {
    //     newState.username = action.value;
    //     return newState;
    // } else if (action.type === 'change_password') {
    //     newState.password = action.value;
    //     return newState;
    // } else if(action.type === 'change_last_name'){
    //     newState.last_name = action.value;
    //     return newState;
    // } else if (action.type === 'login') {
    //     // TODO: axios here, check the result
    //     newState.auth = true;
    //     return newState;
    // } else if (action.type === 'change_first_name') {
    //     newState.first_name = action.value;
    //     return newState;
    // } else if (action.type === 'change_nickname') {
    //     newState.nickname = action.value;
    //     return newState;
    // } else if (action.type === 'update') {
    //     // TODO: axios here, call post api to update
    //     return newState;
    // } else if (action.type === 'refresh') {
    //     // TODO: axios here, use api call to refresh the firstname/nickname
    //     return newState;
    // }
    // return state;
}
