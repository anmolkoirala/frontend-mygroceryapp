import React, { Component } from 'react';
import '../css/frontend.css';
import ProductList from './productdatadisp';
import axios from 'axios';

class GroceryItems extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    } 
    componentDidMount() {
        axios.get('http://localhost:4000/products', this.state.config)
            .then((response) => {
                this.setState({
                    products: response.data
                })
            });
    }

   
    render(){
        const allproduct = this.state.products.map((prolist,index)=>{
            return <ProductList key={prolist._id} pid={prolist._id} pname={prolist.name} pprice={prolist.price}
            pcategory={prolist.category} pimage={prolist.image} pdescription={prolist.description}/>
    
        });
        return(
            <section className="testimonials text-center bg-light">
              <div className="container">
                <h2 className="mb-5 first-cap">Fresh grocery items</h2>
                <div className="row">
                 {allproduct}
                </div>
              </div>
            </section>
        );
    }
}

export default GroceryItems;