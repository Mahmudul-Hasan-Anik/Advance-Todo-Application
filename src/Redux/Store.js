import todoReducers from './Todos/todoReducer';
import { createStore } from 'redux'


const Store = createStore(todoReducers)
export default Store