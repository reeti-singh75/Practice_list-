
function manageTasks(tasks) {
    let completed = [];
    let pending = [];
    let hours = 0;
    let high = Infinity;
    let highest=0;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status == "completed") {
            completed.push(tasks[i].title)
        }

        if (tasks[i].status == "pending") {
            pending.push(tasks[i].title)
        }

        if (tasks[i].priority < high && 0<tasks[i].priority ) {
            high = tasks[i].priority;
            highest=tasks[i];
        }

        hours = hours + tasks[i].estimatedTime;
    }

       let arrResult={
        completedTasks:completed,
        pendingTasks:pending,
        totaleHours:hours,
        highestPriorutyTask:highest
       };
    // return completed;
    // return pending;
    // return hours;
    return arrResult;
}


const tasks = [{ title: "Build Weather App", status: "completed", estimatedTime: 5, priority: 2 },
{ title: "Fix Login Bug", status: "pending", estimatedTime: 3, priority:1},
{ title: "Write Documentation", status: "completed", estimatedTime: 2, priority: 3 },
{ title: "Create Home Page UI", status: "pending", estimatedTime: 4, priority: 2 },]

console.log(manageTasks(tasks));
