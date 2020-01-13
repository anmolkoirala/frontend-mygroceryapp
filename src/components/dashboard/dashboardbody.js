import React, { Component } from 'react';
import '../css/frontend.css';
import Notification from './notification';
import GeneralFooter from './generalfooter';

class DashBody extends Component{
    render(){
        return(
            <div className="admincard">
                <header className="dashhead text-white text-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <h1 className="mb-5">
                                   Welcome to Your Official Grocery Shopping Dashbaord!</h1>
                            </div>
                        </div>
                    </div>
            </header>
            <Notification/> 
           <GeneralFooter/>
           </div>
        );
    }
}

export default DashBody;