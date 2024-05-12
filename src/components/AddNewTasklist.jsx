export default function AddNewTasklist({
    tasklistName,
    setTasklistName,
    // tasklists,
    dispatchTasklists,
}) {
    const handleNewTasklistText = (e) => setTasklistName(e.target.value);
    const handleNewTasklistSubmit = (e) => {
        e.preventDefault();
        if (!tasklistName) return;
        dispatchTasklists({ type: 'list_added', tasklistName });
        setTasklistName('');
    };
    return (
        <form
            className='input-group mb-3'
            onSubmit={(e) => {
                handleNewTasklistSubmit(e);
            }}
        >
            <input
                type='text'
                className='form-control'
                id='textForNewTodo'
                placeholder='Make a new ToDuo list...'
                aria-label='Make a new ToDuo list...'
                aria-describedby='button-addon2'
                onChange={(e) => handleNewTasklistText(e)}
                value={tasklistName}
            />
            <button
                className='btn btn-outline-light'
                type='submit'
                id='newItemBtn'
            >
                Make List
            </button>
        </form>
    );
}
