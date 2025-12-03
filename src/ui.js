export default class UI {
    constructor(container) {
        this.container = container;
    }

    renderTodo(todo, projectName) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        todoDiv.dataset.project = projectName;

        const title = document.createElement("h3");
        title.textContent = todo.title;
        const dueDate = document.createElement("span");
        dueDate.textContent = todo.dueDate;

        const priority = document.createElement("span");
        priority.textContent = todo.priority;

        const completeBtn = document.createElement("button");
        completeBtn.textContent = todo.completed ? "Undo" : "Complete";
        completeBtn.addEventListener("click", () => {
            todo.toggleComplete();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            todoDiv.remove();
        });
    }
}