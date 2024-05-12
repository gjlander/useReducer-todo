import { useState } from 'react';
function EditForm({ toggleEditing, initialTitle, editTodo }) {
    const [titleEdit, setTitleEdit] = useState(initialTitle);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(titleEdit);
        toggleEditing();
    };
    return (
        <form className='input-group' onSubmit={handleSubmit}>
            <input
                type='text'
                className='form-control'
                value={titleEdit}
                onChange={(e) => setTitleEdit(e.target.value)}
            />
            <button type='submit' className='btn btn-success'>
                Confirm
            </button>
            <button
                type='button'
                className='btn btn-danger'
                onClick={toggleEditing}
            >
                Cancel
            </button>
        </form>
    );
}
export default EditForm;
