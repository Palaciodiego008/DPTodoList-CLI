import colors from 'colors';
import { 
    inquirerMenu, 
    pause,
    readInput
} from './helpers/inquirer.js';
//import Task from './models/task.js';
import Tasks from './models/tasks.js';


const main = async () => {

    let opt = '';
    const tasks = new Tasks();

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
                console.log(tasks.listArr);
            default:
                break;
        }

        await pause();

    } while (opt !== '0')

}


main()