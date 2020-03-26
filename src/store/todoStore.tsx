import {createStore} from 'redux'
import {todoReducer} from "../reducers/todoReducer";

export const todoStore = createStore(todoReducer);

