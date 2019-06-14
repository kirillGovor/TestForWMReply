var id = 4;
function realezeView(filter) {
    var tasks;
    var code = '';
    var todos = todo.GetList();


    if (filter != undefined || filter == "") {



        for (var i = 0; i <= todo.storage.task.length - 1; i++) {

            subtasks = '';

            for (var k = 0; k <= filter.length - 1; k++) {

                if (todo.storage.task[i] == filter[k]) {


                    if (todo.storage.subtasks[i] != undefined) {
                        if (todo.storage.subtasks[i].length > 0) {

                            for (var j = 0; j <= todo.storage.subtasks[i].length - 1; j++) {
                                subtasks = subtasks + ` <input type="checkbox"   />${todo.storage.subtasks[i][j]}<br>`
                            }

                        }
                    }
                    else {
                        subtasks = subtasks + `<li style="text-decoration: none; cursor:pointer" onclick="cheked(event)"> <input type="checkbox" />${todo.storage.subtasks[i][j]}</li><br>`
                    }


                    var code = code + `
                     <ul><li>${todo.storage.task[i]}  <img src="70091.png" width="20px"onClick="remove()"  id="image${i}"><ul > ${subtasks}</ul>
                    <input id="${i}" type="button" value="+" onclick="ShowSubTask(event)"></input>  </li></ul>       
                    <input style="display:none;" id="subTaskinput${i}" type="text" placeholder="add subtask.."></input>  </li></ul>   
                    <input id="buttonSubTask${i}" onclick="addSubtask(event)" style="display:none" type="button" value="add"></input>  </li></ul>   
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
                 <ul><li>${todo.storage.task[i]}  <img src="70091.png" width="20px"onClick="remove()"  id="image${i}"> <ul >${subtasks}</ul>
                <input id="${i}" type="button" value="+" onclick="ShowSubTask(event)"></input>  </li></ul>       
                <input style="display:none;" id="subTaskinput${i}" type="text" placeholder="add subtask.."></input>  </li></ul>   
                <input id="buttonSubTask${i}" onclick="addSubtask(event)" style="display:none" type="button" value="add"></input>  </li></ul>   
                `


            }
        }


    }

    var allTasks = document.getElementById("tasks");
    var text = document.getElementById("text");
    allTasks.innerHTML = code;
}
realezeView();



//controler

function cheked(e){
    e=event;
    if( e.target.style.textDecoration=="none"){
    e.target.style= "text-decoration: line-through";
    e.target.children[0].checked =true;
}
else{
    e.target.style= "text-decoration: none";
    e.target.children[0].checked =false;
}
    console.log();
    
}

function addTAsk(subTask) {
    var task = document.getElementById("inputAdd");
    var newTask = new Tasks(task.value, id);


    todo.AddTask(newTask.task, newTask.id);

    let subtask = new Subtasks;
    subtask.addSubstaks("", 4);
    todo.addSubstaks(newTask.task, 4);

    task.value = "";
    realezeView();
    id++;
}



function remove(e){
e=event;
var id = Number(e.target.id.slice(-1));
todo.deleteFinished(id);

realezeView();
}


function seach() {
    var seach = document.getElementById("seach").value;
    realezeView(todo.search(seach));
}



function ShowSubTask(e) {
    e = event;
    var input = document.getElementById(`subTaskinput${e.target.id}`);
    var button = document.getElementById(`buttonSubTask${e.target.id}`);

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


function addSubtask(e) {
    e = event
    var id = Number(e.target.id.slice(-1));
   


    var input = document.getElementById(`subTaskinput${id}`).value;
    var button = document.getElementById(`buttonSubTask${id}`);

    let subtask = new Subtasks;

    subtask.addSubstaks(input, id);
    todo.addSubstaks(id, subtask.subtasks.task);
    realezeView();
}