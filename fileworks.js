const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('fileworks')
  .description('CLI to do file based tasks')
  .version('1.0.0');

program.command('words')
  .description('Count the number of words in a file')
  .argument('<file>','file to perform opeartion')
  .action((file) => {
    fs.readFile(file,'utf8',(err,data) => {
        if (err){
            console.log(err);
        }else{
            const words = data.trim().split(/\s+/); 
            const wordCount = words.length;
            console.log(`There are ${wordCount} words in ${file}`);
        }
    })
  });

program.command('letters')
  .description('Count the number of letters in a file')
  .argument('<file>','file to perform opeartion')
  .action((file) => {
    fs.readFile(file,'utf8',(err,data) => {
        if (err){
            console.log(err);
        }else{
        const totalLetters = data.replace(/\s+/g, '').length;
        console.log(`There are ${totalLetters} letters in ${file}`);
        }
    })
  });

program.command('lines')
  .description('Count the number of lines in a file')
  .argument('<file>','file to perform opeartion')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.parse();