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

       
        
       
        
    
}

export default Tasks;