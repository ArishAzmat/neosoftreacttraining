import { connect } from "react-redux"
import cart from "./cart"

function Summary(props) {
    
    return ( 
            <table className="table table-stripped" >
                <tr>
                    <th className="small_font">Cake Name</th>
                    <th className="small_font">Cake Image</th>
                    <th className="small_font">Cake Price</th>
                    <th className="small_font">Cake Quantity</th>
                </tr>
                {props.cart?.data?.length > 0 && props?.cart?.data?.map((each,index)=>{
                    return (
                        <tr>
                            <td className="small_font">{each.name}</td>
                            <td className="small_font"><img src={each.image} alt={each.name} style={{width:"75px"}}/></td>
                            <td className="small_font">{each.price}</td>
                            <td className="small_font">{each.quantity}</td>
                            
                        </tr>
                    )
                })} 
            </table> 
    )
}

export default connect(function(state,props) { 
    return {
        cart:state?.cart

    }
})(Summary)