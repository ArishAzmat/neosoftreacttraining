import axios from "axios";
import { connect } from "react-redux";
import { Route } from "react-router";
import { Link } from "react-router-dom";

function Payment(props) {
  let totalPrice = 0;
  props.cart?.map((each, i) => {
    totalPrice += each.price * each.quantity;
  });
  let loading = false;
  let total = 0;
  let checkout = () => {
    loading = true;
    //axios
    var data = {
      name: props.address.name,
      phone: props.address.phone,
      address: props.address.address,
      pincode: props.address.pincode,
      city: props.address.city,
      cakes: props.cart,
      price: totalPrice,
    };
    // console.log("data--->", data);
    axios({
      method: "post",
      url: "https://apifromashu.herokuapp.com/api/addcakeorder",
      headers: { authtoken: localStorage.token },
      data: data,
    }).then(
      (response) => {
        props.dispatch({
            type:"UPDATE-CART",
            payload:false
          })
         
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    //axios
    setTimeout(() => {
      loading = false;
      props.dispatch({
        type: "CHECKOUT",
        payload: false,
      });
      props.history.push("/checkout/order");
    }, 2000);
  };
  return (
    <div className="col-md-10" style={{ textAlign: "left" }}>
      {props.cart?.length > 0 ? <div>
        <p>
        <b>Name:</b>
        {props.address?.name}
      </p>
      <p>
        <b>Phone:</b>
        {props.address?.phone}
      </p>
      <p>
        <b>Address: </b>
        {props.address?.address},{props.address?.city},{props.address?.pincode}
      </p>
      <p>
        <b>Type:</b>Cash On Delivery
      </p>
      <h3>Order:</h3>
      <table className="table m-2">
        <tr>
          <th>Cake Name</th> <th>Cake Image</th> <th>Cake Price</th>
        </tr>
        {props.cart?.length > 0 &&
          props?.cart?.map((each, index) => {
            {
              total += each.price * each.quantity;
            }
            return (
              <tr>
                <td className="small_font">{each.name}</td>
                <td className="small_font">
                  <img
                    src={each.image}
                    alt={each.name}
                    style={{ width: "75px" }}
                  />
                </td>
                <td className="small_font">{each.price}</td>
              </tr>
            );
          })}
        <tr>
          <th colSpan="2">Total</th> <th>{total}</th>
        </tr>
      </table>
      <button onClick={checkout} className="form-control btn btn-primary m-2">
        {loading ? (
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          "Place Order"
        )}
      </button>
        </div> : "Cart is Empty"}
    </div>
  );
}
export default connect((state, props) => {
  return {
    address: state?.address,
    cart: state?.cart.data,
  };
})(Payment);
