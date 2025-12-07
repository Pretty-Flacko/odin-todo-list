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

        project.todos.forEach((todo, index) => {
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo", `priority-${todo.priority}`);

            // Always visible section
            const todoHeader = document.createElement("div");
            todoHeader.classList.add("todo-header");

            const todoTitle = document.createElement("h3");
            todoTitle.textContent = todo.title;

            const todoDue = document.createElement("p");
            todoDue.textContent = todo.dueDate;

            const todoComplete = document.createElement("input");
            todoComplete.type = "checkbox";
            todoComplete.checked = todo.completed;
            todoComplete.addEventListener("change", () => {
                todo.completed = todoComplete.checked;
                this.renderTodos(project);
            });

            todoHeader.append(todoTitle, todoDue, todoComplete);
            todoDiv.appendChild(todoHeader);

            // Hidden details
            const todoDetails = document.createElement("div");
            todoDetails.classList.add("todo-details");
            todoDetails.style.display = "none";

            const todoDesc = document.createElement("p");
            todoDesc.textContent = todo.description;

            const todoChecklist = document.createElement("ul");
            todo.checklist.forEach(item => {
                const li = document.createElement("li");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = item.completed;
                checkbox.addEventListener("change", () => {
                    item.completed = checkbox.checked;
                });
                
                const span = document.createElement("span");
                span.textContent = item.text;
                
                li.append(checkbox, span);
                todoChecklist.appendChild(li);
            });

            const todoEditBtn = document.createElement("button");
            todoEditBtn.textContent = "Edit Todo";

            todoEditBtn.addEventListener("click", () => {
                document.getElementById("todo-title").value = todo.title;
                document.getElementById("todo-description").value = todo.description;
                document.getElementById("todo-dueDate").value = todo.dueDate;
                document.getElementById("todo-priority").value = todo.priority;

                this.editingTodo = { project, todo };
                this.dialog.showModal();
            });

            const todoRemoveBtn = document.createElement("button");
            todoRemoveBtn.textContent = "Remove Todo";

            todoRemoveBtn.addEventListener("click", () => {
                project.removeTodo(index);
                this.renderTodos(project);
            });

            todoDetails.append(todoDesc, todoChecklist, todoEditBtn, todoRemoveBtn);
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