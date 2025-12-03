import Todo from "./Todo.js";

export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        if (todo instanceof Todo) {
            this.todos.push(todo);
        } else {
            console.error("Only Todo instances can be added");
        }
    }

    removeTodo(index) {
        if (index >= 0 && index < this.todos.length) {
            this.todos.splice(index, 1);
        }
    }

    getTodo(index) {
        return this.todos[index];
    }
}