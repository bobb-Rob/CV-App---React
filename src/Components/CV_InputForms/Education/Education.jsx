import React, { Component } from 'react'
import './education.css'
import uniqid from 'uniqid'


class Education extends Component {
constructor(props) {
    super(props)   
   
}   


    render() {
        // university, city, degree, subject, from, to
      
        const { allEducation, onChange, addEducation, deleteEducation, onEducationSubmit, editEducation } = this.props
       
        const alleducation = allEducation.map((education) => {
           return (          
            <div className='educationInputs' key={education.id} >         
                                                
                        <input type='text'  placeholder='University name' 
                        className='universityName education' name='universityName' 
                        value={education.universityName} onChange={ (e) => onChange(e, education.id) }
                        id={uniqid()} required />

                        <input type='text'  placeholder='City' 
                        className='city education' name={'city'} 
                        value={education.city} onChange={ (e) => onChange(e, education.id)}
                        id={uniqid()} required/>

                        <input type='text' placeholder='Degree' 
                        className='degree education' name={'degree'} 
                        value={education.degree} onChange={(e) => onChange(e, education.id)}
                        id={uniqid()} required />   

                        <input type='text'  placeholder='Subject' 
                        className='subject education' name={'subject'} 
                        value={education.subject} onChange={(e) => onChange(e, education.id)}
                        id={uniqid()} required />  

                        <input type='date' placeholder='From' 
                        className='fromDate education' name={'fromDate'} 
                        value={education.from} onChange={(e) => onChange(e, education.id)}
                        id={uniqid()}  />  

                        <input type='date' placeholder='To' 
                        className='toDate education' name={'toDate'} 
                        value={education.to} onChange={(e) => onChange(e, education.id)}
                        id={uniqid()} />    

                         <button type='button' className='delete_btn btn' 
                         onClick = {() => { notEmpty(); return deleteEducation(education.id); } }
                         >Delete</button>     
                    </div>
            )
        })

        const notEmpty = () => alleducation.length > 0 ? true: false;

        const notSubmitted = function(){
            let getStatus = allEducation.some((education) =>
            education.submitted === false);
            if(getStatus){
                return true
            }else{
                return false
            }           
        }        

        console.log(alleducation)
        console.log(notEmpty())
        console.log(notSubmitted())              
           
          

        return (
            <section className='educationSection' >
                <form id='cvForm' onSubmit={(e) => onEducationSubmit(e)} >
                    <h2>Education</h2> 
                                                      
                    {notSubmitted() && alleducation}
                                     
                <div className='education_submit_edit_btn' >
                    { (notEmpty() && notSubmitted())  &&                       
                            <div>                               
                                <button type='submit' 
                                form='cvForm'  className='submit_btn btn'                        
                                >Submit this Section</button>                               

                                <button type='button' className='edit_btn btn' 
                                onClick={(e) => addEducation(e) }>
                                Add</button>
                            </div>                               
                            }                                       
                       
                        { (!notEmpty() && !notSubmitted())   && 
                         <button type='button' className='edit_btn btn' 
                         onClick={(e) => addEducation(e) }>
                         Add</button>
                        }

                        { (!notSubmitted() &&  notEmpty())   &&
                                <button type='button' className='edit_btn btn' 
                                onClick={ (e) => editEducation(e)  }
                                >
                                    Edit</button>
                            }                     
                  
                </div>                                   
                   
                </form>
                           
            </section>
        )
    }
}

export { Education }
