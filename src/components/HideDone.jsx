export default function HideDone({ hideDone, listid, setTasklists }) {
    const toggleHideDone = () => {
        setTasklists((prev) =>
            prev.map((tasklist) =>
                tasklist.listid === listid
                    ? { ...tasklist, hideDone: !hideDone }
                    : tasklist
            )
        );
    };
    return (
        <div
            className="form-check d-flex justify-content-center
        "
        >
            <input
                className="form-check-input me-2 mb-4"
                type="checkbox"
                checked={hideDone}
                onClick={toggleHideDone}
                value=""
                // id="flexCheckChecked"
            />
            <label
                className="form-check-label"
                // htmlFor="flexCheckChecked"
            >
                Hide Done
            </label>
        </div>
    );
}
