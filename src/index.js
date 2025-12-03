import "./style.css";
import Todo from "./Todo.js";
import Project from "./Project.js";
import UI from "./ui.js";

const projectsContainer = document.getElementById("projects-container");
const todosContainer = document.getElementById("todos-container");
const ui = new UI(projectsContainer, todosContainer);

const defaultProject = new Project("Default");

const todo1 = new Todo("Buy groceries", "Milk, eggs, bread", "2025-12-10", "medium");
defaultProject.addTodo(todo1);

const projects = [defaultProject];

ui.renderProjects(projects);