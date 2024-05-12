import { useState } from 'react';
import { useTasklistsDispatch } from '../contexts';
import EditForm from './EditForm';
function TodoItem({ id, done, title, hideDone, listid }) {
    const [editing, setEditing] = useState(false);

    const dispatchTasklists = useTasklistsDispatch();

    const toggleEditing = () => {
        setEditing((prev) => !prev);
    };

    const toggleDone = () => {
        dispatchTasklists({ type: 'item_done', listid, id });
    };
    const deleteTodo = () => {
        dispatchTasklists({ type: 'item_deleted', listid, id });
    };
    const editTodo = (newTitle) => {
        dispatchTasklists({ type: 'item_edited', listid, id, newTitle });
    };
    return (
        <li
            className={`list-group-item
            d-flex
            justify-content-between
            align-items-center
            gap-1 ${hideDone && done && 'd-none'}`}
        >
            {!editing ? (
                <>
                    <div className='d-flex me-auto gap-2'>
                        <input
                            type='checkbox'
                            checked={done}
                            onChange={toggleDone}
                            id={id}
                        />
                        <label
                            className={`form-check-label todoText ${
                                done && 'text-decoration-line-through'
                            }`}
                            htmlFor={id}
                        >
                            {title}
                        </label>
                    </div>
                    <button
                        type='button'
                        className='btn btn-success'
                        onClick={toggleEditing}
                    >
                        Edit
                    </button>
                    <button
                        type='button'
                        className='btn btn-danger'
                        onClick={deleteTodo}
                    >
                        Delete
                    </button>
                </>
            ) : (
                <EditForm
                    initialTitle={title}
                    toggleEditing={toggleEditing}
                    editTodo={editTodo}
                />
            )}
        </li>
    );
}
export default TodoItem;
