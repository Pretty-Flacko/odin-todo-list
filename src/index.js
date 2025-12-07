import "./style.css";
import Todo from "./Todo.js";
import Project from "./Project.js";
import UI from "./ui.js";

const projectsContainer = document.getElementById("projects-container");
const todosContainer = document.getElementById("todos-container");
const newProjectBtn = document.getElementById("new-project-btn");
const dialog = document.querySelector("dialog");
const ui = new UI(projectsContainer, todosContainer, dialog);

const projects = [];
const defaultProject = new Project("Default");
projects.push(defaultProject);

const todo1 = new Todo("Buy groceries", "Milk, eggs, bread", "2025-12-10", "medium");
defaultProject.addTodo(todo1);

ui.renderProjects(projects);

newProjectBtn.addEventListener("click", () => {
    const name = prompt("Enter project name:", "New Project");
    if (name && name.trim() !== "") {
        const newProject = new Project(name.trim());
        projects.push(newProject);
        ui.renderProjects(projects);
    }
});

document.getElementById("todo-cancel").addEventListener("click", () => {
    dialog.close();
});
document.getElementById("todo-submit").addEventListener("click", (e) => {
    e.preventDefault();

    const title = document.getElementById("todo-title").value.trim();
    const description = document.getElementById("todo-description").value.trim();
    const dueDate = document.getElementById("todo-dueDate").value.trim();
    const priority = document.getElementById("todo-priority").value;

    if (!title) {
        alert("Title is required!");
        return;
    }

    if (ui.editingTodo) {
        const t = ui.editingTodo.todo;

        t.title = title;
        t.description = description;
        t.dueDate = dueDate;
        t.priority = priority;

        ui.editingTodo = null;
    } else {
        const newTodo = new Todo(title, description, dueDate, priority);
        projects[ui.selectedProject].addTodo(newTodo);
    }
    
    ui.renderTodos(projects[ui.selectedProject]);
    dialog.close();
});