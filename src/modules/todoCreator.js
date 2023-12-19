export default class Todo {
    constructor(title, description, duedate = "No Due Date", priority = "Regular", projectId) {
        this.id = `todo${Math.floor(Math.random() * 1000000)}`,
        this.projectId = projectId,
        this.title = title,
        this.description = description,
        this.duedate = duedate,
        this.priority = priority
    }
}