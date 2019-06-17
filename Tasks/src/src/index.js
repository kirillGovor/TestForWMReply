class Todo {
    constructor(todos) {
        this.storage = { task: [], id: [], subtasks: [], cheked: [] };
        this.id = -1;
        this.idForInput = -2;
        // localStorage.clear();
        if (localStorage.getItem("Todo")) {
            var returnvalueJSON1 = JSON.parse(localStorage.getItem("Todo"));
            this.storage = returnvalueJSON1.storage;
        }
    }

    getId() {
        return (this.id);
    }

    addTask(task, id) {
        this.id++;
        this.storage.task.push(task);
        this.storage.id.push(this.id);
    }

    addSubstaks(id, subtasks) { // оставил пока такой варинт, т.к. через FindIndex нужно будет забрать х
        for (var i = 0; i < this.storage.task.length; i++) {
            if (this.storage.id[i] == id) {
                if (this.storage.subtasks[i] != undefined) {
                    this.storage.subtasks[i].push(subtasks);
                }
                else {
                    this.storage.subtasks[i] = subtasks; 

                }
            }
        }
    }

    deleteFinishedTask(id) {
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

    deleteTask(id) {
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

    search(value) {
        var phrase = this.storage.task; var word = [value];

        function oneINother(word, phrase) {
            function c(d) {
                return word.some(function (a) {
                    return (new RegExp("^" + a)).test(d);
                })
            }
            return phrase.filter(function (a) {
                return a.split(/\s+/).some(c);
            })

        };
        return (oneINother(word, phrase));
    }

    Check(boo, name) {
        if (boo === true) {
            var word = name;
            this.storage.cheked.push(word);
            console.log(this.storage.cheked);
        }
        else {
            var word = name.split('>')[1];
            for (var i = 0; i <= this.storage.cheked.length; i++) {
                if (this.storage.cheked[i] == word) {
                    this.storage.cheked.splice(i, 1);
                    console.log(this.storage.cheked);
                }
            }
        }
    }



    getList() {
        let nameList = [];
        nameList.push(this.storage)
        let JSONstorage = { storage: this.storage };
        var returnvalueJSON1 = JSON.parse(localStorage.getItem("Todo"))
        var valueJSON1 = JSON.stringify(JSONstorage);

        localStorage.setItem("Todo", valueJSON1);
        JSON.parse(localStorage.getItem(this.storage));
        return (nameList);
    }

}


class Tasks {
    constructor(task, id) {
        this.task = task;
        this.id = id;
    }

    getName() {
        return (this.task)
    }

}


class Subtasks extends Tasks {
    constructor(subtask) {
        super();
        this.subtasks = { task: [], id: [], cheked: false };
    }
    addSubstaks(value, id) {
        this.subtasks.task.push(value);
        this.subtasks.id = id;
        this.subtasks.cheked = false;
    }

}

let todo = new Todo();
