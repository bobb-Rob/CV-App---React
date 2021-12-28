
import React, { Component } from 'react'

export class ReactForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            message: '',
            carBrand: '',
            isChecked: false,
            gender: '',
            price: 0,
        }

        this.handleChange = this.handleChange.bind(this)
        // this.addAge = this.addAge.bind(this)
    }

    handleChange(e){
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            ...this.state,
           [e.target.name]: value,                     
        })
       console.log(this.state.carBrand)
    }

   
    render() {
        const { firstName, lastName, message, carBrand, isChecked, gender, price } = this.state

        return (
            <div>
                <form>
                    <label>
                        First Name: 
                        <input type='text' 
                        name='firstName'
                        value={firstName} 
                        onChange={this.handleChange} 
                        />
                    </label>
                    <label>
                        Last Name: 
                        <input type='text' 
                        name='lastName'
                        value={lastName} 
                        onChange={this.handleChange} 
                        />
                    </label>
                    <label>
                        Your message: 
                        <textarea  
                        name='message'
                        value={message} 
                        onChange={this.handleChange} 
                        />
                    </label>
                    <select
                        name='carBrand'
                        value= { carBrand }
                        onChange={this.handleChange}                  >
                        <option value='mercedes' >Mercedes</option>
                        <option value='BMW' >BMW</option>
                        <option value='maserati' >Maserati</option>
                        <option value='infinity' >Infinity</option>
                        <option value='audi' >Audi</option>
                    </select>
                    <br /><br />
                    <label>
                        <input
                        type="checkbox"
                        name="isChecked"
                        checked={isChecked}
                        onChange={this.handleChange}
                        />
                         {" "}
                        Is Checked?
                    </label>
                     <br /><br />
                    <label>
                        <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={this.handleChange}
                        />
                {" "}
                        Male
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={this.handleChange}
                        />
                {" "}
                        Female
                    </label>
                    <br /><br />
                    <label>
                        Price (between 0 and 50):
                        <input
                        type="range"
                        name="price"
                        min="0"
                        max="50"
                        value={price}
                        onChange={this.handleChange}
                        />
                    </label>
                </form>
                <h5> Name: {firstName} {lastName}</h5>
                <h5> Message {message}</h5>
                <h5>Is it checked? : {isChecked ? "Yes" : "No"}</h5>
                <h5>Gender Selected : {gender}</h5>
                <h5>Price : ${price}</h5>
                              
                
            </div>
        )
    }
}

export default ReactForm
