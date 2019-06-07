import React from "react";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'task one'
                }, {
                    id: 2,
                    text: 'task two'
                }, {
                    id: 3,
                    text: 'task three'
                }
            ]
        };
    }
    remove(id) {
        const removeTask = this.state.data.filter(todoList => todoList.id !== id);
        this.setState({data: removeTask});
    }
}

export default TodoList;

// export default [
//     {
//         task: 'one',
//         description: ''
//     },
//     {
//         task: 'two',
//         description: ''
//     },
//     {
//         task: 'three',
//         description: ''
//     },
//     {
//         task: 'four',
//         description: ''
//     }
// ]
