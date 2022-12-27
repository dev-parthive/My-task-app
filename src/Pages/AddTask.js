import React from 'react';
import style from './AddTask.module.css'
const AddTask = () => {
    return (
        <div className='flex justify-center items-center add-task-container'>
        <form action="">
            <label htmlFor="task">Task</label>
            <input type="text" id="task" />
        </form>
        </div>
    );
};

export default AddTask;