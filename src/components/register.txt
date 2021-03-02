import React from 'react'

class Register extends React.Component{

    constructor(){
        super();
        this.state = {
            first_name:null,
            email:null,
            Department:null,
            gender:null,
            hobbies:[]
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
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

    submit(){
        this.props.sendData(this.state);
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
                                    <input type="text" className="form-control" name="first_name" onChange={this.handleInputChange} />
                                </div>
                                
                            </div><br></br>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Email :</label>
                                    <input type="email" className="form-control" name="email" onChange={this.handleInputChange} />
                                </div><br></br>
                                <div className="form-group col-md-6">
                                    <label>Department:</label>
                                    <select className="form-control" name="dept" onChange={this.handleInputChange}>
                                        <option >Department</option>
                                        <option value="1">web</option>
                                        <option value="2">infra</option>
                                        <option value="3">platform</option>
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
                                    
                                        <input className="form-check-input" type="radio" name="gender" id="inlineRadiof" value="other" checked={this.state.gender === "female"} onChange={this.handleInputChange} />
                                        <label className="form-check-label" >Other</label>
                                    </div>
                                </div><br></br>
                                <div className="form-group col-md-6">
                                    <label>Hobbies :</label><br/>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" value="1" onChange={this.handleInputChange} />
                                        <label className="form-check-label" >Reading</label>
                              
                                        <input className="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh2" value="2" onChange={this.handleInputChange} />
                                        <label className="form-check-label" >Developing</label>
                                   
                                        <input className="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh3" value="3" onChange={this.handleInputChange} />
                                        <label className="form-check-label" >Desiging</label>
                                    </div>
                                </div>
                            </div><br></br>

                            <div className="form-row">
                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
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