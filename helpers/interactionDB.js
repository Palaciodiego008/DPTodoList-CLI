import fs from 'fs';

const file = './db/data.json';

const saveDB = (data) => {
    let dataToJson = JSON.stringify(data);
    fs.writeFileSync(file, dataToJson);
}


const readDB = () => {
    if (!fs.existsSync(file)) {
        return null
    }

    const info = fs.readFileSync(file, { encoding: 'utf-8' });

    const data = JSON.parse(info);

    return data;

}



export {
    saveDB,
    readDB
}