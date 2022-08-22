import { TODO_ADDED,CLEAR_COMPLETED,COLORSELECTED,COMPLETED,TODO_DELETE,TOGGLED } from "./actionType";

export const addTodo = (todoText)=>{
    return{
        type: TODO_ADDED,
        payload: todoText
    }
}

export const toggle = (todoId)=>{
    return{
        type: TOGGLED,
        payload: todoId
    }
}

export const colorSelected = (todoId, color)=>{
    return{
        type: COLORSELECTED,
        payload: {
            todoId: todoId,
            color: color
        }
    }
}

export const deleteTodo = (id) =>{
    return{
        type: TODO_DELETE,
        payload: id
    }
}

export const complete = ()=>{
    return{
        type: COMPLETED
    }
}

export const clearComplete = ()=>{
    return{
        type: CLEAR_COMPLETED
    }
}