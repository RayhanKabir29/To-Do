import {STATUSCHANGED_TODO,COLORCHANGED_TODO} from './actionTypes';

export const statusChanged = (status) => ({
    return: {
        type: STATUSCHANGED_TODO,
        payload: status
    }
});
export const colorChanged = (color,changeType) => ({
    return: {
        type: COLORCHANGED_TODO,
        payload: {
            color,
            changeType
        }
    }
});