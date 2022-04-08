let fs = require('fs');

let readline = require('readline');
let rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});


rl.question('Club Favorit: ', (club) => {
    rl.question('Pemain Favorit: ', (pemain) => {
        rl.question('Pelatih: ', (pelatih) => {

            let comot = { club, pemain, pelatih };
            let file = fs.readFileSync('./incs.json', 'utf-8');
            let obj = JSON.parse(file);

            obj.push(comot);
            fs.writeFileSync('./incs.json', JSON.stringify(obj))
            console.log('Yoman', obj);
            rl.close();
        });
    });
});