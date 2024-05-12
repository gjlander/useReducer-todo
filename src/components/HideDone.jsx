export default function HideDone({ hideDone, listid, dispatchTasklists }) {
    const toggleHideDone = () => {
        dispatchTasklists({
            type: 'toggle_hide',
            id: listid,
            hideDone,
        });
        // setTasklists((prev) =>
        //     prev.map((tasklist) =>
        //         tasklist.listid === listid
        //             ? { ...tasklist, hideDone: !hideDone }
        //             : tasklist
        //     )
        // );
    };
    return (
        <div
            className='form-check d-flex justify-content-center
        '
        >
            <input
                className='form-check-input me-2 mb-4'
                type='checkbox'
                checked={hideDone}
                onChange={toggleHideDone}
                id={listid}
            />
            <label className='form-check-label' htmlFor={listid}>
                Hide Done
            </label>
        </div>
    );
}
