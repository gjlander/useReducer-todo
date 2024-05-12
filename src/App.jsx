import { useState, useEffect, useReducer } from 'react';
import Header from './components/Header';
import Tasklist from './components/Tasklist';
import { tasklistsReducer } from './reducers';

function App() {
    // const [tasklists, setTasklists] = useState(
    //     JSON.parse(localStorage.getItem("tasklists")) || []
    // );
    const [tasklists, dispatchTasklists] = useReducer(
        tasklistsReducer,
        JSON.parse(localStorage.getItem('tasklists')) || []
    );
    const [tasklistName, setTasklistName] = useState('');

    useEffect(() => {
        tasklists.length
            ? localStorage.setItem('tasklists', JSON.stringify(tasklists))
            : localStorage.removeItem('tasklists');
    }, [tasklists]);

    return (
        <>
            <div className='container-fluid text-center bg-primary-subtle min-vh-100 p-4'>
                <Header
                    tasklists={tasklists}
                    dispatchTasklists={dispatchTasklists}
                    // setTasklists={setTasklists}
                    tasklistName={tasklistName}
                    setTasklistName={setTasklistName}
                />
                <Tasklist
                    tasklists={tasklists}
                    dispatchTasklists={dispatchTasklists}
                    // setTasklists={setTasklists}
                />
            </div>
        </>
    );
}

export default App;
