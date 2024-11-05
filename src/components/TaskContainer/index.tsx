import React from 'react';
import Button from '../Button';

interface TaskContainerProps {
    tasks: string[];
    removeTask: (index: number) => void; 
}

const TaskContainer = ({ tasks, removeTask }: TaskContainerProps) => {
    return (
        <div className="bg-white h-full p-3 rounded shadow text-black relative">
            
            <div className='flex flex-col md:flex-row justify-center items-center w-full'>
                <p data-testid="taskCounter" className='md:absolute left-5'>number of tasks: {tasks.length}</p>
                <h3 className='' data-testid="taskCounterHeadline" >{tasks.length > 0 ? 'Your Tasks' : 'You do not have any tasks to do!'}</h3>
            </div>
            <ul className='flex flex-col gap-2'>
                {tasks.map((task, index) => (
                    <li className='flex items-center justify-between border-solid border-[1px] border-black rounded p-2' key={index}>{task} 
                    <Button label='delete' onClick={() => removeTask(index)} ></Button>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskContainer;