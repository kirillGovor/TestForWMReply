import {todo} from './Todo';
import {Tasks} from './Task';
import Subtasks from './Subtask';
import {realezeView} from'./index';

export function cheked(e:any,inner?:any) {
    if(e==null){
        if(inner.style.textDecoration === "none"){
            inner.style = "text-decoration: line-through";
            todo.Check(true, inner.innerHTML); 
        }
        else{
        inner.style = "text-decoration: none";
        todo.Check(false,  inner.innerHTML);
        }
    }

    e = event;
    if (e.target.style.textDecoration == "none") {
        e.target.style = "text-decoration: line-through";
        todo.Check(true, e.target.innerHTML);
    }
    else {
        e.target.style = "text-decoration: none";
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
    subtask.addSubstaks("", id,[]);
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
    var hours = document.getElementById(`subTaskinputDateHours${e.target.id}`);
    var minutes = document.getElementById(`subTaskinputDateMinutes${e.target.id}`);
    var seconds = document.getElementById(`subTaskinputDateSeconds${e.target.id}`);
    if(input&&button&&hours&&minutes&&seconds){
    if (input.style.display === "none") {
        input.style.display = "block";
        button.style.display = "block";
        hours.style.display = "block";
        minutes.style.display = "block";
        seconds.style.display = "block";
        e.target.value = "-";
    }
    else {
        input.style.display = "none";
        button.style.display = "none";
        hours.style.display = "none";
        minutes.style.display = "none";
        seconds.style.display = "none";
        e.target.value = "+";
    }
}
}

export function addSubtask(e:any) {// какой тип у event должен быть?
    e = event
    var regex = /\d+/g;
    var i = e.target.id.match(regex);  // creates array from matches
    //текст такска
    var input = document.getElementById(`subTaskinput${i}`) as HTMLInputElement;
    var inputNumber:string=(input.value);

    //часы таска
    var dat =  document.getElementById(`subTaskinputDateHours${i}`) as HTMLInputElement;
    var hours:string=(dat.value);
    //минуты таска
    var dat =  document.getElementById(`subTaskinputDateMinutes${i}`) as HTMLInputElement;
    var minutes:string =dat.value;

    //секунды таска
    var dat =  document.getElementById(`subTaskinputDateSeconds${i}`) as HTMLInputElement;
    var seconds:string =dat.value;

    var date ={hours:hours,minutes:minutes,seconds:seconds}
    let subtask = new Subtasks;

    subtask.addSubstaks(inputNumber, i,date);
    todo.addSubstaks(i, subtask.subtasks.task,subtask.subtasks.date);
    realezeView();
}

