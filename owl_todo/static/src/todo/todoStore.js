export class TodoStore {
    constructor() {
        this.todos = [];
    }

    addTodo(title) {
        this.todos.push({ id: window.crypto.randomUUID(), title, isCompleted: false})
    }

    toggleTodo(todoId) {
        const todo = this.todos.find((t) => t.id === todoId);
        if (todo) {
            todo.isCompleted = !todo.isCompleted;
        }
    }

    deleteTodo(todoId) {
        const index = this.todos.findIndex((t) => t.id === todoId)
        this.todos.splice(index, 1);
    }
}