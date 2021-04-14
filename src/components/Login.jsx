import {useState,useEffect} from 'react';
import axios from "axios";
function Login (props){
    
    var user = {}
    var [user, setUser] = useState({})
    var [message, setMessage] = useState({})
    let getName = (event)=>{ 
        setUser({
            ...user,
                name : event.target.value
            });
            // console.log(event.target.value);
            user.name=event.target.value;
        }
   let getEmail = (event)=>{ 
        setUser({
            ...user,
                email : event.target.value
            });
            // console.log(event.target.value);
            user.email=event.target.value;
            console.log(user,'ss')
        }
       
    let getPassword = (event)=>{ 
         setUser({
             ...user,
            password :  event.target.value
        })
        // console.log(event.target.value);
        console.log(user,'pas')
    }
    let login =()=>{
        console.log(user)
       if(!user.email && !user.password && !user.name){
        setMessage({
            error: "Please enter valid credentials"
        }); 
       }
       else{
        setMessage({
            success: "Login Successfull"
        });
        axios({
            url:"http://apibyashu.herokuapp.com/api/login",
            method:"post",
            data:user,
        }).then((response)=>{
            console.log("success")
         props.set(true)
         props.userName(user.name)
        },(error)=>{
            console.log(error)
        })
        //    props.set(true)
        //    props.userName(user.email)
       }
    }
   
    return ( 
       <div className="col-md-6">
            
       <form >
          <h3>Login</h3>
         <input placeholder="Enter Your Name" className="form-control" type="text" onChange={getName}/> <br/>
         <input placeholder="Enter Your Name" className="form-control" type="text" onChange={getEmail}/> <br/>
          <input placeholder="Enter Your Password" className="form-control" type="text" onChange={getPassword}/> 
        </form>
            {message.success && <span className="alert alert-success">{message.success}</span>}
            {message.error && <span className="alert alert-danger">{message.error}</span>}
         <button className="btn btn-secondary m-3" onClick={login}>Login</button>
     </div>);
}

export default Login;