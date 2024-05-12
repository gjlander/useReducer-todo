import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TasklistTitle from "./TasklistTitle";
import HideDone from "./HideDone";
import AddNewTodo from "./AddNewTodo";
import TodoItem from "./TodoItem";
import DeleteTasklist from "./DeleteTasklist";

function Tasklist({ setTasklists, tasklists }) {
    const [title, setTitle] = useState("");

    return (
        <div className="row justify-content-center">
            <div className="col col-lg-6">
                <Tabs>
                    <TabList>
                        {tasklists.map((tasklist) => (
                            <Tab key={tasklist.tabkey}>
                                {tasklist.tasklistName}
                            </Tab>
                        ))}
                    </TabList>

                    {tasklists.map((tasklist) => (
                        <TabPanel key={tasklist.listid}>
                            <TasklistTitle
                                {...tasklist}
                                setTasklists={setTasklists}
                            />
                            <HideDone
                                {...tasklist}
                                setTasklists={setTasklists}
                            />
                            <AddNewTodo
                                title={title}
                                setTitle={setTitle}
                                setTasklists={setTasklists}
                                tasklists={tasklists}
                                {...tasklist}
                            />
                            <ul className="list-group bg-light h-100 taskList">
                                {tasklist.items.map((item) => (
                                    <TodoItem
                                        key={item.id}
                                        {...tasklist}
                                        {...item}
                                        setTasklists={setTasklists}
                                    />
                                ))}
                            </ul>
                            <DeleteTasklist
                                setTasklists={setTasklists}
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
