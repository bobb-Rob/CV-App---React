import './App.css';
import react, { Component } from 'react';
import Header from './Components/header/header';
import HeroSection from './Components/heroPage/HeroSection';

// import TaskApp from './Components/TaskApp';
// import ReactForm from './Components/ReactForm';




class App extends Component {
    constructor(props){
        super(props)

    }
 
  render(){
    // const { task, tasks } = this.state;

    return (
      <div className="App">  
        <Header headerName="Resume Factory" />
        <HeroSection
        h1_header='Online CV Maker'
        h3_header='Get Your CV in shape and get the Job you want'
        list_1='Download in CV-friendly formats such as PDF and TXT' 
        /> 
      </div>
    )
  }
} 


export default App


