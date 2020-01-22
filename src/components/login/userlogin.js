import React, { Component } from 'react';
import '../css/userlogin.css';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';

class UserLogin extends Component{

    constructor(){
        super();
        this.state={
            success:"",
            error:"",
            email:"",
            password:"",
            loggedin: false,
            admin   : false,
            
        }
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

    registerUser = () =>{
        const logindata = {
            email: this.state.email,
            password: this.state.password,          
        };
        
        axios.post('http://localhost:4000/user/login', logindata)
        .then(response=> {
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.logininfo.id);
            localStorage.setItem('name', response.data.logininfo.fullname);
            localStorage.setItem('email', response.data.logininfo.email);
            localStorage.setItem('contact', response.data.logininfo.contactnum);
            localStorage.setItem('address', response.data.logininfo.address);
            localStorage.setItem('loginrole', response.data.logininfo.adminrole);
            localStorage.setItem('super', response.data.logininfo.superrole);
            this.setState({ loggedin : true, admin:response.data.logininfo.adminrole});
          }).catch(error=>{            
            console.log(error.response.status);
            if(error.response.status === 404){
                this.setState({
                    error:"User credentials not found"
                 });
            }else if(error.response.status === 400){
                this.setState({
                    error:"Email or password is incorrect. Try again!"
                 });
            }
        })
        }

    render(){
        if(this.state.loggedin === true && this.state.admin === false){
            return <Redirect to="/dashboard"/>
        }else if(this.state.loggedin === true && this.state.admin === true){
            return <Redirect to="/admindashboard"/>
        }

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
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin">
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" name="email" className="form-control text-center" 
                                      value={this.state.email} onChange={this.emailHandle}
                                    placeholder="Email address" required autoFocus />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>
                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" name="password" className="form-control text-center" 
                                   value={this.state.password} onChange={this.passwordHandle}
                                   placeholder="Password" required />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                                <input type="button" className="btn btn-lg btn-primary btn-block text-uppercase"
                                onClick={this.registerUser}
                                value="Sign in" />
                                <hr className="my-line4"/>
                                <NavLink className="btn btn-lg btn-signup btn-block text-uppercase" to="/register">Sign Up</NavLink>
                                {/* <button className="btn btn-lg btn-signup btn-block text-uppercase" type="submit">Sign Up</button> */}
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <NavLink  to="/" className="btn btn-lg btn-block text-uppercase btn-back" type="submit">Home</NavLink>
                    </div>
                </div>
                
             </div>
        );
    }
}

export default UserLogin;