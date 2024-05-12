const tasklistsReducer = (tasklists, action) => {
    switch (action.type) {
        case 'added': {
            return [
                ...tasklists,
                {
                    items: [],
                    hideDone: false,
                    listid: crypto.randomUUID(),
                    tabkey: crypto.randomUUID(),
                },
            ];
        }
    }
};

export { tasklistsReducer };
