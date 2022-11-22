require('colors')
const { showMenu, pause } = require('./helpers/processes')


const main = async () => {
    console.clear();

    let opt = '';

    do {
        opt = await showMenu();
        console.log({opt});

        if (opt !== '0') await pause(); 
        
    } while (opt !== '0');


    showMenu();
    pause();

}


main()