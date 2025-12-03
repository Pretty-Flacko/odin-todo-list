export default class Todo {
    constructor(title, description, dueDate, priority = "medium", notes = []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

    addNote(note) {
        this.notes.push(note);
    }

    removeNote(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes.splice(index, 1);
        }
    }

    setPriority(newPriority) {
        const validPriorities = ["low", "medium", "high"];
        if (validPriorities.includes(newPriority)) {
            this.priority = newPriority;
        } else {
            console.error("Invalid priority");
        }
    }
}