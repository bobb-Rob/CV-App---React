import React, { Component } from 'react'
import './education.css'

export class Education extends Component {
constructor(props) {
    super(props)

    this.state = {
         
    }
}


    render() {
const {  } = this.props

        return (
            <section className='educationSection' >
                <form >
                    <h2>Education</h2> 
                    <div className='educationInputs' >                           
                        <input type='text' id='universityName' placeholder='University name' 
                        className='universityName education' name='universityName' required />
                        <input type='text' id='city' placeholder='City' 
                        className='city education' name='city' required/>
                        <input type='text' id='degree' placeholder='Degree' 
                        className='degree education' name='degree' required />             
                        <input type='text' id='subject' placeholder='Subject' 
                        className='subject education' name='subject' required />             
                        <input type='date' id='fromDate' placeholder='From' 
                        className='fromDate education' name='fromDate' required />             
                        <input type='date' id='toDate' placeholder='To' 
                        className='toDate education' name='toDate' required />             
                    </div>

                    <div className='education_submit_edit_btn' >
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

export default Education
