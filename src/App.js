import './App.css';
import Home from './components/Home';
import Header from './components/header'; 
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {useState} from 'react';
import Signup from './components/signup';
import CakeDetails from './components/CakeDetails';
import Search from './components/search';
import Cart from './components/cart';
import Checkout from './components/checkout';
import Resetpassword from './components/resetPassword';
import axios from "axios"; 
import mart from './reduxstore/store'; 
import React, { Suspense } from 'react'
import { connect } from 'react-redux';

var SuspendedAdmin = React.lazy(()=>import('./components/Admin'))
var SuspendedProfile = React.lazy(()=>import('./components/profile'))
console.log(process.env)

function App(props) {
  // const baseUrl = 'https://apifromashu.herokuapp.com/api/'
  if(localStorage.token && props.isLoggedin !== true){
    axios({
      method:"get",
      url:process.env.REACT_APP_BASE_URL+'getuserdetails',
      headers:{
        authtoken:localStorage.token
      }
    }).then((response)=>{ 
      console.log("API HIT: User Details")
      if(response.data.data){
        mart.dispatch({
          type:"LOGIN_SUCCESS",
          payload:response.data.data
      })
      }
      else{
        localStorage.removeItem('token');
      }
     
    },(error)=>{
      localStorage.removeItem('token');
      console.log("get user details api. Error: ",error)
    })
  }
  let [login, setlogin] = useState(false);
  let [name, setName] = useState('');
  
  return (
    <div className="App">
      <Router>
      <Header userName={name} checkLogin={login}/>
      {/* <Header userName={name} checkLogin={login} changeLogout={setlogin,setlogin}/> */}
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/login' ><Login userName={setName} checkLogin={login} set={setlogin}/></Route>
        <Route exact path='/cake/:cakeid'><CakeDetails /></Route>
        <Route exact path='/search' component={Search}></Route>
        <Route exact path='/cart' component={Cart}></Route>
        <Route path='/checkout' component={Checkout}></Route> 
        <Route path='/resetpassword' component={Resetpassword}></Route>
        <Route path="/admin" exact>
          <Suspense fallback={<div>Loading...</div>}>
              <SuspendedAdmin/>
          </Suspense>
        </Route>
        <Route path="/profile" exact>
          <Suspense fallback={<div>Loading...</div>}>
              <SuspendedProfile/>
          </Suspense>
        </Route>
      </Router>
          {/* <Login userName={setName} checkLogin={login} set={setlogin}/></Router> */}
    </div>
  );
}

export default connect(function(state,props){
 return {
  isLoggedin:state?.isLoggedin,
 }
})(App);
