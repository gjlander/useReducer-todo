import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasklist from "./components/Tasklist";

function App() {
    const [tasklists, setTasklists] = useState(
        JSON.parse(localStorage.getItem("tasklists")) || []
    );
    const [tasklistName, setTasklistName] = useState("");

    useEffect(() => {
        tasklists.length
            ? localStorage.setItem("tasklists", JSON.stringify(tasklists))
            : localStorage.removeItem("tasklists");
    }, [tasklists]);

    return (
        <>
            <div className="container-fluid text-center bg-primary-subtle min-vh-100 p-4">
                <Header
                    tasklists={tasklists}
                    setTasklists={setTasklists}
                    tasklistName={tasklistName}
                    setTasklistName={setTasklistName}
                />
                <Tasklist tasklists={tasklists} setTasklists={setTasklists} />
            </div>
        </>
    );
}

export default App;
