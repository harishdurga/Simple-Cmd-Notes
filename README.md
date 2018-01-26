this a node js based simple notes application which runs from command line application. This application does four tasks Add, read, list and remove. the application stores data into the notes-data.json file. I have used yargs package to process arguments passed via command line.

To add a new note: 

node custom add -t="title of the note here" -b="and the body goes here"

To read a note: 

node custom read -t="title of the note to read"

To list all the notes: 

node custom list

Finally to remove a note: 

node custom remove -t="title of the note to remove"
