export default class UI {
    constructor(projectsContainer, todosContainer) {
        this.projectsContainer = projectsContainer;
        this.todosContainer = todosContainer;
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
            todoDiv.classList.add("todo");

            const todoTitle = document.createElement("h3");
            todoTitle.textContent = todo.title;

            const todoDesc = document.createElement("p");
            todoDesc.textContent = todo.description;

            const todoNotes = document.createElement("ul");
            todo.notes.forEach(note => {
                const li = document.createElement("li");
                li.textContent = note;
                todoNotes.appendChild(li);
            });

            todoDiv.append(todoTitle, todoDesc, todoNotes);
            this.todosContainer.appendChild(todoDiv);
        });
    }
}