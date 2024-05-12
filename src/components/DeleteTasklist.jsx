export default function DeleteTasklist({ setTasklists, listid }) {
    const deleteList = () => {
        setTasklists((prev) =>
            prev.filter((tasklist) => tasklist.listid !== listid)
        );
    };
    return (
        <button
            type="submit"
            className="btn btn-danger mt-4"
            onClick={deleteList}
        >
            Delete this list
        </button>
    );
}
