// // #! /usr/bin/env node
import inquirer, { QuestionCollection } from "inquirer";
var todos: any[] = [];
var questions = [{
    name: "todo",
    type: "list",
    message: "  Do you want to add or delete something in your todos list?",
    choices: ["Add", "Delete", "Edit"]
},
]
var firstQuestion = [{
    name: "inputValue",
    type: "input",
    message: "Please enter something in you todo List"
}]

var ADD = await inquirer.prompt(firstQuestion)
if(!ADD.inputValue){
    console.log(`Please enter something`)
}
//REST OF THE CODE
else{todos.push(ADD.inputValue)
    var ask1 = await inquirer.prompt({
        name: "AddOrDeleteOrEditMore",
        type: "confirm",
        default: "false"
    })
    var condition1 = true
    condition1 = ask1.AddOrDeleteOrEditMore
    var condition = true
    if(condition1===false){
        for (var i = 0; i < todos.length; i++) {
            console.log(todos[i])
        }
    }


//LOOP STARTS
while (condition && condition1) {

    var addTask = await inquirer.prompt(questions);
    if (addTask.todo === "Add") {
        var addTask2 = await inquirer.prompt(
            {
                name: "todo2",
                type: "input",
                message: "What do you want to add ?"
            }
        )
        todos.push(addTask2.todo2)

    } else if (addTask.todo === "Delete") {
        var addTask4 = await inquirer.prompt(
            {
                name: "element",
                type: "list",
                message: "Please enter the index number of the element you want to edit",
                choices: todos.map(item => item)
            })
        var indexFind1 = todos.indexOf(addTask4.element)
        todos.splice(indexFind1, 1)
    }
    else {
        var addTask3 = await inquirer.prompt([
            {
                name: "index",
                type: "list",
                message: "Please enter the index number of the element you want to edit",
                choices: todos.map(item => item)
            },
            {
                name: "newElement",
                type: "input",
                message: "Please enter the value of the element you want to edit/update"
            }]
        )
        var indexFind = todos.indexOf(addTask3.index)
        todos[indexFind] = addTask3.newElement
    }
    var ask = await inquirer.prompt({
        name: "AddOrDeleteOrEditMore",
        type: "confirm",
        default: "false"
    })
    condition = ask.AddOrDeleteOrEditMore


    for (var i = 0; i < todos.length; i++) {
        console.log(todos[i])
    }
}
}






