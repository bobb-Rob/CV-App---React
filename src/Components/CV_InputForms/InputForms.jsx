import React, { Component } from 'react';
import Personal_info from './Personal_info_Section/Personal_info';
import {Education} from './Education/Education';
import Experience from './Experience&Skills/Experience';
import { NotableSkills } from './Experience&Skills/skills';
import uniqid from 'uniqid';
import './InputForms.css'

class InputForms extends Component {
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
            universityName: '',
            city: '',
            degree: '',
            subject: '',
            from: '',
            to: '',            
            id: uniqid(),
            submitted: false,
        }],
         experience: [{
             position: '',
             company: '',
             city: '',
             from: '',
             to: '',            
             submitted: false,
         }],
         skills: [{
            s1: '',
            submitted: false,
         }]
    }

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this)
    this.onPersonalInfoSubmit = this.onPersonalInfoSubmit.bind(this)
    this.editPersonalInfoForm = this.editPersonalInfoForm.bind(this)
    this.handleEduChange =this.handleEduChange.bind(this)
    this.addEducation =this.addEducation.bind(this)
    this.deleteEducation =this.deleteEducation.bind(this)
    this.editEducation =this.editEducation.bind(this)
}


    handlePersonalInfoChange = (e) => {
        this.setState({
            ...this.state,
            personalInfo: {
                ...this.state.personalInfo,
            [e.target.name]: e.target.value,
            }
            
        })
    }

    onPersonalInfoSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        this.setState({
            ...this.state,
            personalInfo: {
                ...this.state.personalInfo,
            submitted: true,
            }
        }, () => console.log(this.state))
    }

    editPersonalInfoForm = () => {
        this.setState({
            ...this.state,
            personalInfo: {
                ...this.state.personalInfo,
            submitted: false,
            }
        })
    }
  

    handleEduChange = (e,id) => {
        e.stopPropagation()
        const {name, value } = e.target
       
        this.setState((prevState) => {
            const newEducation = prevState.education.map((eduItem) => {
                if(eduItem.id === id){
                    return {...eduItem, [name]: value }
                }
                return eduItem
            })
            return {...prevState, education: [...newEducation]}
        })    
    }

    addEducation = (e) => {
        e.stopPropagation()
        this.setState((prevState) => ({
            ...prevState,
            education: [
                ...prevState.education,
                {
                    universityName: '',
                    city: '',
                    degree: '',
                    subject: '',
                    from: '',
                    to: '',                   
                    id: uniqid(),
                    submitted: false,
                },
            ],
        }))
    }

    deleteEducation = (id) => {
        this.setState((prevState) => {
          const newEducation = prevState.education.filter(
            (educationItem) => educationItem.id !== id)
          return { ...prevState, education: [...newEducation] }
        }, () => console.log(this.state.education))
      }
    
    onEducationSubmit = (e) => {   
            e.stopPropagation()     
            e.preventDefault();
            console.log('education submitted');      

            this.setState((prevState) => {
               return {...prevState,
                education: [
                    ...prevState.education.map((education) => {
                       return { ...education, submitted: true }   
                    })]
            }
        }, () => console.log(this.state))
    }  
      
    editEducation = (e) => {
        e.stopPropagation();
        this.setState((prevState) => {
            return {...prevState,
                education: [
                    ...prevState.education.map((education) => {
                       return { ...education, submitted: false }   
                    })]
            }
        })
    }





    render() {

        return (
            <div className='InputForms'>
                <Personal_info data={this.state.personalInfo}
                handleChange={this.handlePersonalInfoChange}
                onSubmit={this.onPersonalInfoSubmit}
                editForm={this.editPersonalInfoForm} 
                />
                <Education  allEducation={this.state.education} 
                onChange={this.handleEduChange} addEducation={this.addEducation}
                deleteEducation={this.deleteEducation}
                onEducationSubmit={this.onEducationSubmit} 
                editEducation={this.editEducation}            
                />              
                <Experience />
                <NotableSkills />                
            </div>
        )
    }
}

export {InputForms}
