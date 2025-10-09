import { Component, useState, useSubEnv } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { ControlPanel } from "@web/search/control_panel/control_panel";
import { Todo } from "./todo/todo"
import { Dashboard } from "./dashboard/dashboard"
import { TodoStore } from "./todo/todoStore";

export class ActionOwlWorkshop extends Component {
    static template = "owl_todo.ActionOwlWorkshop";
    static components = { ControlPanel, Todo, Dashboard };

    setup() {
        this.state = useState({
            currentApp: this.apps[0],
        })
        this.todoStore = useState(new TodoStore())

        useSubEnv({
            todoStore: this.todoStore,
        })
    }

    get apps() {
        return [
            {id: "todo", name: "Todo", component: Todo},
            {id: "dashboard", name: "Dashboard", component: Dashboard},
        ]
    }

    selectApp(appId) {
        const app = this.apps.find((a) => a.id === appId)
        if (app) {
            this.state.currentApp = app
        }
    }
}

registry.category("actions").add("action_owl_workshop", ActionOwlWorkshop);