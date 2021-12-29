import React, { Component } from 'react'


export class Experience extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <section className='experienceSection' >
            <form >
                <h2>Experience</h2> 
                <div className='experienceInputs' >                           
                    <input type='text' id='position' placeholder='position' 
                    className='position experience' name='position' required />
                    <input type='text' id='company' placeholder='Company' 
                    className='company experience' name='company' required />                     
                    <input type='text' id='city' placeholder='City' 
                    className='city experience' name='city' required/>                           
                    <input type='date' id='fromDate' placeholder='From' 
                    className='fromDate experience' name='fromDate' required />             
                    <input type='date' id='toDate' placeholder='To' 
                    className='toDate experience' name='toDate' required />             
                </div>

                <div className='experience_submit_edit_btn' >
                        <button className='submit_btn btn' >Submit this Section</button>
                        <button className='edit_btn btn' >Edit</button>
                        <button className='edit_btn btn' >Add</button>
                        <button className='edit_btn btn' >Delete</button>
                </div>
            </form>
            
        </section>
        )
    }
}

export default Experience


