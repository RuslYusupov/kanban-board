import { useContext, useState } from 'react';

import myContext from '../../../utils/myContext';

import { Draggable } from 'react-beautiful-dnd'; // React Beautiful DND



import './Task.css';

function Task ({ task, index }) {
    const { id, title } = task;
    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const { changeTaskTitle } = useContext(myContext);

    const handleClick = () => setOpen(!open);

    const handleChange = (e) => {
      setNewTitle(e.target.value);
    };

    const handleBlur = () => {
        newTitle ? changeTaskTitle(newTitle, id) : setNewTitle(title);
        setOpen(!open);
    };

    const handleKeyDown = (e) => [e.key === 'Enter' && handleBlur()];


    return (
        // <div className="task">
        //     
        // </div>
        <div className="task">
        {open ? (
          
            <div className="form-container-for-task">
                <input
                    className="form-for-task-rename"
                    autoFocus
                    value={newTitle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
            </div>
          
        ) : (
            <Draggable draggableId={id} index={index}>
                {(provided, snapshot) => (
                    <div className="form-container" isDragging={snapshot.isDragging} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <h4 onClick={handleClick}>{newTitle}</h4>
                    </div>
                )}
            </Draggable>
            
        )}
      </div>
    )
}

export default Task;

//https://github.com/floraCodes/trello-clone/blob/master/src/components/tasks/task/index.js