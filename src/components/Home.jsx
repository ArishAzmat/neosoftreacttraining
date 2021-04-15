import Header from './header';
import Footer from './Footer';
import Slider from './slider';
import Card from './card';
import Signup from './signup';
import Login from './Login';
import CakeDetails from './CakeDetails';
import {useEffect, useState} from 'react';
import axios from "axios";
import Search from './search';
function Home(params) {
    let [cakes, setCakes] = useState({})
    let [searchCake, setSearchCake] = useState({})
    let [login, setlogin] = useState(false);
    let [name, setName] = useState('Anonymous User');
    useEffect(()=>{
        axios({
            url:"http://apibyashu.herokuapp.com/api/allcakes",
            method:"get", 
          }).then((response)=>{
              setCakes(response.data.data)
              console.log(response.data.data)
          },(error)=>{
              console.log(error)
          })
    },[])
      return (
        <div className="App">
          
          <div className="row">
            {/* <Search data={searchCake}/>;  */}
          </div>
          <Slider/>
          {/* <CakeDetails cakeDetails={details}/> */}
          <div className="row">
            {cakes?.length> 0 && cakes.map((each, index)=>{
              return (<Card  data={each} key={index}/>)
            })}
          </div>
          <Footer/>
        </div>
      );
}

export default Home