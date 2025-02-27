import { initialState } from "./initialState"
import { ADDED_TODO,DELETED_TODO,TOGGLED_TODO,COLORSELECTED_TODOS,ALLCOMPLETED_TODOS,CLEARCOMPLETED_TODOS } from "./actionTypes";

const nextTodoId = todos => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);  
    return maxId + 1;
}
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADDED_TODO:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                }
            ]
            case TOGGLED_TODO:
                return state.map((todo)=>{
                    if(todo.id !==action.payload.id){
                        return todo;
                    }
                   return {
                       ...todo,
                       completed:!todo.completed
                   }
                })
            case COLORSELECTED_TODOS:
                const {color,id} = action.payload;
                return state.map((todo)=>{
                    if(todo.id !==id){
                        return todo;
                    }
                    return {
                        ...todo,
                        color
                    }
                })
             case DELETED_TODO:
                return state.filter((todo)=>todo.id !==action.payload.id)
            case ALLCOMPLETED_TODOS:
                return state.map((todo)=>{
                    return {
                        ...todo,
                        completed:true
                    }
                })
            case CLEARCOMPLETED_TODOS:
                return state.filter((todo)=>!todo.completed)
              
        default:
            return state;
    }
}

export default reducer;