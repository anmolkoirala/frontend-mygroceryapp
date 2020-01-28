import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import '../css/frontend.css';
import {NavLink} from 'react-router-dom';
import FrontBody from './frontendbody';
import LoginMain from '../login/userlogin';
import DashboardMain from '../dashboard/dashboard';
import AdminDashboardMain from '../dashboard/admin/admindashboard';
import ProductBody from '../products/productsbody';
import RegisterMain from '../registration/userregistration';
import RouteRes from '../routerestrict/restrict';
import AddProducts from '../dashboard/admin/adminproducts/productsadd';
import ViewProducts from '../dashboard/admin/adminproducts/viewproducts';
import AdminProfile from '../dashboard/admin/adminprofile/updateprofile';
import UpdateProfile from '../dashboard/admin/adminprofile/updateprofile';
import MainUserCart from '../cart/cart';
import RegisterAdmin from '../dashboard/admin/newuser/newadmin';
import UserRequest from '../userrequest/requestmain';
import UserList from '../dashboard/admin/newuser/userlist';

class MainFront extends Component{

    render(){
        return(
            <div>
                <Switch>
                    <Route path="/login" exact component={LoginContainer}/>
                    <Route path="/register" exact component={LoginContainer}/>
                    {/* links for login */}
                    <RouteRes path="/dashboard" component={DashboardMain}/>
                    <RouteRes path="/admindashboard" component={AdminDashboardMain}/>
                    <RouteRes path="/addproducts" component={AddProducts}/>
                    <RouteRes path="/viewproducts" component={ViewProducts}/>
                    <RouteRes path="/admin/profile/:id" component={AdminProfile}/>
                    <RouteRes path="/admin/profileupdate/:id" component={UpdateProfile}/>
                    <RouteRes path="/user/cart" component={MainUserCart}/>
                    <RouteRes path="/registeradmin" component={RegisterAdmin}/>
                    <RouteRes path="/user/request" component={UserRequest}/>
                    <RouteRes path="/view/alluser" component={UserList}/>
                    {/* end */}
                    <Route path="/" exact component={DefaultContainer}/>    
                    <Route path="/products" exact component={ProductBody}/>
                </Switch>
            </div>
        );
    }
}

const LoginContainer = () => (
    <div>
         <nav className="navbar navbar-light bg-light sticky-top">
        
    </nav>
    <Route path="/login" exact component={LoginMain}/>
    <Route path="/register" exact component={RegisterMain}/>

    </div> 
 );

 const DefaultContainer = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
                  <span>Grocery Store</span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item"><NavLink className="navbar-brand sub-navlink" to="/register">Sign up</NavLink></li>
            <li className="nav-item"><NavLink className="btn btn-primary" to="/login">Sign In</NavLink></li>
            
          </ul>
        </div>
      </nav> 
    <Route path="/" exact component={FrontBody}/>
    </div> 
 );

export default MainFront;