
import React, { Component } from 'react'
import './heroPage.css'
import { BsFillCaretRightFill } from "react-icons/bs";
import Button from '../buttons/button';




export class HeroSection extends Component {
constructor(props) {
    super(props)

}


    render() {
        const { h1_header, h3_header, list_1} = this.props

        return (
            <div className='hero-section'>
                <div className='hero-section-wrapper'>
                    <h1>{h1_header}</h1>
                    <h3>{h3_header}</h3>
                    <div className='hero-list'>
                        <BsFillCaretRightFill />
                        <p>{list_1}</p>
                    </div>  
                    <Button />       
                </div>
                
            </div>
        )
    }
}

export default HeroSection



