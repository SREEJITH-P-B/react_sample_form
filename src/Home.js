import React from 'react';
import Add from './Register';
import Login from './Login';
import './App.css';

import { Redirect } from 'react-router-dom';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Home extends React.Component{

    constructor(){
        super();
        this.state={
            showAnyScreen:false,
            users:[]
        }
    }

  showRegister=(event)=>{
    event.preventDefault();
     this.setState({
         showAnyScreen:true}
         )
  }

  getEmployeeDetails = (result) => {
    let currentUser = this.state.users;
    result['id'] = (this.state.users.length+1);
    currentUser.push(result)
    this.setState({
        users:currentUser,
        showAnyScreen: false
    });
}

  editEmployeeDetails = (result) => {
    let array = [...this.state.users];
    let elem = array.find(el => el.id === result.id);
    let index = array.indexOf(elem)
    array.splice(index, 1);
    array.push(result);
    this.setState({
        users:array,
        showAnyScreen: false,
        activeUser: {}
    });
}

deleteUser = (user) =>{
    let currentUser = this.state.users;
    let array = [...this.state.users];
    let elem = array.find(el => el.id === user.id);
    let index = array.indexOf(elem)
    array.splice(index, 1);
    this.setState({
        users: array,
        showAnyScreen: false,
        activeUser: {}
    });
}

editUser = (user) =>{
    this.setState({
        activeUser:user,
        showAnyScreen: true
    });
}

showCurrentUserDetail = (user) => {
    this.setState({
        activeUser:user
    });
}

showActiveUserDetail = () => {
    let user = this.state.activeUser ? this.state.activeUser : {};
    if(Object.keys(user).length === 0){
        return '';
    }else{
        return(
                <li data-key={user.id} key={user.id} onClick = { this.openGroupModal } className = "user-list">
                      <a>{user.id}</a>
                      <a>{user.firstName}</a>
                      <a href = "#" onClick = {i =>this.editUser(user)}>Edit</a>
                      <a href="#" onClick={i => this.deleteUser((user))} >Delete</a>

                </li>
            )
    }
}
    render(){
        if(this.state.showAnyScreen)
        {
            return(

               <Add sendData={this.getEmployeeDetails} activeUser = {this.state.activeUser} callEdit = {this.editEmployeeDetails} />
               
            );
        
        }
        else{
        
        return(
            <div>
                <div className ="menu-container">
                    <button onClick={this.showRegister}>Add</button>
                </div>
                <ul>
                    { this.state.users.length!==0 && this.state.users.map((user) => {
                        return(
                            <li onClick = { i => this.showCurrentUserDetail(user) }>{user.firstName}</li>
                        )
                    })}
                </ul>
                {this.showActiveUserDetail()}
            </div>

        )  
        }
    }
}

export default Home;