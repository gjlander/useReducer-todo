function AddNewTodo({ title, setTitle, dispatchTasklists, listid }) {
    const handleTitleText = (e) => setTitle(e.target.value);

    const handleNewTodoSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        dispatchTasklists({ type: 'item_added', id: listid, title });
        setTitle('');
    };
    return (
        <form className='input-group mb-3' onSubmit={handleNewTodoSubmit}>
            <input
                type='text'
                className='form-control'
                id='textForNewTodo'
                placeholder='Add a new item...'
                aria-label='Add a new item...'
                aria-describedby='button-addon2'
                onChange={handleTitleText}
                value={title}
            />
            <button className='btn btn-primary' type='submit' id='newItemBtn'>
                Add
            </button>
        </form>
    );
}
export default AddNewTodo;
