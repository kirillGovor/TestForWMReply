export class Todo {
    id: number = -1;
    idForInput: number = -2;
    storage: { task: string[], id: Array<number>, subtasks: any, timer: any, cheked: Todo[] } = {
        task: [],
        id: [],
        subtasks: [],
        cheked: [],
        timer: []
    }
    constructor() {
        this.storage = { task: [], id: [], subtasks: [], cheked: [], timer: [] };
        this.id = -1;
        this.idForInput = -2;

        if (window.localStorage.getItem("Todo") && window.localStorage.getItem("Todo") != "{}") {
            var returnvalueJSON1: any = localStorage.getItem("Todo");
            if (returnvalueJSON1) {
                returnvalueJSON1 = JSON.parse(returnvalueJSON1);
                this.storage = returnvalueJSON1.storage;
            }

        }
    }

    updateTimers() {
        if (this.storage.timer.length > 0) {
            for (var i = 0; i < this.storage.timer.length; i++) {
                for (var j = 0; j < this.storage.timer[i].length; j++) {
                    var subtasks = document.getElementById(`subtask${i}timer${j}`);
                    var text = document.getElementById(`subtask${i}timer${j}`)

                    if (this.storage.timer[i][j].seconds > 0) {
                        this.storage.timer[i][j].seconds--;
                    }
                    else {
                        if (this.storage.timer[i][j].minutes > 0) {
                            this.storage.timer[i][j].minutes--;
                            this.storage.timer[i][j].seconds = 59;

                        }
                        else {
                            if (this.storage.timer[i][j].hours > 0) {
                                this.storage.timer[i][j].minutes = 59
                                this.storage.timer[i][j].hours--;

                            }
                            else {
                                text!.innerHTML = "finished";
                            }
                        }
                    }
                    if (subtasks)
                        subtasks.innerHTML = this.storage.timer[i][j].hours + `:` + this.storage.timer[i][j].minutes + ":" + this.storage.timer[i][j].seconds;
                }



            }
        }

    }



    getId() {
        return (this.id);
    }

    addTask(task: string) {
        this.id++;
        this.storage.task.push(task);
        this.storage.id.push(this.id);
    }

    addSubstaks(id: any, subtasks: string[], date: string[]) { // оставил пока такой варинт, т.к. через FindIndex нужно будет забрать х
        for (var i = 0; i < this.storage.task.length; i++) {
            if (this.storage.id[i] == id[0]) {
                if (this.storage.subtasks[i] != undefined) {
                    this.storage.subtasks[i].push(subtasks);
                    this.storage.timer[i].push(date[0]);
                }
                else {
                    this.storage.subtasks[id] = subtasks;
                    this.storage.timer[i] = date;
                }
            }
        }
    }

    deleteFinishedTask() {
        for (var i = 0; i <= this.storage.subtasks.length - 1; i++) {
            for (var j = 0; j <= this.storage.subtasks[i].length - 1; j++) {
                for (var k = 0; k <= this.storage.cheked.length - 1; k++) {

                    if (this.storage.subtasks[i][j] == this.storage.cheked[k]) {

                        this.storage.subtasks[i].splice(j, 1);
                    }
                }

            }
        }
    }

    deleteTask(id: number) {
        for (var i = 0; i <= this.storage.task.length; i++) {
            if (this.storage.id[i] == id) {
                this.storage.task.splice(i, 1);
                this.storage.id.splice(i, 1);

                if (this.storage.subtasks[i] != undefined) {
                    this.storage.subtasks[i].splice(0, this.storage.subtasks[i].length);
                }
            }
        }
    }

    search(value: string) {
        var phrase: string[] = this.storage.task; var word: Array<string> = [value];

        function oneINother(word: Array<string>, phrase: string[]) {
            function c(d: string) {
                return word.some(function (a) {
                    return (new RegExp("^" + a)).test(d);
                })
            }
            return phrase.filter(function (a: any) {
                return a.split(/\s+/).some(c);
            })

        };
        return (oneINother(word, phrase));
    }



    Check(boo: boolean, name: Todo) {
        if (boo) {
            var word = name;
            this.storage.cheked.push(word);
            console.log(this.storage.cheked);
        }
        else {
            var word = name;
            for (var i = 0; i < this.storage.cheked.length; i++) {
                if (this.storage.cheked[i] === word) {
                    this.storage.cheked.splice(i, 1);
                }
            }
        }
    }



    getList() {
        let nameList = [];
        nameList.push(this.storage)
        let JSONstorage = { storage: this.storage };
        var returnvalueJSON1 = localStorage.getItem("Todo");
        var valueJSON1 = JSON.stringify(JSONstorage);
        var storage = localStorage.getItem(String(this.storage));
        if (returnvalueJSON1) 
            JSON.parse(returnvalueJSON1)
        
        localStorage.setItem("Todo", valueJSON1);
        if (storage) 
            JSON.parse((String(storage)));
        


        return (nameList);
    }

}


export let todo = new Todo();
export let addList = new Todo().addTask("dffd")