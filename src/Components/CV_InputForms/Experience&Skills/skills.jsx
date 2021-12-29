import react from "react"

class NotableSkills extends react.Component {
    

    render() {
        return (
            <section className='educationSection' >
            <form >
                <h2>Skills</h2> 
                <div className='educationInputs' >                           
                    <input type='text' id='skill1' placeholder='skill One' 
                    className='skill1 education' name='skill1' />
                             
                </div>

                <div className='education_submit_edit_btn' >
                        <button className='submit_btn btn' >Submit this Section</button>
                        <button className='edit_btn btn' >Edit</button>
                        <button className='edit_btn btn' >Add Skills</button>
                        <button className='edit_btn btn' >Delete</button>
                </div>
            </form>
            
        </section>
        )
    }
}

export {NotableSkills}