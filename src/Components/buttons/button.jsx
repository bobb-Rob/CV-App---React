import React, { Component } from 'react'
import './buttons.css'

export class Button extends Component {
    constructor(props) {
        super(props)
    
       
    }
    

    render() {
        const { btn_label, onClick } = this.props

        return (
            <div className='hero-btn-container'>
                <button className='hero-btn btn'
                onClick={onClick}
                > 
                {btn_label}</button>                
            </div>
        )
    }
}

export default Button
