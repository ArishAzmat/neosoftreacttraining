import { useParams } from "react-router";
import {useState, useEffect} from 'react';
import axios from "axios";
console.log("hello")
function CakeDetails() {
  const params = useParams();
  let [details, setDetails] = useState({}) 
  useEffect(()=>{
    let cakeapi = "http://apibyashu.herokuapp.com/api/cake/"+params.cakeid
    axios({
      method:'get',
      url:cakeapi,
    }).then((response)=>{
      setDetails(response.data.data)
      console.log(response.data.data)
    },(error)=>{
      console.log("error",error)
    })
  },[])
    return (
        <div className="jumbotron">
          <div className="row">
            <div className="col-md-6">
            <img className="singleimage" src={details.image}/>
            </div>
            <div className="col-md-6">
            <h1 className="display-4">{details.name}</h1>
        
        <hr className="my-4"/>
        <p><b>Price:</b> {details.price} </p>
        <p><b>Description:</b>{details.description} </p>
        <p><b>Eggless:</b>{details.eggless === true? 'Yes' : 'No'} </p>
        <p><b>ratings:</b>{details.ratings} </p>
        <p><b>flavour:</b>{details.flavour} </p>
            </div>
          </div>
       
      </div>)
}

export default CakeDetails