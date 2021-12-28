import React, { Component } from 'react'
import {AiFillDelete} from 'react-icons/ai'


class Overview extends Component {
    constructor(props){
        super(props)
       
    }
   

    render() {
       const { tasks, deleteItem } = this.props

        return (  
            <ul>
               {tasks.map((task) => {
                return (
                    <li key={task.id}                       
                        >
                        {task.text} 
                        <button className='delete-item' onClick={() => deleteItem(task.id)} >
                            <AiFillDelete />                                
                        </button>
                    </li>              
               )})}
            </ul>
        );
    }
}

export default Overview
