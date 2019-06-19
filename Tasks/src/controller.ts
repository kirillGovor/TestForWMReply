import {todo} from './Todo';
import {Todo} from './Todo';
import {Tasks} from './Task';
import Subtasks from './Subtask';
import {realezeView} from'./index';

export function cheked(e:any) {
    e = event;
    if (e.target.style.textDecoration == "none") {
        e.target.style = "text-decoration: line-through";
        todo.Check(true, e.target.innerHTML);
    }
    else {
        e.target.style = "text-decoration: none";
        e.target.children[0].checked = false;
        todo.Check(false, e.target.innerHTML);
    }
    console.log();
}

export function deleteFinished() {
    todo.deleteFinishedTask();
    realezeView();
}


export function addTAsk() {
    var id = todo.getId();
    var task = document.getElementById("inputAdd") as HTMLInputElement;

    var newTask = new Tasks(task.value, id);
    let subtask = new Subtasks;

    todo.addTask(newTask.task );
    subtask.addSubstaks("", id);
    task.value = "";
    realezeView();
}

export function remove(e:any) {
    e = event;
    var regex = /\d+/g;
    var id = e.target.id.match(regex);  // creates array from matches
    
    todo.deleteTask(id);
    realezeView();
}

export function seach() {
    var seach= (document.getElementById("seach") as HTMLInputElement).value;
    
    realezeView(todo.search(seach));
}



export function ShowSubTask(e:any)  { ///event эт какой тип?
    e = event;
    var input = document.getElementById(`subTaskinput${e.target.id}`);
    var button = document.getElementById(`buttonSubTask${e.target.id}`);
    if(input&&button){
    if (input.style.display === "none") {
        input.style.display = "block";
        button.style.display = "block";
        e.target.value = "-";
    }
    else {
        input.style.display = "none";
        button.style.display = "none";
        e.target.value = "+";
    }
}
}

export function addSubtask(e:any) {// какой тип у event должен быть?
    e = event
    var regex = /\d+/g;
    var i = e.target.id.match(regex);  // creates array from matches
    var input = document.getElementById(`subTaskinput${i}`) as HTMLInputElement;
    var inputNumber:string=(input.value);
    let subtask = new Subtasks;

    subtask.addSubstaks(inputNumber, i);
    todo.addSubstaks(i, subtask.subtasks.task);
    realezeView();
}

