export default class Subtasks  {
    subtasks: { task: string[], id: number, cheked: Boolean,date?:any } = {
        task: [],
        id: 0,
        cheked: false,
        date:[]
    }
    constructor() {
        this.subtasks = { task: [], id: 0, cheked: false, date:[] };
    }
    addSubstaks(value: string, id: number,date?:any) {
        this.subtasks.task.push(value);
        this.subtasks.id = id;
        this.subtasks.cheked = false;
        this.subtasks.date.push(date);
    }
   

}


