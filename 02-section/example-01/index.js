const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('fs Read file data: ', data);
});

console.log('Hello...');

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
    if (err) throw err;
    console.log('fs Write file completed');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is', (err) => {
        if (err) throw err;
        console.log('fs Append file completed');

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
            if (err) throw err;
            console.log('fs Rename file completed');
        });
    });
});

// fs.appendFile(path.join(__dirname, 'files', 'text.txt'), 'Testing text', (err) => {
//     if (err) throw err;
//     console.log('fs Append file completed');
// });

process.on('uncaughtException', (err) => {
    console.error(`There was an uncought error: ${err}`)
    process.exit();
});
