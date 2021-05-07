import axios from 'axios'
import {useState,useEffect} from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function Cart(props) { 
    let [removed, setRemoved] = useState(false)
    let removefromcart = (e,data) => {
      // console.log("eeeee",e)
      // this.closest('tr').fadeOut()
        axios({
            method:'post',
            url:process.env.REACT_APP_BASE_URL+"removecakefromcart",
            headers:{authtoken:localStorage.token},
            data:{cakeid:data}
          }).then((response)=>{  
            console.log("API HIT: Cart Removed Success")
            setRemoved(true)
            if(response.data.message === "Removed  item from cart"){
              //resetting cart
              
              props.dispatch({
                type:"UPDATE-CART",
                payload:false
              })  //resetting cart
            }
          },(error)=>{
            console.log("error",error)
          })
    }
    // var [cart, setCart] = useState()
    return (
        <div> 
            <h2>Cart</h2>
            {props.cart?.data?.length > 0?
            <table className="table table-stripped">
                <tr>
                    <th>Cake Name</th>
                    <th>Cake Image</th>
                    <th>Cake Price</th>
                    <th>Cake Quantity</th>
                    <th>Remove</th>
                </tr>
                {props.cart?.data?.length > 0 && props?.cart?.data?.map((each,i)=>{
                    return (
                        <tr key={i}>
                            <td >{each.name}</td>
                            <td><img src={each.image} alt={each.name} style={{width:"100px"}}/></td>
                            <td>{each.price}</td>
                            <td>{each.quantity}</td>
                            <td><button onClick={(e)=>removefromcart(e,each.cakeid)} className="btn btn-danger">X</button></td>
                        </tr>
                    )
                })} 
            </table>
             : <div className="alert alert-info">
               No item in Cart
               </div>}
            {props.cart?.data?.length > 0 && props.isLoggedin?  <Link to="/checkout"><button className="btn btn-success">Checkout</button></Link> :null}
              
             
        </div>
    )
}

export default connect(function(state,props){
  return {
    cart:state?.cart,
    isLoggedin:state?.isLoggedin
  }
})(Cart)