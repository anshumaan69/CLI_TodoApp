const fs = require('fs')

const filePath = "./mytodo.json"



const loadTask=()=>{
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
        
    }
}
 
const saveTasks=(taskList)=>{
    const dataJSON=JSON.stringify(taskList)
    fs.writeFileSync(filePath,dataJSON)
    
}


const addTasks = (task)=>{
    const taskList = loadTask()
    taskList.push({task})
    saveTasks(taskList)
    console.log("Task added",task)
    
}




const listTask=()=>{
    const  tasks = loadTask()
    tasks.forEach((task,index) => console.log(`${index+1} - ${task.task}`)
    );





}

const removeTask=(index)=>{
    const tasks = loadTask()
    tasks.splice(index-1,1)
    saveTasks(tasks)
    console.log("Task removed",index)
}

//Taking the input on command line and performing the required function

//all the elements in the process.argv array is a string

const command = process.argv[2]

const argument = process.argv[3]


if (command==="add"){
    addTasks(argument)
}
else if(command ==="remove"){
    // removeTask(argument);
    removeTask(parseInt(argument))//use of the parseInt function it extracts the no. from a string
}
else if(command == "list"){
    listTask()
}
else{
    console.log("Command not found")
}
