
import React, { Component } from 'react'
import './personal_info_section.css'
import {BsLinkedin, BsInstagram} from "react-icons/bs";

export class Personal_info extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <section className='personal_info_section'>
                <h2>Personal Information</h2> 
                    <form>
                        <div className='title_fname_lname'>              
                            <input type='text' id='title' placeholder='Title' 
                            className='inputs text_input' name='title' />
                            <input type='text' id='first_name' placeholder='First Name' 
                            className='inputs text_input' name='first_name' required/>
                            <input type='text' id='last_name' placeholder='Last Name' 
                            className='inputs text_input' name='last_name' required />
                        </div>
                        <div className='email_phone_address' >              
                            <input type='email' id='email' placeholder='Email' 
                            className='inputs text_input' name='email' required />
                            <input type='tel' id='phone_number' placeholder='Phone Number' 
                            className='inputs text_input' name='phone_number' 
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            <input type='text' id='address' placeholder='Address' 
                            className='inputs text_input' name='address' required />
                        </div>

                        <div className='social_media' >
                            <div>
                            <BsLinkedin  /> <input type='text' id='linkedIn' placeholder='Your LinkedIn handle' 
                            className='inputs text_input' name='linkedIn' />                            
                            </div>
                            <div>
                            <BsInstagram /> <input type='text' id='instagram' placeholder='Your Instagram handle' 
                            className='inputs text_input' name='instagram' />                            
                            </div>
                        </div>

                        <div  className="personal_summary">
                            <label htmlFor="personal_summary">
                                Personal Summary <br/>
                                <textarea id='personal_summary' name='personal_summary' rows='5' cols='97' required />
                            </label>                           
                        </div>


                        <div className='personal_info_submit_edit_btn' >
                            <button className='submit_btn btn' >Submit this Section</button>
                            <button className='edit_btn btn' >Edit</button>
                        </div>
                   </form>

                
            </section>
        )
    }
}

export default Personal_info
