import { connect } from "react-redux"
function Summary(props) {
    let total = 0;
    return ( 
            <table className="table table-stripped" >
                <tr>
                    <th className="small_font">Cake Name</th>
                    <th className="small_font">Cake Image</th>
                    <th className="small_font">Cake Price</th>
                </tr>
                {props.cart?.data?.length > 0 && props?.cart?.data?.map((each,index)=>{
                    {total += each.price * each.quantity}
                    return (
                        <tr>
                            <td className="small_font">{each.name} ({each.quantity})</td>
                            <td className="small_font"><img src={each.image} alt={each.name} style={{width:"75px"}}/></td>
                            <td className="small_font">{each.price}</td>
                            
                        </tr>
                    )
                   
                })} 
                <tr><th colSpan="2">Total</th> <th>{total}</th></tr>
            </table> 
    )
}

export default connect(function(state,props) { 
    return {
        cart:state?.cart

    }
})(Summary)