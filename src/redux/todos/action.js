import { ADDED_TODO,DELETED_TODO,TOGGLED_TODO,COLORSELECTED_TODOS,ALLCOMPLETED_TODOS,CLEARCOMPLETED_TODOS } from "./actionTypes";

export const addedTodo = (text) => ({
    return: {
        type: ADDED_TODO,
        payload: text
    }
});

export const deletedTodo = (id) => ({
    return: {
        type: DELETED_TODO,
        payload: id
    }
});
 export const toggledTodo = (id) => ({
    return: {
        type: TOGGLED_TODO,
        payload: id
    }
});
export const colorSelectedTodos = (id,color) => ({
    return: {
        type: COLORSELECTED_TODOS,
        payload: {color,id}
    }
});
export const allCompletedTodos = () => ({
    return: {
        type: ALLCOMPLETED_TODOS
    }
});
export const clearCompletedTodos = () => ({
    return: {
        type: CLEARCOMPLETED_TODOS
    }
});