import { useState } from "react";
function EditForm({ toggleEditing, todoId, todoTitle, setTasklists, listid }) {
    const [titleEdit, setTitleEdit] = useState(todoTitle);
    const editTodo = () => {
        setTasklists((prev) =>
            prev.map((tasklist) => {
                if (tasklist.listid === listid) {
                    const newItems = tasklist.items.map((item) =>
                        item.id === todoId
                            ? { ...item, title: titleEdit }
                            : item
                    );
                    return { ...tasklist, items: newItems };
                } else {
                    return tasklist;
                }
            })
        );
    };
    return (
        <form
            className="input-group"
            onSubmit={(e) => {
                e.preventDefault();
                editTodo();
                toggleEditing();
            }}
        >
            <input
                type="text"
                className="form-control"
                value={titleEdit}
                onChange={(e) => setTitleEdit(e.target.value)}
            />
            <button type="submit" className="btn btn-success">
                Confirm
            </button>
            <button
                type="button"
                className="btn btn-danger"
                onClick={toggleEditing}
            >
                Cancel
            </button>
        </form>
    );
}
export default EditForm;
