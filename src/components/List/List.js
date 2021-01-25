import './List.css';
import Tasks from "../Tasks/Tasks";
import ListTitle from "./ListTitle/ListTitle";

function List ({ list, tasks }) {
    const { id, title, taskIds } = list;
    return (
        <article className="card-list">
            <ListTitle title={title} listId={id} />
            <div className="tasksList">
                <Tasks taskIds={taskIds} tasks={tasks} listId={id} />
            </div>
        </article>
    )
}

export default List;