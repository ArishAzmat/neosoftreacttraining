import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {myorder} from "../reduxstore/thunk"
function Order(props) {
  let [orderData, setOrderData] = useState({});
  useEffect(()=>{
    props.dispatch(myorder(process.env.REACT_APP_BASE_URl))
  },[])
  let count = 0
  return (
    <>
      {/* <div className="alert alert-success">
        <h1>Order Placed Successfully</h1>
      </div> */}
      <table className="table table-hover">
       <thead className="thead-dark">
       <tr>
          <th>S.no</th>
          <th>User</th>
          <th>Order Date</th>
          <th>Status</th>
          <th>Products</th>
          <th>Mode</th>
          <th>Total</th>
          <th>View</th>
          <th></th>
        </tr>
       </thead>
        <tbody className="">
        {props.order?.length > 0 && props.order.map((each,index)=>{
          count++
          return (
            <tr>
          <td>{count}</td>
          <td>{each.name}</td>
          <td>{each.orderdate}</td>
          <td>
            {each.compeleted? 
            <button className="btn btn-success">Completed</button>
            : <button className="btn btn-info">Pending</button> }</td>
          
          <td>{each.cakes.length}</td>
          <td>{each.mode}</td>
          <td><b>{each.price}</b></td>
          <td>
            <Link to={`/checkout/order/${index}`} >View</Link>
          </td>
        </tr>
          )
        })}
        </tbody>
        
      </table>
    </>
  );
}
export default connect((state, props) => {
  return {
    address: state?.address,
    user: state?.user,
    order:state?.order,
  };
})(Order);
