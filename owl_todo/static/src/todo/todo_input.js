import { Component, useState, useRef, onMounted } from "@odoo/owl";

export class TodoInput extends Component {
    static template = "owl_todo.TodoInput";
    static components = {};

    setup() {
        this.state = useState({ value: "" })
        this.inputRef = useRef("inputRef");
        this.store = useState(this.env.todoStore)

        onMounted(() => {
            this.inputRef.el.focus();
        })

    }

    onClick() {
        this.store.addTodo(this.state.value);
        this.state.value = "";
    }

    onKeydown(ev) {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            this.onClick()
        }
    }

}
