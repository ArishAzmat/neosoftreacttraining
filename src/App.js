import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import Slider from './components/slider';
import Card from './components/card';
import Signup from './components/signup';
import Login from './components/Login';
import CakeDetails from './components/CakeDetails';
import {useState} from 'react';
import axios from "axios";
import Search from './search';
 const cardData = {
   name: "DC best super hero is superman",
   image:"dc.jpg", 
 }


function App() {
  let [login, setlogin] = useState(false);
  let [name, setName] = useState('Anonymous User');
  let [details, setDetails] = useState({}) 
  let [cakes, setCakes] = useState({})
  let [searchCake, setSearchCake] = useState({})
  console.log(details)
    axios({
      url:"http://apibyashu.herokuapp.com/api/allcakes",
      method:"get", 
    }).then((response)=>{
        setCakes(response.data.data)
    },(error)=>{
        console.log(error)
    })
  return (
    <div className="App">
      <Header getSearchData={setSearchCake} userName={name} checkLogin={login} changeLogout={setlogin,setlogin}/>
      <div className="row">
        <Search  getDetails={setDetails} data={searchCake}/>; 
      </div>
      <div className="container">
      <div className="row">
      <Login userName={setName} checkLogin={login} set={setlogin}/>
      <Signup/>
      </div>
      </div>
      <Slider/>
      <CakeDetails cakeDetails={details}/>
      <div className="row">
        {cakes?.length> 0 && cakes.map((each, index)=>{
          return (<Card getDetails={setDetails} data={each} key={index}/>)
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
