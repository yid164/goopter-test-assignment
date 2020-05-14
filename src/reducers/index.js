import { combineReducers} from "redux";
import  loginReducer from "./loginReducer";

/**
 * Reducer function
 */
export default combineReducers({login:loginReducer})

