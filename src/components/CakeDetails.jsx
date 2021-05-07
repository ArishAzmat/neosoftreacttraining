import { useParams } from "react-router";
import {useState, useEffect} from 'react';
import axios from "axios"; 
import { connect } from "react-redux";
function CakeDetails(props) {
  let [error,setError] = useState(false)
  let addtocart = (data) =>{ 
    if(!props.islogged){
      setError(true)
      return false
    }
    document.getElementById('addtocart').innerHTML = '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>'
    axios({
      method:'post',
      url:process.env.REACT_APP_BASE_URL+"addcaketocart",
      headers:{authtoken:localStorage.token},
      data:{name:data.name,image:data.image,cakeid:data.cakeid,price:data.price,weight:data.weight}
    }).then((response)=>{  
      console.log("API HIT: Cart Added Success")
      if(response.data.message == "Added to cart"){
        // console.log(response.data.message) 
        //resetting cart
        document.getElementById('addtocart').innerHTML = "Added"
        props.dispatch({
          type:"UPDATE-CART",
          payload:false
        })
        //resetting cart
      }
      // else if(response.data === "Session Expired"){
      //   alert("Session Expire Please Login")
      // }
      else {
        console.log("Error: add to cart didn't work",response)
      }
    },(error)=>{
      console.log("addcart error",error)
    })
}
  const params = useParams();
  let [details, setDetails] = useState({}) 
  
  let cakeapi = "https://apifromashu.herokuapp.com/api/cake/"+params.cakeid
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
          {error? <p className="alert-warning">Please Login First</p>:null}
          <div className="row">
            <div className="col-md-6">
            <h1 className="display-4">{details.name? details.name: '...'}</h1>   
            <img className="singleimage" src={details.image? details.image 
              : '/images/loader.gif'}/>
            </div>
            <div className="col-md-6">
            <p>Description</p>
        
        <hr className="my-4"/> 
       
        <ul className="cart-details-list">
          <li className="m-2"> <b>Price: </b>  {details.price?details.price:'Loading...'} </li>
          <hr className="my-3"/> 
        <li className="m-2"><b>Description: </b>{details.description} </li>
        <hr className="my-3"/> 
        <li className="m-2"><b>Eggless: </b> {details.eggless === true? 'Yes' : 'No'} </li>
        <hr className="my-3"/> 
        <li className="m-2"><b>ratings: </b> <span className="rating">{details.ratings} / 5</span> </li>
        <hr className="my-3"/> 
        <li className="m-2"><b>flavour: </b> {details.flavour} </li>
        <hr className="my-3"/> 
        <li className="m-2"><b>Weight: </b> {details.weight} Pound</li>
        <hr className="my-3"/> 
        <li className="m-2"><b>Type: </b> {details.type} </li>
        </ul>
        <button id="addtocart" onClick={()=>addtocart(details)} className="btn btn-success">Add to Cart</button>
            </div>
          </div>
       
      </div>)
}

export default connect(function(state,props){
  return {
    cart:state?.cart,
    islogged:state?.isLoggedin
  }
})(CakeDetails)