// mengambil argumen dari terminal
// console.log(process.argv)

let yargs = require('yargs');
let contact = require('./contactapp2.json')

yargs.command({
    command: 'add',
    describe: 'Tambah kontak',
    builder: {
        nama: {
            describe:'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: 'noHP',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contact.simpanContact(argv.nama, argv.email, argv.noHP);
    },
});


yargs.parse();
// let fs = require('fs');

// let readline = require('readline');
// let rl = readline.createInterface ({
//     input: process.stdin,
//     output: process.stdout,
// });


// let pertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject) => {
//         rl.question(pertanyaan, (nama) => {
//             resolve(nama);
//         });
//     });
// };


// let utama = async () => {
//     let nama = await pertanyaan ('Nama Anda : ');
//     let email = await pertanyaan ('Email Anda : ');
//     let nohp = await pertanyaan ('No HP Anda : ');

//     let comot = { nama, email, nohp };
//     let file = fs.readFileSync('./contactapp2.json', 'utf-8');
//     let obj = JSON.parse(file);

//     obj.push(comot);
//     fs.writeFileSync('./contactapp2.json', JSON.stringify(obj));
//     console.log('Terimakasih!!');
//     rl.close();
// };

// utama();

