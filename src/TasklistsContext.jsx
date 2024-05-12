import { useReducer, useEffect } from 'react';
import { tasklistsReducer } from './reducers';
import { TasklistsContext, TasklistsDispatchContext } from './contexts';

const TasklistsProvider = ({ children }) => {
    const [tasklists, dispatchTasklists] = useReducer(
        tasklistsReducer,
        JSON.parse(localStorage.getItem('tasklists')) || []
    );
    useEffect(() => {
        tasklists.length
            ? localStorage.setItem('tasklists', JSON.stringify(tasklists))
            : localStorage.removeItem('tasklists');
    }, [tasklists]);
    return (
        <TasklistsContext.Provider value={tasklists}>
            <TasklistsDispatchContext.Provider value={dispatchTasklists}>
                {children}
            </TasklistsDispatchContext.Provider>
        </TasklistsContext.Provider>
    );
};

export default TasklistsProvider;
