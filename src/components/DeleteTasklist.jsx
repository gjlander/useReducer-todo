export default function DeleteTasklist({ dispatchTasklists, listid }) {
    const deleteList = () => {
        dispatchTasklists({ type: 'list_deleted', id: listid });
    };
    return (
        <button
            type='submit'
            className='btn btn-danger mt-4'
            onClick={deleteList}
        >
            Delete this list
        </button>
    );
}
