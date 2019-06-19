import {Tasks} from './Task';
export default class Subtasks  {
    subtasks: { task: string[], id: number, cheked: Boolean } = {
        task: [],
        id: 0,
        cheked: false,
    }
    constructor() {
        this.subtasks = { task: [], id: 0, cheked: false };
    }
    addSubstaks(value: string, id: number) {
        this.subtasks.task.push(value);
        this.subtasks.id = id;
        this.subtasks.cheked = false;
    }

}


