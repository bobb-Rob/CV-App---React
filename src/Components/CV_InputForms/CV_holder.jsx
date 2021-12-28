import React, { Component } from 'react'
import Personal_info from './Personal_info_Section/Personal_info'
import './CV_holder.css'

export class CV_holder extends Component {
    render() {
        return (
            <div className='CV_holder'>
                <Personal_info />

                
            </div>
        )
    }
}

export default CV_holder
