const chalk = require('chalk');
const { demand, demandOption } = require('yargs');
const yargs = require('yargs')
const notes = require('./notes.js')

//Adding a note
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
           title: {
               describe: "Note title",
               demandOption: true,
               type: 'string'
           },
           body: {
               describe: "Note body",
               demandOption: true,
               type: 'string'
           }
    },
    handler(argv) {
       notes.addNote(argv.title,argv.body)
    }
})


//Removing
yargs.command({
    command: 'rem',
    describe: 'remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
      
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})



//listing
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler(){
        notes.listNotes()
    }
})



//Reading
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: "Reading a note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.readNotes(argv.title)
    }
})

yargs.parse();