import { useContext, useState } from 'react';
import myContext from '../../../utils/myContext';

import './AddTask.css';

function AddTask({ listId }) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');

    const { createNewTask } = useContext(myContext);

    const handleClick = () => setOpen(!open);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = () => {
        createNewTask(title, listId);
        setTitle('');
        setOpen(!open);
    };

    const handleBlur = () => {
        title ? handleSubmit() : setOpen(!open);
    };
    
    return(
        <div>
            {open ? (
                <div className="form-container">
                    <textarea
                        className="form-for-task"
                        placeholder="Enter a title for this card..."
                        value={title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoFocus
                    />
                    <div className="button-container">
                        <button className="add-task-btn">Add Task</button>
                        <span className="close-add-task" onMouseDown={handleClick}>x</span>
                    </div>
                </div>
                ) : (
                    <p onClick={handleClick} className="add-new-btn">+ Add New Task</p>
                )
            }
        </div>
    )
}

export default AddTask;
