import react from "react"

class Reference extends react.Component {
    constructor(props) {
        super(props)   

        this.state = {
            provided: '',
        }
       
    }
       

    onRadioChange = (e) => {
        this.setState({
            provided: e.target.value,
        })
    }


    render() {
        const { allData, addData, deleteData, editData, submitForm, onChange, onRadioChange } = this.props

        const notEmpty = () => allData.length > 0 ? true: false;

        const notSubmitted = () => {
            let getStatus = allData.some((reference) =>
            reference.submitted === false); 
            if(getStatus){
                return true;
            }else{
                return false;
            }           
        }      
        // const provide = () => {
        //    return allData.some((reference) => reference.provided === 'yes') ? true : false;
        // }

       

        return (
            <section className='educationSection' >
            <form id='skillForm' onSubmit={(e) => submitForm(e)} >
                <h2>References</h2> 

                <div>
                    <p>Do you wish to supply your reference now</p>
                    <label  htmlFor="yes">
                        Yes
                        {"    "}
                        <input type='radio' name="provided" id="yes" value='yes' 
                        checked={this.state.provided === 'yes'} 
                        onChange={this.onRadioChange}
                        />
                    </label>
                    {"    "}
                    <label htmlFor="no">
                        No
                        {"    "}
                        <input type='radio' name="provided" id="no" value='no' 
                        checked={this.state.provided === 'no' }
                        onChange={this.onRadioChange}
                         />
                    </label>                
                </div>            
            
            
            { (this.state.provided === 'yes')  &&  <div>

                {notSubmitted() && allData.map((reference) => {
                    return (
                        <div className='educationInputs' key={reference.id} >                           
                            <input type='text' id={reference.id} placeholder='reference' 
                            className='skill1 education' name='reference'
                            value={reference.reference} onChange={(e) => onChange(e, reference.id)}   /> 

                            <button className='delete_btn btn' type='button'
                        onClick={() => deleteData(reference.id)}
                        >Delete</button>                            
                        </div>
                        )  
                    })
                }
                                
                <div className='experience_submit_edit_btn' >
                {(notEmpty() && notSubmitted())  &&
                    <div>
                        <button form='skillForm' type='submit' className='submit_btn btn'                        
                        >Submit this Section</button>

                        <button type='button' className='edit_btn btn'
                         onClick={(e) => addData(e) }
                        >Add</button>                       
                    </div>
                }
                 {(!notEmpty() && !notSubmitted())   && 
                         <button type='button' className='edit_btn btn' 
                         onClick={(e) => addData(e) }>
                         Add</button>
                 }

                { (!notSubmitted() &&  notEmpty())   &&
                        <button type='button' className='edit_btn btn' 
                        onClick={ (e) => editData(e)  }
                        >Edit</button>
                }                         
                       
                </div>
            </div> 
            }
            </form>
            
        </section>
        )
    }
}

export {Reference}