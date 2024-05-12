import { useState } from "react";
export default function TasklistTitle({ tasklistName, listid, setTasklists }) {
    const [editingTitle, setEditingTitle] = useState(false);
    const [titleEdit, setTitleEdit] = useState(tasklistName);
    const toggleEditingTitle = () => setEditingTitle((prev) => !prev);
    const editTitle = () =>
        setTasklists((prev) =>
            prev.map((tasklist) =>
                tasklist.listid === listid
                    ? { ...tasklist, tasklistName: titleEdit }
                    : tasklist
            )
        );
    return (
        <div className="d-flex justify-content-center my-3">
            {!editingTitle ? (
                <h2 className="display-4" onClick={toggleEditingTitle}>
                    {tasklistName}
                </h2>
            ) : (
                <form
                    className="input-group w-25"
                    onSubmit={(e) => {
                        e.preventDefault();
                        editTitle();
                        toggleEditingTitle();
                    }}
                >
                    <input
                        type="text"
                        className="form-control"
                        value={titleEdit}
                        onChange={(e) => setTitleEdit(e.target.value)}
                    />

                    <button
                        type="button"
                        className="btn btn-close"
                        aria-label="Close"
                        onClick={toggleEditingTitle}
                    ></button>
                </form>
            )}
        </div>
    );
}
