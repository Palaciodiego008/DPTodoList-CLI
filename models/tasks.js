import Task from './task.js';



class Tasks {
            
    _list = {};
        constructor() {
            this._list = {};
        }


        get listArr() {
            const list = []

            Object.keys(this._list).forEach(key => {
                const task = this._list[key];
                list.push(task);
            });

            return list;
        }
        

        createTask(desc = '') {
            const task = new Task(desc);
            this._list[task.id] = task;
        
        }    

       loadTaskFromArray(tasks = []) {
            tasks.forEach(task => {
                this._list[task.id] = task;
            })
       }


       completeList() {
        console.log();
        this.listArr.forEach((task, i) => {
            const idx = `${i + 1}`.green;
            const {desc, completedAt} = task;
            const status = (completedAt) ? 'Completed'.green : 'Pending'.red;
            console.log(`${idx} ${desc} :: ${status}`);
        })

       }        
       
        
    
}

export default Tasks;