import axios from 'axios';
import {useState} from 'react';
import { connect } from "react-redux";
function Address(props) {
   
    // console.log("adddd", props.address)
    let [errors, setErrors] = useState({})
    let addressForm = (e)=>{
        e.preventDefault() 
        let fields = e.target.elements
        let error = validateform(fields) 
        if(Object.keys(error).length > 0 ){
            setErrors(error)
        }
        else {
                var data = {
                    name:fields.name.value,
                    phone:fields.phone.value,
                    address:fields.address.value,
                    pincode:fields.pincode.value,
                    city:fields.city.value,
                    // cakes:props.cart,
                    // price:totalPrice,
                  }
            props.dispatch({
                type:"ADDRESS",
                payload:data
            })
            props.dispatch({
                type:"CHECKOUT",
                payload:'payment'
            })
            props.history.push('/checkout/payment')
        }
    }
    return ( 
        <div className="col-md-10">
             <form className="form-group" style={{textAlign:"left"}} onSubmit={addressForm}> 

                <input style={{margin:"20px"}} name="name" type="text"  className="form-control" placeholder="Enter Your Name"/> 
                    {errors.name ? <span style={{margin:"20px"}} className="alert-danger">{errors.name}</span> : null}
                <input style={{margin:"20px"}} name="phone" type="text" className="form-control" placeholder="Enter Your Phone"/>
                    {errors.phone ? <span style={{margin:"20px"}} className="alert-danger">{errors.phone }</span> : null} 
                <textarea style={{margin:"20px"}} name="address" className="form-control" placeholder="Enter Your Address" />
                    {errors.address ? <span style={{margin:"20px"}} className="alert-danger">{errors.address }</span> : null}
                <div className="row">
                <div className="col-md-6">
                <input style={{margin:"20px"}} name="city" ype="text" className="form-control"  placeholder="Enter Your City"/>
                    {errors.city ? <span style={{margin:"20px"}} className="alert-danger">{errors.city }</span> : null}
                </div>
                <div className="col-md-6">
                <input style={{margin:"20px"}} name="pincode" type="text" className="form-control" placeholder="Enter Your Pincode"/>
                    {errors.pincode ? <span style={{margin:"20px"}} className="alert-danger">{errors.pincode }</span> : null}
                </div>
                </div>
                <button style={{margin:"20px"}} className="btn btn-primary form-control">Next</button>
        </form>
        </div>
       
    )
}

export default connect(function(state,props){
    return{
        user:state?.user,
        address:state?.address,
        cart:state?.cart.data
    }
})(Address)


const validateform = (d)=>{
    let error = {}
    if(!d.name.value){
        error.name = "Name field is required"
    } 
    if(!d.phone.value){
        error.phone = "Phone field is required"
    }
    else if(d.phone.value.length !== 10){
        error.phone = "Phone Number should be 10 digits only"
    }
    if(!d.address.value){
        error.address = "Name field is required"
    }
    if(!d.city.value){
        error.city = "city field is required"
    }
    if(!d.pincode.value){
        error.pincode = "pincode field is required"
    }
    return error
}