import { Component, useState } from "@odoo/owl";
import { TodoInput } from "./todo_input";
import { TodoList } from "./todo_list";

export class Todo extends Component {
    static template = "owl_todo.Todo";
    static components = { TodoInput, TodoList};
    
}
