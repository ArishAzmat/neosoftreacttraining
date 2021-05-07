import { connect } from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import Order from './Order'
function OrderView(props){
    let id  = props.match.params.orderid
    console.log(props.order[id])
    return (
        <div className="text-left"> 
           <ul style={{listStyle:"none"}}>
               <li className="m-2"><b>Order ID:</b>    {props.order[id].orderid}</li>
               <li className="m-2"><b>Order Date:</b>    {props.order[id].orderdate}</li>
               <li className="m-2"><b>Username:</b>    {props.order[id].name}</li>
               <li className="m-2"><b>Phone:</b>    {props.order[id].phone}</li>
               <li className="m-2"><b>Address:</b>    {props.order[id].address}, {props.order[id].city}, {props.order[id].pincode}</li>
               <li className="m-2"><b>Transaction Type: </b>    {props.order[id].mode}</li>
               <li className="m-2"><b>Status: </b>    {props.order[id].compeleted? 'Completed':'Pending'}</li>
               <li className="m-2"><b>Total: </b>    {props.order[id].price}</li>
           </ul>
           <table className="table table-dark">
               <tr>
                   <th>Name</th>
                   <th>Image</th>
                   <th>Price</th>
                   <th>Quantity</th>
               </tr>
               {props.order[id].cakes.map((each,index)=>{
                   return (
                       <tr>
                           <td>{each.name}</td>
                           <td><img src={each.image} width="100px" alt={each.name}/></td>
                           <td>{each.price}</td>
                           <td>{each.quantity}</td>
                       </tr>
                   )
               })}
           </table>
           {/* <Link to="/checkout/order"> <button className="btn btn-dark">Go back</button></Link> */}
        </div>
    )
}
OrderView = withRouter(OrderView)
export default connect((state,props)=>{
    return {
        order:state?.order,
    }
})(OrderView)