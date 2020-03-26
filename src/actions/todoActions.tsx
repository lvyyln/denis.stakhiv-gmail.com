import {ADD_TODO_ITEM, DELETE_TODO_ITEM, TodoItem, TodoItemsActionType} from "../types/actionTypes";


export function addTodoItem(todoItem : TodoItem) : TodoItemsActionType {
    return {
        type : ADD_TODO_ITEM,
        payload : todoItem
    }
}


export function deleteTodoItem(todoItemId: number) : TodoItemsActionType {
    return {
        type : DELETE_TODO_ITEM,
        payload : todoItemId
    }
}