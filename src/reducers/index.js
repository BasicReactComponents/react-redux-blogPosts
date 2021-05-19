import { combineReducers } from "redux";

import postReducer from "./postReducer";
import userReducer from "./usersReducer";

//the names in this represent the state you can use in react
export default combineReducers({
    posts: postReducer,
    users: userReducer
});