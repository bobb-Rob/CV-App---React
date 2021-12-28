import React, { Component } from 'react'
import './header.css'
import {BsBriefcase} from "react-icons/bs";


export class Header extends Component {
    constructor(props) {
        super(props)    
    }
    


    render() {
        const { headerName } = this.props

        return (
            <div className='header'>
                <div className='icon-container'>
                    <BsBriefcase />
                </div>
                <div className='name-container'>
                    {headerName}
                </div>               
            </div>
        )
    }
}

export default Header
