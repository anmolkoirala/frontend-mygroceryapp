import React, { Component } from 'react';
import '../css/frontend.css';
import LowerBody from './bodysections';

class FrontendBody extends Component{

    render(){
        return(
            <div>
                <header className="masthead text-white text-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <h2 className="mb-5">
                                    Welcome to Grocery Shopping Store. You can either Signin or
                                    SignUp to get started</h2>
                            </div>
                        </div>
                    </div>
            </header>
            <LowerBody/>
            <footer className="footer">
             <div className="d-sm-flex justify-content-center justify-content-sm-between">
                 <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                     Copyright © 2020 Grocery Store Shopping.</span>
                 <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                     Front Panel | React Basics</span>
             </div>
     </footer>
        </div>
        );
    }
}

export default FrontendBody;