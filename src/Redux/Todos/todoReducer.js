import { TODO_ADDED,CLEAR_COMPLETED,COLORSELECTED,COMPLETED,TODO_DELETE,TOGGLED } from "./actionType";
import { InitialState } from "./InitialState";

const genaretID = (todos) =>{
    const maxID = todos.reduce((prev,curr)=> Math.max(curr.id, prev), 0)
    return maxID + 1
}

const todoReducers = (state = InitialState, action) => {
    switch(action.type){
        case TODO_ADDED:
            return [
                ...state,
                {
                    id: genaretID(state) 
                }
            ]
        case TOGGLED:
            return state.map((todo)=>{
                if(todo.id !== action.payload){
                    return todo
                }
                return {
                    ...todo,
                    complete: !todo.complete
                }
            })

        case COLORSELECTED:
            const {todoId, color} = action.payload
            return state.map((todo)=>{
                if(todo.id !== todoId){
                    return todo
                }
                return{
                    ...todo,
                    color: color
                }
            }) 

        case TODO_DELETE:
            return state.filter((todo) => todo.id !== action.payload) 

        case COMPLETED:
            return state.map((todo)=>{
                return{
                    ...todo,
                    complete: true
                }
            })

        case CLEAR_COMPLETED:
            return state.filter((todo) => !todo.complete)

    }
}


export default todoReducers