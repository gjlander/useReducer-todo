import { useTasklistsDispatch } from '../contexts';
export default function DeleteTasklist({ listid }) {
    const dispatchTasklists = useTasklistsDispatch();
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
