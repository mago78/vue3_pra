import { InjectionKey, ref } from "vue"

type Todo = {
    id: number,
    title: string,
}

const defoTodos = [{id: 0, title: 'first'}, {id: 1, title: 'second'}]

export const todos = ref<Todo[]>(defoTodos)
export const addTodo = (title: string) => {
    const todo: Todo = {
        id: Math.random(),
        title,
    }
    todos.value.push(todo)
}

export const newKey: InjectionKey<Todo[]> = Symbol('newnew')