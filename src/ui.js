export default class UI {
    constructor(projectsContainer, todosContainer, dialog) {
        this.projectsContainer = projectsContainer;
        this.todosContainer = todosContainer;
        this.dialog = dialog;
        this.selectedProject = null;
    }

    renderProjects(projects) {
        this.projectsContainer.innerHTML = "";

        projects.forEach((project, index) => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project");
            projectDiv.textContent = project.name;
            projectDiv.addEventListener("click", () => {
                this.selectProject(index, projects);
            });
            this.projectsContainer.appendChild(projectDiv);
        });
    }

    selectProject(index, projects) {
        this.selectedProject = index;
        this.renderTodos(projects[index]);
    }

    renderTodos(project) {
        this.todosContainer.innerHTML = "";

        const title = document.createElement("h2");
        title.textContent = project.name;
        this.todosContainer.appendChild(title);

        project.todos.forEach(todo => {
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo", `priority-${todo.priority}`);

            // Always visible section
            const todoHeader = document.createElement("div");
            todoHeader.classList.add("todo-header");

            const todoTitle = document.createElement("h3");
            todoTitle.textContent = todo.title;

            const todoDue = document.createElement("p");
            todoDue.textContent = todo.dueDate;

            todoHeader.append(todoTitle, todoDue);
            todoDiv.appendChild(todoHeader);

            // Hidden details
            const todoDetails = document.createElement("div");
            todoDetails.classList.add("todo-details");
            todoDetails.style.display = "none";

            const todoDesc = document.createElement("p");
            todoDesc.textContent = todo.description;

            const todoNotes = document.createElement("ul");
            todo.notes.forEach(note => {
                const li = document.createElement("li");
                li.textContent = note;
                todoNotes.appendChild(li);
            });

            todoDetails.append(todoDesc, todoNotes);
            todoDiv.appendChild(todoDetails);

            todoHeader.addEventListener("click", () => {
                todoDetails.style.display = todoDetails.style.display === "none" ? "block" : "none";
            });

            this.todosContainer.appendChild(todoDiv);
        });

        const newTodoBtn = document.createElement("button");
        newTodoBtn.textContent = "Add Todo";
        newTodoBtn.addEventListener("click", () => this.dialog.showModal());
        this.todosContainer.appendChild(newTodoBtn);
    }
}