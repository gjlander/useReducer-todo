import { createContext, useContext } from 'react';

const TasklistsContext = createContext(null);
const TasklistsDispatchContext = createContext(null);

const useTasklists = () => {
    return useContext(TasklistsContext);
};
const useTasklistsDispatch = () => {
    return useContext(TasklistsDispatchContext);
};

export {
    TasklistsContext,
    TasklistsDispatchContext,
    useTasklists,
    useTasklistsDispatch,
};
