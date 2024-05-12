export default function AddNewTasklist({
    tasklistName,
    setTasklistName,
    tasklists,
    setTasklists,
}) {
    const handleNewTasklistText = (e) => setTasklistName(e.target.value);
    const handleNewTasklistSubmit = (e) => {
        e.preventDefault();
        if (!tasklistName) return;
        const newTasklists = [
            ...tasklists,
            {
                tasklistName,
                items: [],
                hideDone: false,
                listid: crypto.randomUUID(),
                tabkey: crypto.randomUUID(),
            },
        ];
        setTasklists(newTasklists);
        setTasklistName("");
    };
    return (
        <form
            className="input-group mb-3"
            onSubmit={(e) => {
                handleNewTasklistSubmit(e);
            }}
        >
            <input
                type="text"
                className="form-control"
                id="textForNewTodo"
                placeholder="Make a new ToDuo list..."
                aria-label="Make a new ToDuo list..."
                aria-describedby="button-addon2"
                onChange={(e) => handleNewTasklistText(e)}
                value={tasklistName}
            />
            <button
                className="btn btn-outline-light"
                type="submit"
                id="newItemBtn"
            >
                Make List
            </button>
        </form>
    );
}
