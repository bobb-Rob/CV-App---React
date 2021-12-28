
import React, { Component } from 'react'
import Overview from './overview'
import uniqid from 'uniqid';


export class TaskApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: {
                text: '',
                id: uniqid()
            },
            tasks: [],
        }
    }

    handleChange = (e) => {
        this.setState({
           task: {
               text: e.target.value,
               id: this.state.task.id
           }
        })       
    }

    onSubmitBtn = (e) => {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: {text: '', id: uniqid()},
        })
    }

    deleteItem = (taskId) => {
        const tasks = this.state.tasks.filter((task) => task.id !== taskId)
        this.setState({tasks: tasks})
    }


    render() {
        const { task, tasks } = this.state

        return (     

            <div>
                <form  onSubmit={this.onSubmitBtn}>
                    <label htmlFor='inputTask' > Enter Task Here: 
                        <input 
                        id='inputTask'
                        type="text"
                        value={task.text}
                        onChange={this.handleChange}
                        />
                    </label>
                    <button type='submit' >Add Task</button>
                </form>


                <Overview 
                tasks={tasks} 
                deleteItem={this.deleteItem}
                />
            </div>
        )
    }
}

export default TaskApp
