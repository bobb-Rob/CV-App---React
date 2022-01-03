import React, { Component } from 'react';
import Personal_info from './Personal_info_Section/Personal_info';
import {Education} from './Education/Education';
import Experience from './Experience&Skills/Experience';
import { NotableSkills } from './Experience&Skills/skills';
import { Reference } from './References/Reference';
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
             id: uniqid(),           
             submitted: false,
         }],
         skills: [{
            skill: '',
            id: uniqid(),
            submitted: false,
         },{
            skill: '',
            id: uniqid(),
            submitted: false,
         },],

         references: [{
            reference: '',           
            id: uniqid(),
            submitted: false,
         },]
    }

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this)
    this.onPersonalInfoSubmit = this.onPersonalInfoSubmit.bind(this)
    this.editPersonalInfoForm = this.editPersonalInfoForm.bind(this)
    this.handleEduChange =this.handleEduChange.bind(this)
    this.addEducation =this.addEducation.bind(this)
    this.deleteEducation =this.deleteEducation.bind(this)
    this.editEducation =this.editEducation.bind(this)
    this.handleExperienceChange = this.handleExperienceChange.bind(this)
    this.addExperience = this.addExperience.bind(this)
    this.onSubmitExperience = this.onSubmitExperience.bind(this)
    this.editExperience = this.editExperience.bind(this)

    this.handleSkillChange = this.handleSkillChange.bind(this)
    this.addSkill = this.addSkill.bind(this)
    this.deleteSkill = this.deleteSkill.bind(this)
    // this.onRadioChange = this.onRadioChange.bind(this)
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

    handleExperienceChange = (e, id) => {
        e.stopPropagation()
        const { name, value } = e.target        
        this.setState((prevState) => {
            const newExperience = prevState.experience.map((experience) => {
                if(experience.id === id){
                    return {...experience, [name]: value}
                }
                return experience;
            })
        return {...prevState, experience: [...newExperience]}
        }, () => console.log(this.state.experience))
    }


    addExperience = (e) => {
        e.stopPropagation()
        this.setState((prevState) => ({
            ...prevState,
            experience: [...prevState.experience,{
                position: '',
                company: '',
                city: '',
                from: '',
                to: '',
                id: uniqid(),           
                submitted: false,
            },]
        }))
    }


    onDeleteExperience = (id) => {
        this.setState((prevState) => {
            const newExperience = prevState.experience.filter(
              (experience) => experience.id !== id)
            return { ...prevState, experience: [...newExperience] }
          }, () => console.log(this.state.education))

    } 

    onSubmitExperience = (e) => {             
            e.preventDefault();
            console.log('experience submitted');    

            this.setState((prevState) => {
               return {...prevState,
                experience: [
                    ...prevState.experience.map((experience) => {
                       return { ...experience, submitted: true }   
                    })]
            }
        }, () => console.log(this.state)) 
         
    }

    editExperience = (e) => {
        e.stopPropagation();
        this.setState((prevState) => {
            return {...prevState,
                experience: [
                    ...prevState.experience.map((experience) => {
                       return { ...experience, submitted: false }   
                    })]
            }
        })
    }


    handleSkillChange = (e, id) => {
        const { name, value} = e.target
        this.setState((prevState) => {
            const newSkill = prevState.skills.map((skill) => {
                if(skill.id === id){
                    return {...skill, [name]: value}
                }
                return skill;
            })
        return {...prevState, skills: [...newSkill]}
        }, () => console.log(this.state.skills))
    }

    addSkill = (e) => {    
        e.stopPropagation()
        this.setState((prevState) => ({
            ...prevState,
            skills: [...prevState.skills,{                
                skill: '',
                id: uniqid(),           
                submitted: false,
            },]
        }))
        
    }

    deleteSkill = (id) => {
        this.setState((prevState) => {
            const newSkill = prevState.skills.filter(
              (skill) => skill.id !== id)
            return { ...prevState, skills: [...newSkill] }
          }, () => console.log(this.state.skills))

    }


    submitSkillForm = (e) => {
        e.preventDefault();
        console.log('Skill submitted');    

        this.setState((prevState) => {
           return {...prevState,
            skills: [
                ...prevState.skills.map((skill) => {
                   return { ...skill, submitted: true }   
                })]
        }
    }, () => console.log(this.state)) 
    }

    editSkill = (e) => {
        e.stopPropagation();
        this.setState((prevState) => {
            return {...prevState,
                skills: [
                    ...prevState.skills.map((skill) => {
                       return { ...skill, submitted: false }   
                    })]
            }
        })
    }

    handleReferenceChange = (e, id) => {
        const value = e.target.type === 'radio' ? e.target.checked : e.target.value;
        const { name } = e.target
        this.setState((prevState) => {
            const newReference = prevState.references.map((reference) => {
                if(reference.id === id){
                    return {...reference, [name]: value}
                }
                return reference;
            })
        return {...prevState, references: [...newReference]}
        }, () => console.log(this.state.references))
    }

    addReference = (e) => {    
        e.stopPropagation()
        this.setState((prevState) => ({
            ...prevState,
            references: [...prevState.references,{                
                reference: '',               
                id: uniqid(),           
                submitted: false,
            },]
        }))
        
    }

    deleteReference = (id) => {
        this.setState((prevState) => {
            const newReference = prevState.references.filter(
              (reference) => reference.id !== id)
            return { ...prevState, references: [...newReference] }
          }, () => console.log(this.state.references))

    }


    submitReferenceForm = (e) => {
        e.preventDefault();
        console.log('reference submitted');    

        this.setState((prevState) => {
           return {...prevState,
            references: [
                ...prevState.references.map((reference) => {
                   return { ...reference, submitted: true }   
                })]
        }
    }, () => console.log(this.state)) 
    }

    editReference = (e) => {
        e.stopPropagation();
        this.setState((prevState) => {
            return {...prevState,
                references: [
                    ...prevState.references.map((reference) => {
                       return { ...reference, submitted: false }   
                    })]
            }
        })
    }


    handleReferenceChange = (e, id) => {
        const value = e.target.type === 'radio' ? e.target.checked : e.target.value;
        const { name } = e.target
        this.setState((prevState) => {
            const newReference = prevState.references.map((reference) => {
                if(reference.id === id){
                    return {...reference, [name]: value}
                }
                return reference;
            })
        return {...prevState, references: [...newReference]}
        }, () => console.log(this.state.references))
    }



    // onRadioChange = (e) => {
    //     const { value } = e.target      
    //         this.setState((prevState) => {
    //         const newRef = prevState.references.map((reference) => {
    //             return {...reference, provided: value}
    //         })
    //         return {...prevState, references: [...newRef]}
    //     }, () => console.log(this.state.references))
    // }


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
                <Experience onChange={this.handleExperienceChange}
                arrayExperience={this.state.experience}
                addExperience={this.addExperience }
                onDeleteExperience = {this.onDeleteExperience}
                onExperienceSubmit={this.onSubmitExperience}
                editExperience={this.editExperience}
                />
                <NotableSkills 
                allSkills = {this.state.skills} onChange={this.handleSkillChange}
                addSkill={this.addSkill} deleteSkill={this.deleteSkill}
                submitSkillForm={this.submitSkillForm} editSkill={this.editSkill}
                /> 

                <Reference 
                allData={this.state.references} onChange={this.handleReferenceChange}
                addData={this.addReference} editData={this.editReference} 
                deleteData={this.deleteReference} submitForm={this.submitReferenceForm}
                
                />


            <div className='finalButtonSection' >
                <button>Preview CV</button>
                <button>Generate PDF</button>     

            </div>
               

            </div>
        )
    }
}

export {InputForms}
