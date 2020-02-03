import React, { Component } from 'react';
import '../css/frontend.css';
import axios from 'axios';
import CartLoopData from './cartloopdata';
import { NavLink } from 'react-router-dom';

class CartBody extends Component{
    constructor(props) {
        super(props)
        this.state = {
            carts: [],
            userid:localStorage.getItem('id'),
            numproduct:0,
            total:0,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    stepDown = ()=>{
        this.setState({ numproduct: this.state.numproduct - 1 });
    }

    stepUp =(e)=>{
        e.preventDefault();
        this.setState({ numproduct: this.state.numproduct + 1 });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/carts/'+this.state.userid, this.state.config)
            .then((response) => {
                this.setState({
                    carts: response.data
                })
                this.setState({
                    total: this.renderCountETotal(this.state.carts)
                })
            });
    }

    render(){
        const personalcart = this.state.carts.map((cartlist,index)=>{
            return <CartLoopData key={cartlist._id} cid={cartlist._id} pid={cartlist.productid}
             pname={cartlist.productname} pprice={cartlist.productprice} total={this.state.total}
            pcategory={cartlist.productcategory} pimage={cartlist.productimage} 
            pnumofitem={cartlist.productnumber} puser={cartlist.addedbyName} puserid={cartlist.addedbyID} />
        })
        return(
            <div className="cart-body">
                <div className="container mb-4">
                    <h2 className="mb-5 first-cap">Personal Cart</h2>
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Product Price</th>
                                            <th scope="col" className="text-center">Quantity</th>
                                            <th scope="col" className="text-center">Amount</th>
                                            <th scope="col" className="text-center">Change</th>
                                            <th scope="col" className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {personalcart}
                                        <tr>
                                            <td colSpan="4"></td> 
                                            <td className="text-center">NRs. 00.0</td>      
                                            <td colSpan="2">Free Shipping</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4"></td>
                                            <td className="text-center"><strong>NRs. {this.state.total}</strong></td>
                                            <td colSpan="2">Sub-Total</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col mb-2">
                            <div className="row">
                                <div className="col-sm-12  col-md-6">
                                    <NavLink to="/products" className="btn btn-lg btn-block btn-light text-uppercase">Continue Shopping</NavLink>
                                </div>
                                <div className="col-sm-12 col-md-6 text-right">
                                    <button className="btn btn-lg btn-block btn-info text-uppercase"
                                    data-toggle="modal" data-target="#exampleModalCenter"
                                    >Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
            </div>
        );
    }
    renderCountETotal = (cart)=>
        {
            let total = 0;
                for(let i = 0 ; i < cart.length ; i++)
                {
                    total += cart[i].productnumber * cart[i].productprice;
                }
                return total;
        }

}

export default CartBody;