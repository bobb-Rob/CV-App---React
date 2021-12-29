import React, { Component } from 'react'
import Personal_info from './Personal_info_Section/Personal_info'
import Education from './Education/Education'
import Experience from './Experience&Skills/Experience'
import { NotableSkills } from './Experience&Skills/skills'
import './CV_holder.css'

export class CV_holder extends Component {
constructor(props) {
    super(props)

    this.state = {
         personalInfo: {
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
         },
         education: [{
             university: '',
             city: '',
             degree: '',
             subject: '',
             from: '',
             to: '',
             submitted: false,
             edit: false
         }],
         experience: [{
             position: '',
             company: '',
             city: '',
             from: '',
             to: '',
             submitted: false,
             edit: false
         }],
         skills: [{
            s1: ''
         }]
    }
}


    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

    }




    render() {
        return (
            <div className='CV_holder'>
                <Personal_info  />
                <Education />
                <Experience />
                <NotableSkills />                
            </div>
        )
    }
}

export default CV_holder
