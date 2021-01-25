import './Tasks.css';
import Task from "./Task/Task";
import AddTask from "./AddTask/AddTask";
import { Droppable } from 'react-beautiful-dnd'; // React Beautiful DND

function Tasks ({ listId, taskIds, tasks }) {
    return (
        <Droppable droppableId={listId}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                    {   
                        taskIds.map((taskId, index) => {
                            const task = tasks[taskId];
                            return <Task key={taskId} task={task} index={index} />;
                        })
                    }
                    {provided.placeholder}
                    <AddTask listId={listId} />
                </div>
            )}
        </Droppable>
    )
}

export default Tasks;

//https://github.com/floraCodes/trello-clone/blob/master/src/components/tasks/index.js
