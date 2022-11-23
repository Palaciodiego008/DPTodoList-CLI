import { 
    inquirerMenu, 
    pause,
    readInput,
    listTasksDelete,
    confirm,
} from './helpers/inquirer.js';

import Tasks from './models/tasks.js';
import { saveDB, readDB} from './helpers/interactionDB.js';

const main = async () => {

    let opt = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if (tasksDB) {
        tasks.loadTaskFromArray(tasksDB);
    }

    await pause();
    

    do {
        // Print the menu
        opt = await inquirerMenu();
    
        switch (opt) {
            case '1':
                // Create option
                const desc = await readInput('Description:');
                tasks.createTask(desc);
                break;
            case '2':
                tasks.completeList();             
                break;
            case '3':
                tasks.listPendingCompleted();
               break;
            case '4':
                tasks.listPendingCompleted(false);    
                break;
            case '6':
                const id = await listTasksDelete(tasks.listArr);
                const ok = await confirm('Are you sure?');
                if (ok) 
                    tasks.deleteTask(id);
                    console.log('Task deleted');
            default:
                break;
        }

        saveDB(tasks.listArr);

        await pause();

    } while (opt !== '0')

}


main()