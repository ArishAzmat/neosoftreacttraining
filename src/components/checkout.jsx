import { Route } from "react-router";
import { Link } from "react-router-dom";
function Checkout(props) {
    return (
        <div>
            <div className="row">
               <div className="col-md-4">
               <Link to="checkout">summary</Link>
                <Link to="address">address</Link>
                <Link to="payment">payment</Link>
               </div>
            </div>
            <div>
                <Route exact path="checkout"></Route>
                <Route exact path></Route>
                <Route></Route>
                <Route></Route>
            </div>
        </div>
    )
}
export default Checkout