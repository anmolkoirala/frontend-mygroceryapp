import React, { Component } from 'react';
import DashMainHeader from '../dashboard/dashheader';
import GroceryItems from './groceryitems';
import GeneralFooter from '../dashboard/generalfooter';

class ProductBody extends Component{

    render(){
        return(
            <div>
                <DashMainHeader/>
                <header className="producthead text-white text-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <h1 className="mb-5 header-capital">
                                Fresh and best Products available here</h1>
                            </div>
                        </div>
                    </div>
                </header>
                
            </div>
        );
    }
}

export default ProductBody;