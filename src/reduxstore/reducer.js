
var demo = function(state = null, action){
    switch(action.type){
        //LOGIN
        case "LOGIN":{
            // console.log("here we have to write logic for login")
            state = {...state} 
            state['isfetching'] = true
            return state
        } 
        case "LOGIN_SUCCESS":{
            // console.log("here we have to write logic for login")
            state = {...state} 
            state['isLoggedin'] = true
            state["user"] = action.payload
            state['isfetching'] = false
            state['isloginerror'] = false
            return state
        }
        case "LOGIN_FAILURE":{
            state = {...state}
            state["isfetching"] = false
            state["isloginerror"] = true
            return state
        }
        //
        case "LOGOUT":{
            // console.log("here we have to write logic for logout")
            state = {...state} 
            localStorage.clear()
            delete state['isLoggedin']  
            delete state['user'] 
            return state
        } 
        case "CART":{
            // console.log("redux cart")
            state = {...state}   
            state['cart'] = {data:action.payload}
            return state
        } 
        case "UPDATE-CART":{
            // console.log("redux update cart",state.updatecart)
            state = {...state}   
            state['updatecart'] = action.payload
            return state
        } 
        case "ADDRESS":{
            // console.log("redux Session")
            state = {...state}   
            state['isaddress'] = true
            state['address'] = action.payload
            return state
        } 
        case "CHECKOUT":{
            // console.log("redux Session")
            state = {...state}   
            state['page'] = action.payload
            return state
        } 
        case "ORDERS":{
            // console.log("redux Session")
            state = {...state}   
            state['order'] = action.payload
            return state
        } 

        default : return state
    }

}
export default demo