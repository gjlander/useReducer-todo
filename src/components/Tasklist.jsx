import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TasklistTitle from './TasklistTitle';
import HideDone from './HideDone';
import AddNewTodo from './AddNewTodo';
import TodoItem from './TodoItem';
import DeleteTasklist from './DeleteTasklist';

function Tasklist({ tasklists, dispatchTasklists }) {
    const [title, setTitle] = useState('');

    return (
        <div className='row justify-content-center'>
            <div className='col col-lg-6'>
                <Tabs>
                    <TabList>
                        {tasklists?.map((tasklist) => (
                            <Tab key={tasklist.tabkey}>
                                {tasklist.tasklistName}
                            </Tab>
                        ))}
                    </TabList>

                    {tasklists?.map((tasklist) => (
                        <TabPanel key={tasklist.listid}>
                            <TasklistTitle
                                {...tasklist}
                                // dispatchTasklists={dispatchTasklists}
                                dispatchTasklists={dispatchTasklists}
                            />
                            <HideDone
                                dispatchTasklists={dispatchTasklists}
                                {...tasklist}
                            />
                            <AddNewTodo
                                title={title}
                                setTitle={setTitle}
                                dispatchTasklists={dispatchTasklists}
                                tasklists={tasklists}
                                {...tasklist}
                            />
                            <ul className='list-group bg-light h-100 taskList'>
                                {tasklist.items.map((item) => (
                                    <TodoItem
                                        key={item.id}
                                        {...tasklist}
                                        {...item}
                                        dispatchTasklists={dispatchTasklists}
                                    />
                                ))}
                            </ul>
                            <DeleteTasklist
                                dispatchTasklists={dispatchTasklists}
                                {...tasklist}
                            />
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}
export default Tasklist;
