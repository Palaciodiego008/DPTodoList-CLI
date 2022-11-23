import { 
    inquirerMenu, 
    pause,
    readInput
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
            default:
                break;
        }

        saveDB(tasks.listArr);

        await pause();

    } while (opt !== '0')

}


main()