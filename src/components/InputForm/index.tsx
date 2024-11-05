'use client'

import React from 'react';
import Button from '../Button';
import TaskContainer from '../TaskContainer';
import { useState } from 'react';

const InputForm = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>('')

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]); 
            setNewTask(''); 
        }
    };

    const removeTask = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index)); 
    };

  return (
    <div className="bg-slate-600 flex flex-col p-5 h-full gap-5">
        <div className='flex flex-col md:flex-row gap-4 w-full'>
            <input
                className="p-2 w-full text-black overflow-hidden rounded"
                type="text"
                name="todo-input"
                placeholder="Write what you need to do here!"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <Button label="Add Task" onClick={addTask} />
        </div>
            <TaskContainer tasks={tasks} removeTask={removeTask} />
        </div>
  );
};

export default InputForm;