import {combineReducers} from "redux";
import board from "./board";

export default combineReducers({
    board,
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
});
