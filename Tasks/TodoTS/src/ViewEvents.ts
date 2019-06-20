import { cheked, remove,seach,addTAsk, ShowSubTask,deleteFinished, addSubtask } from './controller';
export default class View {
    idElemnts: { removeButton: any[], button_add: any[], AddSubTask: any[], subTaskinput: any[], cursorSubtask: any[],seach:any[] } = {
        removeButton: [],
        button_add: [],
        AddSubTask: [],
        subTaskinput: [],
        cursorSubtask: [],
        seach:[],
    }
    id: number[];
    idSubtask:string[];
    HTMLElemnts: any;
    constructor(id: number) {
        this.HTMLElemnts = [];
        this.idElemnts = { removeButton: [], button_add: [], AddSubTask: [], subTaskinput: [], cursorSubtask: [],seach:[] };
        this.id = [];
        this.idSubtask=[];
    }
    addID(id: number) {
        this.id.push(id);
    }
  
    addIDSubtask(id:string){
        this.idSubtask.push(id);
    }
    
    createEventsSubtask(){
        for (var i=0; i< this.idSubtask.length;i++){
            this.idElemnts.cursorSubtask[i] = document.getElementById(this.idSubtask[i]);

            if (this.idElemnts.cursorSubtask[i]) {
                this.idElemnts.cursorSubtask[i]!.onclick = function () {
                    cheked(event);
                }
        }
    }
    }


    createEvents() {

        var inputSeach = document.getElementById("seach");
        var add = document.getElementById("add");
        var clear = document.getElementById("clear");
        inputSeach!.oninput = function () {
            seach();
        };
        add!.onclick = function () {
            addTAsk()
        }
        clear!.onclick = function () {
            deleteFinished()
        }
        for (var i = 0; i < this.id.length + 1; i++) {
            //кнопка удаления
            this.idElemnts.removeButton[i] = document.getElementById(`image${this.id[i - 1]}`);

            if (this.idElemnts.removeButton[i]) {
                this.idElemnts.removeButton[i]!.onclick = function () {
                    remove(event);
                }
            }

            //кнопка показать подзадачи 
            this.idElemnts.button_add[i] = document.getElementById(`${this.id[i - 1]}`);
            if (this.idElemnts.button_add[i]) {
                this.idElemnts.button_add[i]!.onclick = function () {
                    ShowSubTask(event);
                }
            }

            //кнопка добавления подзадач
            this.idElemnts.AddSubTask[i] = document.getElementById(`buttonSubTask${this.id[i - 1]}`);
            if (this.idElemnts.AddSubTask[i]) {
                this.idElemnts.AddSubTask[i]!.onclick = function () {
                    addSubtask(event);

                }
            }

           
        }
    }
    CreateEventsForSubtasks(){
        for (var i = 0; i < this.id.length + 1; i++) {
            for(var j=0;j< this.idSubtask.length;j++){
                this.idElemnts.seach[i][j]=document.getElementById(``)
            }
        }
    }
}
export let EventView = new View(0);