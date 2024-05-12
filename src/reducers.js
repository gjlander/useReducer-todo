const tasklistsReducer = (tasklists, action) => {
    switch (action.type) {
        case 'list_added': {
            console.log(action.tasklistName);
            return [
                ...tasklists,
                {
                    tasklistName: action.tasklistName,
                    items: [],
                    hideDone: false,
                    listid: crypto.randomUUID(),
                    tabkey: crypto.randomUUID(),
                },
            ];
        }
        case 'list_deleted': {
            return tasklists.filter(
                (tasklist) => tasklist.listid !== action.id
            );
        }
        case 'list_name_updated': {
            return tasklists.map((tasklist) =>
                tasklist.listid === action.id
                    ? { ...tasklist, tasklistName: action.name }
                    : tasklist
            );
        }
        case 'toggle_hide': {
            return tasklists.map((tasklist) =>
                tasklist.listid === action.id
                    ? { ...tasklist, hideDone: !action.hideDone }
                    : tasklist
            );
        }
        case 'item_added': {
            return tasklists.map((tasklist) =>
                tasklist.listid === action.id
                    ? {
                          ...tasklist,
                          items: [
                              ...tasklist.items,
                              {
                                  title: action.title,
                                  done: false,
                                  id: crypto.randomUUID(),
                              },
                          ],
                      }
                    : tasklist
            );
        }
        case 'item_done': {
            return tasklists.map((tasklist) => {
                if (tasklist.listid === action.listid) {
                    const newItems = tasklist.items.map((item) =>
                        item.id === action.id
                            ? { ...item, done: !item.done }
                            : item
                    );
                    return { ...tasklist, items: newItems };
                } else {
                    return tasklist;
                }
            });
        }
        case 'item_deleted': {
            return tasklists.map((tasklist) => {
                if (tasklist.listid === action.listid) {
                    const newItems = tasklist.items.filter(
                        (item) => item.id !== action.id
                    );
                    return { ...tasklist, items: newItems };
                } else {
                    return tasklist;
                }
            });
        }
        case 'item_edited': {
            return tasklists.map((tasklist) => {
                if (tasklist.listid === action.listid) {
                    const newItems = tasklist.items.map((item) =>
                        item.id === action.id
                            ? { ...item, title: action.newTitle }
                            : item
                    );
                    return { ...tasklist, items: newItems };
                } else {
                    return tasklist;
                }
            });
        }
    }
};

export { tasklistsReducer };
