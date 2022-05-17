import create from 'zustand'
import { ITodo } from '../models/todo'

interface ITodoState {
    todos: ITodo[];
    adicionaTODO: (todo: ITodo) => void;
    removeTODO: (todo: ITodo) => void;
}

const useTODOState = create<ITodoState>(set => ({
    todos: [],
    adicionaTODO: (todo: ITodo) => set(state => ({ todos: [...state.todos, todo] })),
    removeTODO: (todo: ITodo) => set(state => ({ todos: state.todos.filter((item: ITodo) => item.id !== todo.id) }))
}))

export default useTODOState;