import  {FETCH_ACCESS} from "../actions/types";
import {FETCH_USER_INFO} from "../actions/types";

const initialState = {
    email: {},
    password:{},
    user_info:[]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_ACCESS:
            return {
                ...state,
                email:action.email,
                password: action.password,

            };
        case FETCH_USER_INFO:
            return{
                ...state,
                user_info: action.user_info

            };
        default:
            return state;
    }
}
