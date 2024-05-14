import React, { useState } from 'react';

const TaskList = () => {

const [tasks, setTasks] = useState([]);

React.useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) => response.json())
.then((data) => setTasks(data))
.catch((error) => console.error('Error fetching tasks:', error));
}, []); 

return (
<div className="container mt-5" class="card text-white bg-primary mb-3"  >
<h2 >Lista de Tareas</h2>
<ul class="list-group">
{tasks.map((task) => (
<li class="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center" key={task.id}>{task.title}</li>
))}
</ul>
</div>
);};

export default TaskList;