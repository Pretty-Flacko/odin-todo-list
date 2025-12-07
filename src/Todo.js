export default class Todo {
    constructor(title, description, dueDate, priority = "medium", checklist = []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

    addChecklistItem(checklistItem) {
        this.checklist.push({ text: checklistItem.trim(), completed: false });
    }

    toggleChecklistItem(index) {
        if (this.checklist[index]) {
            this.checklist[index].completed = !this.checklist[index].completed;
        }
    }

    removeChecklistItem(index) {
        if (index >= 0 && index < this.checklist.length) {
            this.checklist.splice(index, 1);
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