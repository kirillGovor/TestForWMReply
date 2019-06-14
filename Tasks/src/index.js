

class Todo {
    constructor(todos) {
        this.storage = { task: [], id: [], subtasks: [] };
        this.id = 0;//чтобы начиналось с 0
    }

    AddTask(task, id) {
        this.storage.task.push(task);
        this.storage.id.push(id);
        this.id++;
    }

    addSubstaks(id, subtasks) {
        for (var i = 0; i <= this.storage.task.length - 1; i++) {
            if (this.storage.id[i] == id) {
                if (this.storage.subtasks[i] != undefined) {
                    this.storage.subtasks[i].push(subtasks)
                }
                else {
                    this.storage.subtasks[i] = subtasks; //push concat

                }
            }
        }
    }

    deleteFinished(id) {
        var newStorage;
        for (var i = 0; i <= this.storage.task.length; i++) {
            if (this.storage.id[i] == id) {
                delete this.storage.task[i];
                delete this.storage.id[i];
            }

        }


    }
    search(value) {
        var phrase = this.storage.task; var word = [value];

        function oneINother(word, phrase) {
            function c(d) {
                return word.some(function (a) {
                    return (new RegExp("^" + a)).test(d)
                })
            }
            return phrase.filter(function (a) {
                return a.split(/\s+/).some(c)
            })

        };

        return(oneINother(word, phrase));
    }





    GetList() {
        let nameList = [];
        nameList.push(this.storage)
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
        this.subtasks = { task: [], id: [] };

    }
    addSubstaks(value, id) {
        this.subtasks.task.push(value);
        this.subtasks.id = id;
    }
    deleteSubstaks(value) {
        var newStorage;
        for (var i = 0; i <= this.subtasks.length - 1; i++) {
            if (this.subtasks[i] == value) {
                delete this.subtasks[i];
            }
        }
    }
}





let todo = new Todo();

let todo1 = new Tasks("Красный томат", 0);
let todo2 = new Tasks("Желтый томат", 1);
let todo3 = new Tasks("Красное яблоко", 2);
let todo4 = new Tasks("Зеленое яблоко", 3);
let subTodo1 = new Subtasks;
let subTodo2 = new Subtasks;
let subTodo3 = new Subtasks;
let subTodo4 = new Subtasks;
todo.AddTask(todo1.task, todo1.id);
todo.AddTask(todo2.task, todo2.id);
todo.AddTask(todo3.task, todo3.id);
todo.AddTask(todo4.task, todo4.id);


subTodo1.addSubstaks("гав гав гав", 0);
subTodo1.addSubstaks("хрю хрю", 0);
subTodo2.addSubstaks("кря кря кря", 1);
subTodo2.addSubstaks("кря кря кря", 1);
subTodo2.addSubstaks("кря кря кря", 1);
subTodo3.addSubstaks("гусь", 2);
subTodo4.addSubstaks("краб", 3);



todo.addSubstaks(todo2.id, subTodo2.subtasks.task);
todo.addSubstaks(todo3.id, subTodo3.subtasks.task);
todo.addSubstaks(todo4.id, subTodo4.subtasks.task);
todo.addSubstaks(todo1.id, subTodo1.subtasks.task);
todo.addSubstaks(todo1.id, subTodo1.subtasks.task);

//todo.search("Красный томат");
//todo.DeleteFinished(todo2);
