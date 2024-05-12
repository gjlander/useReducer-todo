import AddNewTasklist from "./AddNewTasklist";
function Header({ tasklistName, setTasklistName, tasklists, setTasklists }) {
    return (
        <div className="row justify-content-center mb-4">
            <div className=" col col-lg-8 bg-info rounded p-3">
                <h1 className="display-1 fw-bold mb-4">ToDuo</h1>
                <AddNewTasklist
                    tasklists={tasklists}
                    setTasklists={setTasklists}
                    tasklistName={tasklistName}
                    setTasklistName={setTasklistName}
                />
            </div>
        </div>
    );
}

export default Header;
