import "./style.css";
import Todo from "./Todo.js";
import Project from "./Project.js";
import UI from "./ui.js";

const projectsContainer = document.getElementById("projects-container");
const todosContainer = document.getElementById("todos-container");
const newProjectBtn = document.getElementById("new-project-btn");
const ui = new UI(projectsContainer, todosContainer);

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