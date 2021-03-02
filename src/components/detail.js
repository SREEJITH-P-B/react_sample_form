import React from 'react'

class Detail extends React.Component{

    constructor(){
        super();
    }

   /* back = () => {
       this.props.resetData();
    }*/

    render(){
        return(
            <div>
                <h1> {this.props.newEmployee && this.props.newEmployee.email} </h1>
                <button onClick={this.props.showEditScreen}>Click me</button>
            </div>

        )  
    }
}

export default Detail;