'use client'
import { useState, useEffect } from 'react';


export default function TodoList() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  

  const updateTask = async (id, completed) => {
    console.log(`Updating task ${id} to completed: ${completed}`); // Debugging log
    const res = await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed }),
    });
    if (res.ok) {
      const updatedTask = await res.json();
      setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
    } else {
      console.error('Failed to update task');
    }
  };

  const deleteTask = async (id) => {
    const res = await fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      setTasks(tasks.filter(task => task.id !== id));
    } else {
      console.error('Failed to delete task');
    }
  };
  return (
    <div><div className="overflow-x-auto">
    <table className="table">
     
      <thead>
        <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>  
          <th className='py-3 px-6 text-center font-bold text-black'>Task</th>
          <th  className='py-3 px-6 text-center font-bold text-black'>Manage</th>
        </tr>
      </thead>
      <tbody>
       
        {tasks.map(task => (
       <tr key={task.id}>
          
             <td className=' py-3 px-6 text-center text-white uppercase' style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</td>
         
         <td className='py-3 px-6 text-center ' >
         <button className="btn btn-outline btn-success mx-10 text-sm" onClick={() => updateTask(task.id, !task.completed)}>
          {task.completed ? 'Undo' : 'Complete'}
         </button>
         <button  className="btn btn-outline btn-error text-sm"onClick={() => deleteTask(task.id)}>Delete</button>
         </td>
         
  </tr>
))}
      </tbody>
    </table>
  </div></div>
  )
}