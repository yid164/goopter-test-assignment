import  {FETCH_ACCESS} from "../actions/types";

const initialState = {
    email: {},
    password:{},
    token: {},
    key: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_ACCESS:
            return {
                ...state,
                email:action.email,
                password: action.password,
                key: action.key,
                token: action.token
            };
        default:
            return state;
    }
}
