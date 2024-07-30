'use client'

import { FaPlus } from "react-icons/fa6"
import Modal from '../components/Model'
import { useState, useEffect } from 'react';

export default function AddTask() {
  
  const [modalOpen,setModalOpen]=useState(false);
  const [newTaskValue,setNewTaskValue]=useState('');
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');


  useEffect(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = async () => {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTask }),
    });
    const task = await res.json();
    setTasks([...tasks, task]);
    setNewTask('');
  };


  return ( 

    <div>
      <button onClick={() =>setModalOpen(true)} className='btn btn-primary w-full'>Add New Task
      <FaPlus className="ml-2"size={18}/>
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <form>
              <h3 className='font-bold text-lg'>
                Add new task
              </h3>
              <div className='modal-action'>
              <input
               value={newTask}
               onChange={e=>setNewTask(e.target.value)} 
               type="text" 
               placeholder="Type here" 
               className="input input-bordered w-full w-full" />
              <button type='submit' className='btn' onClick={addTask} >Submit</button>
              
              
              </div>
          </form>
      </Modal>
      
    </div>
  )
}
