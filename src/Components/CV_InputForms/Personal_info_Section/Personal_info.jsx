
import React, { Component } from 'react'
import './personal_info_section.css'
import {BsLinkedin, BsInstagram} from "react-icons/bs";

export class Personal_info extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            linkedIn: '',
            instagram: '',
            personalSummary: '',
            submitted: false,
            edit: false        
        }
    }
    
    handleChange = (e) => {
        this.setState({
            // ...this.state,
            [e.target.name]: e.target.value
        }, () => console.log(this.state))
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        this.setState({
            submitted: true,
        }, () => console.log(this.state))
    }

    editForm = () => {
        this.setState({
            submitted: false,
        })

    }

    render() {
        const {  title, firstName, lastName, 
            email, phoneNumber, address, 
            linkedIn, instagram, personalSummary, submitted } = this.state

        return (
            <section className='personal_info_section'>
                <h2>Personal Information {submitted ? 'Submitted' : null }</h2> 

                {submitted ? null : 
                <form onSubmit={ this.onSubmit } >
                    <div className='title_fname_lname'>              
                        <input type='text' id='title' placeholder='Title' 
                        className='inputs text_input' name='title' value={title}
                        onChange={this.handleChange}
                        />

                        <input type='text' id='first_name' placeholder='First Name' 
                        className='inputs text_input' name='firstName' value={firstName } 
                        onChange={this.handleChange}
                        required/>

                        <input type='text' id='last_name' placeholder='Last Name' 
                        className='inputs text_input' name='lastName' value={lastName} 
                        onChange={this.handleChange}
                        required />
                    </div>
                    <div className='email_phone_address' > 

                        <input type='email' id='email' placeholder='Email' 
                        className='inputs text_input' name='email' value={email} 
                        onChange={this.handleChange}
                        required />

                        <input type='tel' id='phone_number' placeholder='Phone Number' 
                        className='inputs text_input' name='phoneNumber' 
                         required value={phoneNumber}
                        onChange={this.handleChange}
                        />

                        <input type='text' id='address' placeholder='Address' 
                        className='inputs text_input' name='address' value={address} 
                        onChange={this.handleChange}
                        required />
                    </div>

                    <div className='social_media' >
                        <div>
                        <BsLinkedin  /> <input type='text' id='linkedIn' placeholder='Your LinkedIn handle' 
                        className='inputs text_input' name='linkedIn' value={linkedIn} 
                        onChange={this.handleChange}
                        />                                                        
                        </div>

                        <div>
                        <BsInstagram /> <input type='text' id='instagram' placeholder='Your Instagram handle' 
                        className='inputs text_input' name='instagram' value={instagram} 
                        onChange={this.handleChange}
                        />                            
                        </div>

                    </div>

                    <div  className="personal_summary">
                        <label htmlFor="personal_summary">
                            Personal Summary <br/>

                            <textarea id='personal_summary' name='personalSummary' 
                            rows='5' cols='97' value={personalSummary} 
                            onChange={this.handleChange}
                            required />

                        </label>                           
                    </div>


                    <div className='personal_info_submit_edit_btn' >
                        <button type='submit'  className='submit_btn btn' >Submit this Section</button>                       
                    </div>
                </form>
                }    
                
                { submitted ? <button className='edit_btn btn' onClick={this.editForm} >Edit</button> : null

                }
                                          
            </section>
        )
    }
}

export default Personal_info
