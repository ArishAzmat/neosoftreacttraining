 
import Footer from './Footer';
import Slider from './slider';
import Card from './card';  
import CakeDetails from './CakeDetails';
import { useEffect, useState } from 'react';
import axios from "axios";
import Search from './search';
function Home(params) {
  // console.log(params)
  let [cakes, setCakes] = useState({}) 
  useEffect(() => {
   axios({
      url: process.env.REACT_APP_BASE_URL+"allcakes",
      method: "get",
    }).then((response) => {
      setCakes(response.data.data)
      // console.log(response.data.data) A
    }, (error) => {
      console.log(error)
    }) 
  }, [])
  return (
    <div className="App">

      <div className="row">
        {/* <Search data={searchCake}/>;  */}
      </div>
      <Slider />
      {/* <CakeDetails cakeDetails={details}/> */}
      <h1>Shop</h1>
      <div className="row">
        {cakes?.length > 0 && cakes.map((each, index) => {
          return (<Card data={each} key={index} />)
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home