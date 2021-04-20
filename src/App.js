import './App.css';
import Home from './components/Home';
import Header from './components/header';
import Slider from './components/slider';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {useState} from 'react';
import Signup from './components/signup';
import CakeDetails from './components/CakeDetails';
import Search from './components/search';
import Cart from './components/cart';
import Checkout from './components/checkout';
import axios from "axios";
import { connect } from 'react-redux';
import mart from './reduxstore/store'; 
const baseUrl = 'https://apibyashu.herokuapp.com/api/'
if(localStorage.token){
  axios({
    method:"get",
    url:baseUrl+'getuserdetails',
    headers:{
      authtoken:localStorage.token
    }
  }).then((response)=>{ 
    console.log("API HIT: User Details")
    if(response.data.data){
      mart.dispatch({
        type:"LOGIN",
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
function App() {
 
  let [details, setDetails] = useState({}) 
  let [cakes, setCakes] = useState({})
  let [searchCake, setSearchCake] = useState({})
  let [login, setlogin] = useState(false);
  let [name, setName] = useState('');
  
  return (
    <div className="App">
      <Router>
      <Header getSearchData={setSearchCake} userName={name} checkLogin={login} changeLogout={setlogin,setlogin}/>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/login' ><Login userName={setName} checkLogin={login} set={setlogin}/></Route>
        <Route exact path='/cake/:cakeid'><CakeDetails /></Route>
        <Route exact path='/search' component={Search}></Route>
        <Route exact path='/cart' component={Cart}></Route>
        <Route path='/checkout' component={Checkout}></Route> 
      </Router>
          {/* <Login userName={setName} checkLogin={login} set={setlogin}/></Router> */}
    </div>
  );
}

export default App;
