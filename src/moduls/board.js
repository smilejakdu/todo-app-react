import {createAction, handleActions} from 'redux-actions';

const ADD_BOARD = "post/ADD_BOARD";
const DELETE_BOARD = 'post/DELETE_POST';
const MODIFY_BOARD = "post/MODIFY_POST";

export const addBoard = createAction(ADD_BOARD, (data) => data);
export const deleteBoard = createAction(DELETE_BOARD, (id) => id);
export const modifyBoard = createAction(MODIFY_BOARD, (data) => data);


export const initialState = {
    username: '',
    usertoken: false,
    board: [{
        title: '',
        content: '',
    }]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOARD: {
            let {data, username} = action.payload
            console.log(username, data);
            return {
                ...state,
                usertoken: true,
                username: username,
                board: state + [data],
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
};