import React from 'react'
import { Redirect } from 'react-router-dom';
class Register extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.activeUser && this.props.activeUser.firstName,
            email: this.props.activeUser && this.props.activeUser.email,
            dept: this.props.activeUser && this.props.activeUser.dept,
            gender: this.props.activeUser && this.props.activeUser.gender,
            hobbies: this.props.activeUser && this.props.activeUser.hobbies || [],
            id: this.props.activeUser && this.props.activeUser.id || null
        }
    }


    handleInputChange = (event) => {
        const target = event.target;
        var value = target.value;
        const name = target.name;
        
        if(target.type === 'checkbox'){
            if(target.checked){
                this.state.hobbies[value] = value;   
            }else{
                this.state.hobbies.splice(value, 1);
            }
        }else{
            this.setState({
                [name]: value
            });
        }   
        
    }
    onClick={}

    submit = (event) => {
  /*     let currentUser = [];
       if(localStorage.getItem('user')!==""){
        currentUser = JSON.parse(localStorage.getItem('user'));
       }
       currentUser.push(this.state);
       localStorage.setItem('user',JSON.stringify(currentUser));
       return <Redirect to="/Home"/>;*/
        event.preventDefault();
        if(this.state.id === null){
            this.props.sendData(this.state);
        }else{
           this.props.callEdit(this.state);
        }
    }

    addHobbies = (event) => {
        let elem = event.target.name;
        let loc = this.state.hobbies;
        if(event.target.checked){
            loc.push(elem);
        }
        else {
            loc.splice(loc.indexOf(elem),1);
        }
        this.setState({
            hobbies: loc
        });
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />
                        <h3>Register Form</h3><br />
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Name :</label>
                                    <input type="text" className="form-control" name="firstName"  value = {this.state.firstName} onChange={this.handleInputChange} />
                                </div>
                                
                            </div><br></br>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Email :</label>
                                    <input type="email" className="form-control" name="email"  value = {this.state.email} onChange={this.handleInputChange} />
                                </div><br></br>
                                <div className="form-group col-md-6">
                                    <label>Department:</label>
                                    <select className="form-control" name="dept" value = {this.state.dept} onChange={this.handleInputChange}>
                                        <option >Department</option>
                                        <option value="web">web</option>
                                        <option value="infra">infra</option>
                                        <option value="platform">platform</option>
                                    </select>
                                </div>
                            </div><br></br>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Gender :</label><br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="inlineRadiom" value="male" checked={this.state.gender === "male"} onChange={this.handleInputChange} />
                                        <label className="form-check-label" >Male</label>
                                   
                                        <input className="form-check-input" type="radio" name="gender" id="inlineRadiof" value="female" checked={this.state.gender === "female"} onChange={this.handleInputChange} />
                                        <label className="form-check-label" >Female</label>
                                    
                                        <input className="form-check-input" type="radio" name="gender" id="inlineRadiof" value="other" checked={this.state.gender === "other"} onChange={this.handleInputChange} />
                                        <label className="form-check-label" >Other</label>
                                    </div>
                                </div><br></br>
                                <div className="form-group col-md-6">
                                    <label>Hobbies :</label><br/>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="reading" id="inlineCheckboxh1" value="1" checked={this.state.hobbies.includes('reading')} onClick={this.addHobbies} />
                                        <label className="form-check-label" >Reading</label>
                              
                                        <input className="form-check-input" type="checkbox" name="developing" id="inlineCheckboxh2" value="2" checked={this.state.hobbies.includes('developing')} onClick={this.addHobbies} />
                                        <label className="form-check-label" >Developing</label>
                                   
                                        <input className="form-check-input" type="checkbox" name="designing" id="inlineCheckboxh3" value="3" checked={this.state.hobbies.includes('designing')}  onClick={this.addHobbies} />
                                        <label className="form-check-label" >Designing</label>
                                    </div>
                                </div>
                            </div><br></br>

                            <div className="form-row">
                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-primary" onClick={(event)=>this.submit(event)}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )  
    }
}

export default Register;