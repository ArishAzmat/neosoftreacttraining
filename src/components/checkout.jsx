import { Route } from "react-router";
import { Link } from "react-router-dom";
import { useRouteMatch } from 'react-router-dom' 
import Address from "./Address";
import Payment from "./Payment";
import CartSummary from "./CartSummary";
import Order from "./Order";
import { connect } from "react-redux";
function Checkout(props) {
    if(props?.isLoggedin){
        console.log("logged in")
    }
    else{
        console.log("not logged in",props)
        props.history.push('/')
    }
    // var route = useRouteMatch()
    // var url = route.url
    // var path= route.path
    // console.log(url,"path  :"+ path)
    console.log(props.match)
    return (
        <div>
             <h1 style={{margin:"20px"}}>Checkout</h1>
            <div className="row">
               <div className="col-md-4" >
                  
                   <table className="table side-bar-box">
                       <tr>
                           <th>
                               <Link to={props.match.url} className="btn btn-dark form-control" style={{ textDecoration: 'none',color: '#fff' }} >
                                Summary
                                </Link>
                           </th>
                        </tr>
                       <tr>
                           <th>
                               <Link to={props.match.url +"/address"} className="btn btn-dark form-control"  style={{ textDecoration: 'none',color: '#fff' }} >
                                   Address
                                </Link>
                            </th>
                        </tr>
                       <tr>
                           <th>
                               <Link to={props.match.url +"/payment"} className="btn btn-dark form-control" style={{ textDecoration: 'none',color: '#fff' }} >
                                   Payment
                                </Link>
                            </th>
                        </tr> 
                        <tr>
                           <th>
                               <Link to={props.match.url +"/order"} className="btn btn-dark form-control" style={{ textDecoration: 'none',color: '#fff' }} >
                                   Order
                                </Link>
                            </th>
                        </tr> 
                   </table> 
               </div>
            <div className="col-md-8">
                <Route exact path={props.match.path} component={CartSummary} ></Route>
                <Route exact path={props.match.path+"/address"} component={Address}></Route>
                <Route exact path={props.match.path+"payment"} component={Payment}></Route>
                <Route exact path={props.match.path+"/order"}></Route>
            </div>
            </div>
        </div>
    )
}
export default connect(function(state,props){
    return {
        isLoggedin:state?.isLoggedin
    }
})(Checkout)