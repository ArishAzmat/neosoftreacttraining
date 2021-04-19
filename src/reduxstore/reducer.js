var demo = function(state = null, action){
    switch(action.type){
        case "LOGIN":{
            // console.log("here we have to write logic for login")
            state = {...state} 
            state['isLoggedin'] = true
            state['user'] = action.payload
            return state
        } 
        case "LOGOUT":{
            // console.log("here we have to write logic for logout")
            state = {...state} 
            localStorage.clear()
            delete state['isLoggedin']  
            delete state['user'] 
            return state
        } 
        case "CART":{
            console.log("here we have to write logic for cart")
            state = {...state}   
            state['cart'] = {data:action.payload}
            return state
        } 

        default : return state
    }

}
export default demo