export  class Tasks {
    task: string;
    id: number;
    constructor(task: string, id: number) {
        this.task = task;
        this.id = id;
    }
    getName() {
        return (this.task)
    }
}