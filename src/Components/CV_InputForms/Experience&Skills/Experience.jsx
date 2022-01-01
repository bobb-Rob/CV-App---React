import React, { Component } from 'react'


export class Experience extends Component {
    constructor(props) {
        super(props)
           
    }
    

    render() {
        const { arrayExperience, onChange, addExperience, editExperience, onExperienceSubmit, onDeleteExperience  } = this.props

         const allExperience = arrayExperience.map((experience) => {
            return (
                <div className='experienceInputs' key={experience.id} > 
                    <input type='text' id={experience.id} placeholder='position' 
                    className='position experience' name='position' 
                    value={experience.position} onChange={(e) => onChange(e, experience.id)}
                    required />

                    <input type='text' id='company' placeholder='Company' 
                    className='company experience' name='company' 
                    value={experience.company}onChange={(e) => onChange(e, experience.id)}
                    required /> 

                    <input type='text' id='city' placeholder='City' 
                    className='city experience' name='city' 
                    value={experience.city} onChange={(e) => onChange(e, experience.id)}
                    required/>  

                   
                    <input type='date' id='fromDate' placeholder='From' 
                    className='fromDate experience' name='fromDate' 
                    value={experience.from} onChange={(e) => onChange(e, experience.id)}
                    />  

                    <input type='date' id='toDate' placeholder='To' 
                    className='toDate experience' name='toDate' 
                    value={experience.to} onChange={(e) => onChange(e, experience.id)}
                    />

                     <button className='delete_btn btn' type='button'
                     onClick={() => onDeleteExperience(experience.id)}
                     >Delete</button>
                </div>
            )
         })
        
         const notEmpty = () => arrayExperience.length > 0 ? true: false;


         const notSubmitted = () => {
             let getStatus = arrayExperience.some((exp) =>
             exp.submitted === false); 
             if(getStatus){
                 return true;
             }else{
                 return false;
             }           
         }      

         console.log(arrayExperience)
         console.log(notEmpty())
         console.log(notSubmitted())


        return (
            <section className='experienceSection' >
            <form  id='experienceForm' onSubmit={(e) => onExperienceSubmit(e)}  >
                <h2>Experience {!notSubmitted && <span>Submitted</span> }  </h2> 

                { notSubmitted() && allExperience}

                <div className='experience_submit_edit_btn' >
                {(notEmpty() && notSubmitted())  &&
                    <div>
                        <button form='experienceForm' type='submit' className='submit_btn btn'                        
                        >Submit this Section</button>

                        <button type='button' className='edit_btn btn'
                         onClick={(e) => addExperience(e) }
                        >Add</button>                       
                    </div>
                }
                 {(!notEmpty() && !notSubmitted())   && 
                         <button type='button' className='edit_btn btn' 
                         onClick={(e) => addExperience(e) }>
                         Add</button>
                 }

                { (!notSubmitted() &&  notEmpty())   &&
                        <button type='button' className='edit_btn btn' 
                        onClick={ (e) => editExperience(e)  }
                        >Edit</button>
                }  
                
                </div>
            </form>
            
        </section>
        )
    }
}

export default Experience


