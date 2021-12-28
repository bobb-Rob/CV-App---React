import './App.css';
import react, { Component } from 'react';
import Header from './Components/header/header';
import HeroSection from './Components/heroPage/HeroSection';
import CV_holder from './Components/CV_InputForms/CV_holder';

// import TaskApp from './Components/TaskApp';
// import ReactForm from './Components/ReactForm';




class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: "React",
            showHideCV_holder: false,           
            
          };
          this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        console.log(name);
        switch (name) {   
        case "showHideCV_holder":
            this.setState({ showHideCV_holder: !this.state.showHideCV_holder }, ()=>  
            console.log(" 'Create Your CV Today' Button clicked " + this.state));           
            break;

        case "showHideHero_section":
            this.setState({ showHideHero_section: !this.state.showHideHero_section });
            break;
        default:
            break;
        }
    }


 
  render(){
    const { showHideCV_holder } = this.state;

    return (
      <div className="App">  
        <Header headerName="Resume Factory" />
        
        {/* Logic below display CV form when 'Create Your CV Today' button is clicked */}
        {!showHideCV_holder ? 
            <HeroSection
        h1_header='Online CV Maker'
        h3_header='Get Your CV in shape and get the Job you want'
        list_1='Download in CV-friendly formats such as PDF and TXT' 
        hideComponent={this.hideComponent}       
        /> : null
        }  

        {!showHideCV_holder ? 
        null : <CV_holder /> 
        }   

      </div>
    )
  }
} 


export default App


