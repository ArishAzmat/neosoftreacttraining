import { useParams } from "react-router";
import {useState, useEffect} from 'react';
import axios from "axios"; 
import { connect } from "react-redux";
function CakeDetails(props) {
  let addtocart = (data) =>{ 
    axios({
      method:'post',
      url:"https://apibyashu.herokuapp.com/api/addcaketocart",
      headers:{authtoken:localStorage.token},
      data:{name:data.name,image:data.image,cakeid:data.cakeid,price:data.price,weight:data.weight}
    }).then((response)=>{  
      console.log("API HIT: Cart Added Success")
      if(response.data.message == "Added to cart"){
        // console.log(response.data.message) 
        //resetting cart
        props.dispatch({
          type:"UPDATE-CART",
          payload:false
        })
        //resetting cart
      }
      else if(response.data === "Session Expired"){
        alert("Session Expire Please Login")
      }
      else {
        console.log("Error: add to cart didn't work",response)
      }
    },(error)=>{
      console.log("addcart error",error)
    })
}
  const params = useParams();
  let [details, setDetails] = useState({}) 
  
  let cakeapi = "https://apibyashu.herokuapp.com/api/cake/"+params.cakeid
  useEffect(()=>{
    axios({
      method:'get',
      url:cakeapi,
    }).then((response)=>{
      setDetails(response.data.data)
      console.log(response.data.data)
    },(error)=>{
      console.log("error",error)
    })
  },[cakeapi])
    return (
        <div className="jumbotron">
          <div className="row">
            <div className="col-md-6">
            <img className="singleimage" src={details.image? details.image 
              : 'https://www.jqueryscript.net/images/jQuery-Ajax-Loading-Overlay-with-Loading-Text-Spinner-Plugin.jpg'}/>
            </div>
            <div className="col-md-6">
            <h1 className="display-4">{details.name? details.name: 'Loading...'}</h1>
        
        <hr className="my-4"/> 
       
        <ul className="cart-details-list">
          <li className="m-2"> <b>Price: </b>  ${details.price?details.price:'Loading...'} </li>
        
        <li className="m-2"><b>Description: </b>{details.description} </li>
        <li className="m-2"><b>Eggless: </b> {details.eggless === true? 'Yes' : 'No'} </li>
        <li className="m-2"><b>ratings: </b> <span className="rating">{details.ratings}</span> </li>
        <li className="m-2"><b>flavour: </b> {details.flavour} </li>
        </ul>
        <button onClick={()=>addtocart(details)} className="btn btn-success">Add to Cart</button>
            </div>
          </div>
       
      </div>)
}

export default connect(function(state,props){
  return {
    cart:state?.cart,
  }
})(CakeDetails)