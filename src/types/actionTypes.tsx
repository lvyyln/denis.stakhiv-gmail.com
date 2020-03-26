export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';

export type TodoItem = {
    id : number,
    title : string
}

export type AddTodoItemAction = {
    type : typeof ADD_TODO_ITEM,
    payload : TodoItem
}

export type DeleteTodoItemAction = {
    type : typeof DELETE_TODO_ITEM,
    payload : number
}

export type TodoItemsActionType = AddTodoItemAction | DeleteTodoItemAction