import axios from 'axios'
import {useState,useEffect} from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function Cart(props) { 
    let [removed, setRemoved] = useState(false)
    let removefromcart = (data) => { 
        axios({
            method:'post',
            url:"https://apibyashu.herokuapp.com/api/removecakefromcart",
            headers:{authtoken:localStorage.token},
            data:{cakeid:data}
          }).then((response)=>{  
            setRemoved(true)
          },(error)=>{
            console.log("error",error)
          })
    }
    // var [cart, setCart] = useState()
   
    return (
        <div> 
            <h2>Cart</h2>
            <table className="table table-stripped">
                <tr>
                    <th>Cake Name</th>
                    <th>Cake Image</th>
                    <th>Cake Price</th>
                    <th>Cake Quantity</th>
                    <th>Remove</th>
                </tr>
                {props.cart?.data?.length > 0 && props.cart.data.map((each,index)=>{
                    return (
                        <tr>
                            <td>{each.name}</td>
                            <td><img src={each.image} alt={each.name} style={{width:"100px"}}/></td>
                            <td>{each.price}</td>
                            <td>{each.quantity}</td>
                            <td><button onClick={()=>removefromcart(each.cakeid)} className="btn btn-danger">X</button></td>
                        </tr>
                    )
                })} 
            </table>
            {props.isLoggedin? <Link to="/checkout"><button className="btn btn-success">Checkout</button></Link>:''}
        </div>
    )
}

export default connect(function(state,props){
  return {
    cart:state?.cart,
    isLoggedin:state?.isLoggedin
  }
})(Cart)