const process = require("process");
const fs = require("fs");

console.log(process.cwd());

console.log(__dirname);

const plikPath = __dirname + '/test.txt';
const plik = fs.readFileSync(plikPath, 'UTF-8');
console.log(plik);

const cli = require('quick-cli');

async function read(path){
    return fs.readFileSync(path, 'UTF-8');
}
async function write(path, data){
    return fs.readFileSync(path, data);
}


const input = cli.input.text;
(async function (){
    const nazwaPliku = await input("nazwa pliku?");

    const plikPath = __dirname + '/' + nazwaPliku;
    const plik = fs.readFileSync(plikPath, 'UTF-8');

    console.log(plik);

})()