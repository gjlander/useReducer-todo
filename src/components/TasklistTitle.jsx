import { useState } from 'react';
import { useTasklistsDispatch } from '../contexts';

export default function TasklistTitle({ tasklistName, listid }) {
    const [editingTitle, setEditingTitle] = useState(false);
    const [titleEdit, setTitleEdit] = useState(tasklistName);
    const dispatchTasklists = useTasklistsDispatch();

    const toggleEditingTitle = () => setEditingTitle((prev) => !prev);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTasklists({
            type: 'list_name_updated',
            id: listid,
            name: titleEdit,
        });
        toggleEditingTitle();
    };
    return (
        <div className='d-flex justify-content-center my-3'>
            {!editingTitle ? (
                <h2 className='display-4' onClick={toggleEditingTitle}>
                    {tasklistName}
                </h2>
            ) : (
                <form className='input-group w-25' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className='form-control'
                        value={titleEdit}
                        onChange={(e) => setTitleEdit(e.target.value)}
                    />

                    <button
                        type='button'
                        className='btn btn-close'
                        aria-label='Close'
                        onClick={toggleEditingTitle}
                    ></button>
                </form>
            )}
        </div>
    );
}
