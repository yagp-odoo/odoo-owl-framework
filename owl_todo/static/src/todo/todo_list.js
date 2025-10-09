import { Component, useState } from "@odoo/owl";

export class TodoList extends Component {
    static template = "owl_todo.TodoList";
    static components = {};
    // static props = {
    //     todos: {
    //         type: Array,
    //         element: {
    //             type: Object,
    //             shape: {
    //                 id: String,
    //                 title: String,
    //                 isCompleted: Boolean,
    //             }
    //         }
    //     },
    //     toggleTodo: Function,
    //     deleteTodo: Function,
    // };

    setup() {
        this.store = useState(this.env.todoStore)
    }

    onCheckboxClicked(todoId) {
        this.store.toggleTodo(todoId);
    }

    onClickDeleteBtn(todoId) {
        this.store.deleteTodo(todoId);
    }
}
