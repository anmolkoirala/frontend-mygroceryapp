import React, { Component } from 'react';
import '../css/userlogin.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class UserRegistration extends Component{

    constructor(){
        super();
        this.state={
            fullname: "",
            email:"",
            password:"",
            contactnum:"",
            address:"",
            success:"", 
            error:"",
        }
    }

    fullnameHandle = (event) => {
        this.setState({
            fullname : event.target.value
        })
    }
    emailHandle = (event) => {
        this.setState({
            email : event.target.value
        })
    }
    passwordHandle = (event) => {
        this.setState({
            password : event.target.value
        })
    }
    contactHandle = (event) => {
        this.setState({
            contactnum : event.target.value
        })
    }
    addressHandle = (event) => {
        this.setState({
            address : event.target.value
        })
    }

    registerUser = () =>{
        const userdata = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
            contactnum: this.state.contactnum,
            address: this.state.address        
        };
        
        axios.post('http://localhost:4000/user/registration', userdata)
        .then(response=> {
            this.setState({
                success:response.data.successmsg
            });
            setTimeout(function() {
                window.location.assign("/login")
            }, 2000);
          })
          .catch(error=>{   
            if(error.response.data.status === 403){
                this.setState({
                    error: error.response.data.errmsg
                });
            }else{
                this.setState({
                    error:"Please insert the data first!"
                });
            }
           
            console.log(error.response.data.errmsg)
            
            })
        }

    render(){
        return(
            <div> 
                <div className="container bg-container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="alert alert-info" style={{ display: this.state.success!=="" ? "" : "none" }}>
                                {this.state.success}
                            </div>
                            <div className="alert alert-danger" style={{ display: this.state.error!=="" ? "" : "none" }}>
                                    {this.state.error}
                            </div>
                            <div className="usercard card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Register Here</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="fullname" className="form-control text-center" name="fullname" 
                                        value={this.state.fullname} onChange={this.fullnameHandle}
                                        placeholder="Fullname" autoFocus/>
                                        <label htmlFor="fullname">Full Name</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control text-center" name="email"
                                        value={this.state.email} onChange={this.emailHandle}
                                        placeholder="Email address" required autoFocus />
                                        <label htmlFor="inputEmail">Email address</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="password" id="password" className="form-control text-center" name="password"
                                        value={this.state.password} onChange={this.passwordHandle}
                                        placeholder="Password" required autoFocus />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="text" id="contact" className="form-control text-center" name="contactnum"
                                        value={this.state.contactnum} onChange={this.contactHandle}
                                        placeholder="Contact" required autoFocus />
                                        <label htmlFor="contact">Contact</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="text" id="address" className="form-control text-center" name="address"
                                        value={this.state.address} onChange={this.addressHandle}
                                        placeholder="Address" required autoFocus />
                                        <label htmlFor="address">Address</label>
                                    </div>
                                    <input type="button" className="btn btn-lg btn-primary btn-block text-uppercase" 
                                    value="Sign Up" onClick={this.registerUser}/>
                                    <hr className="my-line4"/>
                                    <NavLink className="btn btn-lg btn-signup btn-block text-uppercase" to="/login">Sign In</NavLink>
                                    {/* <button className="btn btn-lg btn-signup btn-block text-uppercase" type="submit">Sign In</button> */}
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto my-block">
                        <NavLink  to="/" className="btn btn-lg btn-block text-uppercase btn-back" type="submit">Home</NavLink>
                    </div>
                </div>
                
             </div>
        );
    }
}

export default UserRegistration;