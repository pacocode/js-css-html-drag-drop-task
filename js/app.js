const taskContainers = document.querySelectorAll('.task-container');
const tasks = document.querySelectorAll('.task');

let taskDragged;

const dragStart = (e) => {
    //console.log(e.target);
    taskDragged = e.target;
}

const dragDrop = (e) => {
    console.log(e.target);
    e.target.append(taskDragged);
}

const dragOver = (e) => {
    e.preventDefault();
}

tasks.forEach(task => task.addEventListener('dragstart', dragStart));

taskContainers.forEach(taskContainer => {
    taskContainer.addEventListener('drop', dragDrop);
    taskContainer.addEventListener('dragover', dragOver);
});
