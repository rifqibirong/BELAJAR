let fs = require('fs');

let readline = require('readline');
let rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

// membuat folder data jika blm ada
// let path = './contactapp.json';
// if(!fs.existsSync(path)) {
//     fs.mkdirSync(path);
// }

// membuat file json jika blm ada
// let datapath = './nyoba/inc/contactapp.json';
// if (!fs.existsSync(datapath)){
//     fs.writeFileSync(datapath, '[]', 'utf8');
// }


let pertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    });
};


let utama = async () => {
    let nama = await pertanyaan ('Nama Anda : ');
    let email = await pertanyaan ('Email Anda : ');
    let nohp = await pertanyaan ('No HP Anda : ');

    let comot = { nama, email, nohp };
    let file = fs.readFileSync('./contactapp.json', 'utf-8');
    let obj = JSON.parse(file);

    obj.push(comot);
    fs.writeFileSync('./contactapp.json', JSON.stringify(obj));
    console.log('Terimakasih!!');
    rl.close();
};

utama();

module.exports = {pertanyaan};

