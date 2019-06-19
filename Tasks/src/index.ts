import { todo } from './Todo';
import { EventView } from "./ViewEvents"

realezeView();
export function realezeView(filter?: string[]): void {
    var code = '';
    var subtasks = '';
    var todos = todo.getList();
    var id = todo.getId();
    var subtasks = '';


    if (filter) {
        for (var i = 0; i < todo.storage.task.length; i++) {
            for (var k = 0; k < filter.length; k++) {
                if (todo.storage.task[i] == filter[k]) {
                    if (todo.storage.subtasks[i]) {
                        if (todo.storage.subtasks[i].length > 0) {
                            for (var j = 0; j < todo.storage.subtasks[i].length; j++) {
                                var subtasks = subtasks + ` <li id="subtask${i}then${j}" style="text-decoration: none; cursor:pointer">${todo.storage.subtasks[i][j]}</li>
                                <span id="subtask${i}timer${j}">${todo.storage.timer[i][j].hours}:${todo.storage.timer[i][j].minutes}:${todo.storage.timer[i][j].seconds}</span><br>`
                                EventView.addIDSubtask(`subtask${i}then${j}`);
                            }
                        }
                    }
                    var code = code + `
                    <ol class="list"><li>${todo.storage.task[i]}  <img class="removeButton" src="70091.png" width="20px"  id="image${todo.storage.id[i]}"> <ol >${subtasks}</ol>
                   <input id="${todo.storage.id[i]}" class="button_add" type="button" value="+" ></input>  </li></ol>       
                   <input style="display:none;" id="subTaskinput${todo.storage.id[i]}" class="inputSubTask" type="text" placeholder="add subtask.."></input>  </li></ol>   
                   <input id="buttonSubTask${todo.storage.id[i]}" class="AddSubTask"  style="display:none" type="button" value="add"></input>  </li></ol>   
                   <p style="display:none;" id="textIdTimer${todo.storage.id[i]}">Timer</p><br>
                   <input style="display:none;" id="subTaskinputDateHours${todo.storage.id[i]}"  type="text" class="" placeholder="add h.."></input>  </li></ol>
                   <input style="display:none;" id="subTaskinputDateMinutes${todo.storage.id[i]}" type="text" class="" placeholder="add m.."></input>  </li></ol>
                   <input style="display:none;" id="subTaskinputDateSeconds${todo.storage.id[i]}"  type="text" class="" placeholder="add c.."></input>  </li></ol>
                   
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
            for (var i = 0; i < todo.storage.task.length; i++) {
                if (todo.storage.task[i] != undefined) {
                    if (todo.storage.subtasks[i]) {
                        if (todo.storage.subtasks[i].length > 0) {
                            for (var j = 0; j < todo.storage.subtasks[i].length; j++) {
                                var subtasks = subtasks + ` <li id="subtask${i}then${j}" style="text-decoration: none; cursor:pointer">${todo.storage.subtasks[i][j]}</li>
                                <span id="subtask${i}timer${j}">${todo.storage.timer[i][j].hours}:${todo.storage.timer[i][j].minutes}:${todo.storage.timer[i][j].seconds}</span><br>`
                                EventView.addIDSubtask(`subtask${i}then${j}`);
                            }
                        }
                    }
                    var code = code + `
                    <br><ol class="list"><li>${todo.storage.task[i]}  <img class="removeButton" src="70091.png" width="20px"  id="image${todo.storage.id[i]}"> <ol >${subtasks}</ol>
                <input id="${todo.storage.id[i]}" class="button_add" type="button" value="+" ></input>  </li></ol>       
                <input style="display:none;" id="subTaskinput${todo.storage.id[i]}" class="inputSubTask" type="text" placeholder="add subtask.."></input>  </li></ol>   
                <input id="buttonSubTask${todo.storage.id[i]}" class="AddSubTask"  style="display:none" type="button" value="add"></input>  </li></ol>   
                <p style="display:none;" id="textIdTimer${todo.storage.id[i]}">Timer</p><br><br>
                <input style="display:none;"class="inputSubTask_h" id="subTaskinputDateHours${todo.storage.id[i]}" width="25px" type="text" class="" placeholder="add h.."></input>  </li></ol>
                <input style="display:none;"class="inputSubTask_h" id="subTaskinputDateMinutes${todo.storage.id[i]}" width="25px" type="text" class="" placeholder="add m.."></input>  </li></ol>
                <input style="display:none;"class="inputSubTask_h" id="subTaskinputDateSeconds${todo.storage.id[i]}" width="25px"  type="text" class="" placeholder="add c.."></input>  </li></ol>
                
                `
                    EventView.addID(todo.storage.id[i]);
                    subtasks = '';
                }
            }
        }
    }

    var allTasks = document.getElementById("tasks");
    if (allTasks) {
        allTasks.innerHTML = code;
    }
    window.onload = function () {
        setInterval(todo.updateTimers.bind(todo), 1000);
    };
    EventView.createEvents();
    EventView.createEventsSubtask();
}
