import "./style.css";
import Todo from "./Todo.js";
import Project from "./Project.js";
import UI from "./ui.js";

const container = document.getElementById("projects-container");
const ui = new UI(container);

const defaultProject = new Project("Default");

const todo1 = new Todo("Buy groceries", "Milk, eggs, bread", "2025-12-10", "medium");
defaultProject.addTodo(todo1);

defaultProject.todos.forEach(todo => {
    ui.renderTodo(todo, defaultProject.name);
});