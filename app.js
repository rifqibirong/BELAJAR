
let readline = require('readline');
let rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

let fs = require('fs');


rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan no HP anda : ', (noHP) => {
        rl.question('Masukkan email anda :', (email) => {
            let ambil = { nama, noHP, email };
            let file = fs.readFileSync('contacts.json', 'utf-8');
            let contact = JSON.parse(file);

            contact.push(ambil);

            fs.writeFileSync('contacts.json', JSON.stringify(contact))

            console.log('Terimakasih!', contact);

            rl.close();
       });
    });
});