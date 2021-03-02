import React from 'react'
import Register from './register';
import Detail from './detail';
class Employee extends React.Component{

    constructor(){
        super();
        this.state = {
            selectedSection: 'newEmployee'
        }
    }

    getEmployeeDetails = (result) => {
        this.setState({
            newEmployee: result,
            selectedSection: 'detailEmployee'
        });
    }

    showEditScreen = (event) => {
        event.preventDefault();
          this.setState({
            selectedSection: 'newEmployee'
        }); 
        alert("datas shown successfully");     
    }

    contentSection() {
        switch(this.state.selectedSection) {
            case 'newEmployee':
                return <Register sendData = { (result) => this.getEmployeeDetails(result)}/>
                break;
            case 'detailEmployee':
                return <Detail newEmployee = {this.state.newEmployee} showEditScreen = { (event) => this.showEditScreen(event)} />
                break;
         }
    }

    render(){
        return(
            <div>
              {this.contentSection()}
            </div>
        )  
    }
}

export default Employee;