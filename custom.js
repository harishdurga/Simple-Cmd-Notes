const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
var titleOptions = {
  describe:"title of note",
  demand:true,
  alias:"t"
};
var bodyOptions = {
  describe:"body of the note",
  demand:true,
  alias:"b"
};
const argv = yargs.command('add','Add a new note',{
  title:titleOptions,body:bodyOptions
})
.command('list',"List all the available notes")
.command('read',"Read a note by passing title",{
  title:titleOptions
})
.command('remove',"Remove a note",{
  title:titleOptions
})
.help().argv;
console.log("Yargs: ",argv);
var command = process.argv[2];
if (command === "add") {
  var result = notes.addNote(argv.title,argv.body);
  if(result.status){
    console.log("Note with title ",result.note.title," added");
  }else{
    console.log("Note with title ",result.note.title," already exixts");
  }
} else if(command === "list") {
  console.log(notes.getAll());
}else if(command === "read"){
    var result = notes.readNote(argv.title);
    debugger;
  if(result){
    console.log(`Title: ${result.title} and Body: ${result.body}`);
  }else{
    console.log("Note not found");
  }
}else if(command === "remove"){
  console.log((notes.removeNote(argv.title))?"Note removed":"Failed to remove note.");
}else{
  console.log("Command not found");
}
