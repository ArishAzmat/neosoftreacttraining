import {useState,useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
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
       if(!user.email || !user.password || !user.name){
        setMessage({
            error: "Please Fill all required fields"
        }); 
       }
       else{
        axios({
            url:"https://apibyashu.herokuapp.com/api/login",
            method:"post",
            data:user,
        }).then((response)=>{
            console.log("success: ",response)
            if(response.data.token){
            setMessage({
                success: "Login Successfull"
            });
            props.history.push('/')
         props.set(true)
         props.userName(user.name)
        }
        else{
            // console.log("asdsad");
            setMessage({
                error: "Invalid Credentials"
            }); 
        }
        },(error)=>{
            console.log(error)
        })
        //    props.set(true)
        //    props.userName(user.email)
       }
    }
   
    return ( 
       <center>
            
       <form style={{width: "500px"}}>
          <h3>Login</h3>
         <input placeholder="Enter Your Name" className="form-control" type="text" onChange={getName}/> <br/>
         <input placeholder="Enter Your Email" className="form-control" type="text" onChange={getEmail}/> <br/>
          <input placeholder="Enter Your Password" className="form-control" type="text" onChange={getPassword}/> 
        </form>
           <Link to="signup"> <a href="#">Don't have an account Signup</a></Link>
         <button className="btn btn-secondary m-3" onClick={login}>Login</button>
         {message.success && <span className="alert alert-success">{message.success}</span>}
            {message.error && <span className="alert alert-danger">{message.error}</span>}
     </center>);
}

export default withRouter(Login);