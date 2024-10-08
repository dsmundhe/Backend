// FS module (File System);

// require fs module
const fs = require('fs');

// writefileSync

fs.writeFileSync('./text.txt', "Hello DM");

// writeFile (Async way which takes callback);

fs.writeFile('./text01.txt', "Hello dm", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File created....')
    }
})




// readfileSync

const textData = fs.readFileSync('text.txt', 'utf-8');
console.log(textData);



// readfile (Async way to read file)

fs.readFile('text01.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data)
    }
})


// appendFileSync (it avoid overwriting file it adds data in that file)

fs.appendFileSync('text.txt', "\n Hello Node.js");


// copy data from one file to another file
fs.copyFileSync('text.txt', 'text01.txt');


fs.writeFileSync('./text02.txt', 'Hey i am DM');

// for delete existing file

//              fs.unlinkSync('text02.txt');



// for create new folder

// fs.mkdirSync('mkdir');


// for remove file

// fs.rmdirSync('mkdir');
