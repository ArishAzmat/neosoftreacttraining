import axios from "axios"
export function loginUser (user, url){
    return function(dispatch, getState){
        // console.log("bitch ass nigga thunk")
        dispatch({
            type:"LOGIN"
        })
        // console.log("thunk ki state",getState())
        var  state = getState()
        axios({
            method:"post",
            url:url+"login",
            data:user
        }).then((response)=>{
            if(response.data.token){
                // console.log("hmmmm working....",response)
                localStorage.setItem('token', response.data.token);
                dispatch({
                    type:"LOGIN_SUCCESS",
                    payload:response.data
                })
            }
        })
    }
}

export function myorder(url){
   return function (dispatch,getState){
       console.log("order in thunk")
    axios({
        method: "post",
        url: "https://apifromashu.herokuapp.com/api/cakeorders",
        headers: {
          authtoken: localStorage.token,
        },
      }).then((response) => {
        console.log("thunk......", response.data.cakeorders);
        // setOrderData(response.data.cakeorders)

        dispatch({
            type:"ORDERS",
            payload:response.data.cakeorders
        })
      });
   }
}