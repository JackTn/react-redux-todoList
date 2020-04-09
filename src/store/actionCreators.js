import {HANDLE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM} from './actionTypes';

export const actionHandleinputvalue = (value) => {
    return {
        type: HANDLE_INPUT_VALUE,
        value: value
    }
}

export const actionAdditem = () => {
    return {
        type: ADD_ITEM
    }
}

export const actionDeleteitem = (i) => {
    return {
        type: DELETE_ITEM,
        index: i
    }
}