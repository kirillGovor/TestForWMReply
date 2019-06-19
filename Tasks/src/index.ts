import { todo } from './Todo';
import { Todo } from './Todo';
import { EventView } from "./ViewEvents"
import { cheked, deleteFinished, addTAsk, remove, seach, ShowSubTask, addSubtask } from './controller';
console.log(todo);
console.log(Todo);
realezeView();


var inputSeach = document.getElementById("seach");
var add = document.getElementById("add");
var clear = document.getElementById("clear");
console.log(inputSeach, document, clear);
inputSeach!.oninput = function () {
    seach();
};
add!.onclick = function () {
    addTAsk()
}
clear!.onclick = function () {
    deleteFinished()
}




export function realezeView(filter?: string[]): void {
    var code = '';
    var subtasks = '';
    var todos = todo.getList();
    var id = todo.getId();
    var subtasks = '';


    if (filter) {
        for (var i = 0; i <= todo.storage.task.length - 1; i++) {
            for (var k = 0; k <= filter.length - 1; k++) {
                if (todo.storage.task[i] == filter[k]) {
                    if (todo.storage.subtasks[i]) {
                        if (todo.storage.subtasks[i].length > 0) {
                            for (var j = 0; j <= todo.storage.subtasks[i].length - 1; j++) {
                                var subtasks = subtasks + `<li id="subtask${i}then${j}" style="text-decoration: none; cursor:pointer">  ${todo.storage.subtasks[i][j]}</li><br>`
                                EventView.addIDSubtask(`subtask${i}then${j}`);
                            }
                        }
                        //  else {
                        //  var    subtasks = subtasks + `<li style="text-decoration: none; cursor:pointer" onclick="cheked(event)"> ${todo.storage.subtasks[i][j]}</li><br>`
                        //   }
                    }
                    var code = code + `
                <ol class="list"><li>${todo.storage.task[i]}  <img class="removeButton" src="70091.png" width="20px"  id="image${todo.storage.id[i]}"><ol > ${subtasks}</ol>
               <input id="${todo.storage.id[i]}" class="button_add" type="button" value="+" ></input>  </li></ol>       
               <input style="display:none;" id="subTaskinput${todo.storage.id[i]}" type="text" class="inputSubTask" placeholder="add subtask.."></input>  </li></ol>   
               <input id="buttonSubTask${todo.storage.id[i]}"  class="AddSubTask"  style="display:none" type="button" value="add"></input>  </li></ol>   
               `
                    subtasks = '';
                    EventView.addID(todo.storage.id[i]);
                    break;
                }
            }
        }
    }


    else {
        if (todo.storage) {
            for (var i = 0; i <= todo.storage.task.length - 1; i++) {
                if (todo.storage.task[i] != undefined) {
                    if (todo.storage.subtasks[i]) {
                        if (todo.storage.subtasks[i].length > 0) {
                            for (var j = 0; j <= todo.storage.subtasks[i].length - 1; j++) {
                                var subtasks = subtasks + ` <li id="subtask${i}then${j}" style="text-decoration: none; cursor:pointer">${todo.storage.subtasks[i][j]}</li><br>`
                                EventView.addIDSubtask(`subtask${i}then${j}`);
                            }
                        }
                    }
                    var code = code + `
                 <ol class="list"><li>${todo.storage.task[i]}  <img class="removeButton" src="70091.png" width="20px"  id="image${todo.storage.id[i]}"> <ol >${subtasks}</ol>
                <input id="${todo.storage.id[i]}" class="button_add" type="button" value="+" ></input>  </li></ol>       
                <input style="display:none;" id="subTaskinput${todo.storage.id[i]}" class="inputSubTask" type="text" placeholder="add subtask.."></input>  </li></ol>   
                <input id="buttonSubTask${todo.storage.id[i]}" class="AddSubTask"  style="display:none" type="button" value="add"></input>  </li></ol>   
                `
                    EventView.addID(todo.storage.id[i]);
                    subtasks = '';
                }
            }
        }
    }

    var allTasks = document.getElementById("tasks");
    var text = document.getElementById("text");
    if (allTasks) {
        allTasks.innerHTML = code;
    }
    EventView.createEvents();
    EventView.createEventsSubtask();
}


