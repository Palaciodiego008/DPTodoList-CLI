import colors from 'colors';
import { inquirerMenu, pause} from './helpers/inquirer.js';


//console.clear();

const main = async () => {

    let opt = '';

    do {
        opt = await inquirerMenu();
         console.log({opt});
        await pause();

    } while (opt !== '0')

}


main()