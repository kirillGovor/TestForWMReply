


function realezeView(filter) {
    var tasks;
    var code = '';
    var todos = todo.GetList();
    var id=todo.GetId();

    if (filter != undefined || filter == "") {



        for (var i = 0; i <= todo.storage.task.length - 1; i++) {

            subtasks = '';

            for (var k = 0; k <= filter.length - 1; k++) {

                if (todo.storage.task[i] == filter[k]) {


                    if (todo.storage.subtasks[i] != undefined &&    todo.storage.subtasks[i]!="") {
                        if (todo.storage.subtasks[i].length > 0) {

                            for (var j = 0; j <= todo.storage.subtasks[i].length - 1; j++) {
                                subtasks = subtasks + `<li style="text-decoration: none; cursor:pointer" onclick="cheked(event)">  <input type="checkbox"   />${todo.storage.subtasks[i][j]}</li><br>`
                            }

                        }
                    
                    else {
                        subtasks = subtasks + `<li style="text-decoration: none; cursor:pointer" onclick="cheked(event)"> <input type="checkbox" />${todo.storage.subtasks[i][j]}</li><br>`
                    }
                }

                var code = code + `
                <ul><li>${todo.storage.task[i]}  <img src="70091.png" width="20px"onClick="remove()"  id="image${todo.storage.id[i]}"><ul > ${subtasks}</ul>
               <input id="${todo.storage.id[i]}" type="button" value="+" onclick="ShowSubTask(event)"></input>  </li></ul>       
               <input style="display:none;" id="subTaskinput${todo.storage.id[i]}" type="text" placeholder="add subtask.."></input>  </li></ul>   
               <input id="buttonSubTask${todo.storage.id[i]}" onclick="addSubtask(event)" style="display:none" type="button" value="add"></input>  </li></ul>   
               `

                }
               

            }


        }



    }


    else {
        for (var i = 0; i <= todo.storage.task.length - 1; i++) {
            if (todo.storage.task[i] != undefined) {
                subtasks = '';

                if (todo.storage.subtasks[i] != undefined) {
                    if (todo.storage.subtasks[i].length > 0) {

                        for (var j = 0; j <= todo.storage.subtasks[i].length - 1; j++) {
                            subtasks = subtasks + ` <li style="text-decoration: none; cursor:pointer" onclick="cheked(event)"><input type="checkbox"  />${todo.storage.subtasks[i][j]}</li><br>`
                        }

                    }
                }
                else {
                 
                }


                var code = code + `
                 <ul><li>${todo.storage.task[i]}  <img src="70091.png" width="20px"onClick="remove()"  id="image${todo.storage.id[i]}"> <ul >${subtasks}</ul>
                <input id="${todo.storage.id[i]}" type="button" value="+" onclick="ShowSubTask(event)"></input>  </li></ul>       
                <input style="display:none;" id="subTaskinput${todo.storage.id[i]}" type="text" placeholder="add subtask.."></input>  </li></ul>   
                <input id="buttonSubTask${todo.storage.id[i]}" onclick="addSubtask(event)" style="display:none" type="button" value="add"></input>  </li></ul>   
                `


            }
        }


    }

    var allTasks = document.getElementById("tasks");
    var text = document.getElementById("text");
    allTasks.innerHTML = code;
}
realezeView();


