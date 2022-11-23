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
            const { desc, completedAt } = task;
            const status = (completedAt) ? 'Completed'.green : 'Pending'.red;
            console.log(`${idx} ${desc} :: ${status}`);
        })

    }

    listPendingCompleted(completed = true) {
        console.log();
        let counter = 0;
        this.listArr.forEach((task) => {
            const { desc, completedAt } = task;
            const status = (completedAt) ? 'Completed'.green : 'Pending'.red;

            if (completed && completedAt) {
                counter += 1;
                console.log(`${(counter + '.').green} ${desc} :: ${completedAt.green}`);

            }

            if (!completed && !completedAt) {
                counter += 1;
                console.log(`${(counter + '.').green} ${desc} :: ${status}`);
            }


        })
    }

    deleteTask(id = '') {
        if (this._list[id]) {
            // using operator delete to delete a property from an object 
            delete this._list[id];
        }
    }

    toggleCompleted(ids = []) {
        ids.forEach(id => {
            const task = this._list[id];
            if (!task.completedAt) {
                task.completedAt = new Date().toISOString();
            }
        })

        this.listArr.forEach(task => {
            if (!ids.includes(task.id)) {
                this._list[task.id].completedAt = null;
            }

        })


    }


}

export default Tasks;