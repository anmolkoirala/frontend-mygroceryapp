import React, { Component } from 'react';
import DashMainHeader from '../dashboard/dashheader';
import CartBody from './cartbody';
import GeneralFooter from '../dashboard/generalfooter';


class UserCart extends Component{

    render(){
        return(
            <div>
                <DashMainHeader/>
                <header className="carthead text-white text-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                              
                            </div>
                        </div>
                    </div>
                </header>
                <CartBody/>
                <GeneralFooter/>
            </div>
        );
    }
}

export default UserCart;