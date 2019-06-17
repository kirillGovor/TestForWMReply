
function cheked(e) {
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

function deleteFinished() {
    todo.deleteFinishedTask();
    realezeView();
}


function addTAsk(subTask) {
    var id = todo.getId();
    var task = document.getElementById("inputAdd");
    var newTask = new Tasks(task.value, id);
    let subtask = new Subtasks;

    todo.addTask(newTask.task, newTask.id);
    subtask.addSubstaks("", id);
    task.value = "";
    realezeView();
}

function remove(e) {
    e = event;
    var regex = /\d+/g;
    var id = e.target.id.match(regex);  // creates array from matches
    
    todo.deleteTask(id);
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
    var regex = /\d+/g;
    var i = e.target.id.match(regex);  // creates array from matches
    var input = document.getElementById(`subTaskinput${i}`).value;
    let subtask = new Subtasks;

    subtask.addSubstaks(input, i);
    todo.addSubstaks(i, subtask.subtasks.task);
    realezeView();
}

