import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]); //En princiío mio lista esta vacía []
  const[newTasks, setNewTask] = useState(""); 


  const handleInputChange = (event) => {

    setNewTask(event.target.value);
    
    };
    
    const handleAddTask = () => {

      if(newTasks.trim() !== "") {
        setTasks([...tasks, newTasks]);
        setNewTask('');
      }
    };

    const handleDeleteTask = (index) => {
      const updatedTasks = [...tasks]; //haceme una copia de todas las tareas y guardalas aca
      updatedTasks.splice(index, 1); //splice va a ubicar el elemento según index y borrara un elemento.
      setTasks(updatedTasks);
    };

  return (
    <>
      <div>
        <h1>Lista de Tareas</h1>
        <input type="text"
        placeholder='Agregar tarea'
        value={newTasks}  
        onChange={handleInputChange}
        />
      <button onClick={handleAddTask}>Agregar Tarea</button>
    <ul>
      {tasks.map((task, index) => (
        //index = 0
      <li key={index}>
        {/*Lavar Ropa */}
        {task}
        <button onClick={() => handleDeleteTask(index)}>Eliminar</button>

      </li>

      
          ))}
    </ul>

   </div>
    </>
  )
}

export default App
