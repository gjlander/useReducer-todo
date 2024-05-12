import { useState } from "react";
import EditForm from "./EditForm";
function TodoItem({ id, done, title, hideDone, setTasklists, listid }) {
    const [editing, setEditing] = useState(false);
   
    const toggleEditing = () => {
        setEditing((prev) => !prev);
    };

    const toggleDone = () => {
        setTasklists((prev) =>
            prev.map((tasklist) => {
                if (tasklist.listid === listid) {
                    const newItems = tasklist.items.map((item) =>
                        item.id === id ? { ...item, done: !item.done } : item
                    );
                    return { ...tasklist, items: newItems };
                } else {
                    return tasklist;
                }
            })
        );
    };
    const deleteTodo = () => {
        setTasklists((prev) =>
            prev.map((tasklist) => {
                if (tasklist.listid === listid) {
                    const newItems = tasklist.items.filter(
                        (item) => item.id !== id
                    );
                    return { ...tasklist, items: newItems };
                } else {
                    return tasklist;
                }
            })
        );
    };
    return (
        <li
            className={`list-group-item
            d-flex
            justify-content-between
            align-items-center
            gap-1 ${hideDone && done && "d-none"}`}
        >
            {!editing ? (
                <>
                    <div className="d-flex me-auto gap-2">
                        <input
                            type="checkbox"
                            checked={done}
                            onChange={toggleDone}
                            id={id}
                        />
                        <label
                            className={`form-check-label todoText ${
                                done && "text-decoration-line-through"
                            }`}
                            htmlFor={id}
                        >
                            {title}
                        </label>
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={toggleEditing}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={deleteTodo}
                    >
                        Delete
                    </button>
                </>
            ) : (
                <EditForm
                    todoId={id}
                    todoTitle={title}
                    toggleEditing={toggleEditing}
                    setTasklists={setTasklists}
                    listid={listid}
                />
            )}
        </li>
    );
}
export default TodoItem;
