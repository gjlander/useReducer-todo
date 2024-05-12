function AddNewTodo({ title, setTitle, setTasklists, listid, items }) {
    const handleTitleText = (e) => setTitle(e.target.value);

    const handleNewTodoSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        const updatedItems = [
            ...items,
            {
                title,
                done: false,
                id: crypto.randomUUID(),
            },
        ];

        setTasklists((prev) =>
            prev.map((tasklist) =>
                tasklist.listid === listid
                    ? { ...tasklist, items: [...updatedItems] }
                    : tasklist
            )
        );
        setTitle("");
    };
    return (
        <form
            className="input-group mb-3"
            onSubmit={(e) => {
                handleNewTodoSubmit(e);
            }}
        >
            <input
                type="text"
                className="form-control"
                id="textForNewTodo"
                placeholder="Add a new item..."
                aria-label="Add a new item..."
                aria-describedby="button-addon2"
                onChange={handleTitleText}
                value={title}
            />
            <button className="btn btn-primary" type="submit" id="newItemBtn">
                Add
            </button>
        </form>
    );
}
export default AddNewTodo;
