import {FETCH_ACCESS, UPDATE_USER} from "../actions/types";
import {FETCH_USER_INFO} from "../actions/types";

/**
 * State
 * @type {{password: {}, user_info: {}, email: {}}}
 */
const initialState = {
    email: {},
    password:{},
    user_info:{}
};
/**
 * Redux state change
 * @param state
 * @param action
 * @returns {{password: *, user_info: {}, email: ({}|boolean|string|{})}|{password: {}, user_info: {}, email: {}}|{password: {}, user_info: ({}|Validator<NonNullable<Object>>|{}), email: {}}}
 */
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
        case UPDATE_USER:
            return state;
        default:
            return state;
    }
}
