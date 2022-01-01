import React, { Component } from 'react'

export class Input extends Component {

    constructor(props) {
        super(props)    

    }
    

    render() {
        const { type, placeholder, className, name, value, onChange, id } = this.props


        return (
            <div>
                <input type={type}  placeholder={placeholder} 
                        className={className} name={name} 
                        value={value} onChange={ onChange }
                        id={id} />
            </div>
        )
    }
}

export default Input
