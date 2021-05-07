import axios from 'axios'
import {useState} from 'react'
function ResetPassword(props){
    let [message,setMessage] = useState({})
    let reset = function(e){
        e.preventDefault()
        let  email = e.target.elements.email.value
        if(!validateEmail(email)){
            setMessage({
                error:"Only Valid Email Please :(",
                success:null
            })
        }
        else{
            axios({
                url:"https://apifromashu.herokuapp.com/api/recoverpassword",
                method:"post",
                data:{email:email},
            }).then((response)=>{
                console.log(response)
                if(response.data.message=="Password Sent to your email"){ 
                console.log("API HIT:","Forgot Password")
                setMessage({
                    success: "Password Sent to your email",
                    error:null
                });
                setTimeout(()=>{ props.history.push('/login') }, 2000);
            }
            else if(response.data.message=="No Such Email exists"){
                console.log("API HIT:","Forgot Password")
                setMessage({
                    error: "No user found with this Email",
                    success:null
                });
            }
            else{
                // console.log("asdsad");
                setMessage({
                    error: "Something went Wrong"
                }); 
            }
            },(error)=>{
                console.log(error)
            })
        }
        console.log(email)

    }
    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <center><br/>
            <h3>Reset Password</h3>
            
            <form style={{width:"500px"}} onSubmit={reset}>
                <input id="email" type="text" className="form-control" name="email" placeholder="Enter Your Email"/>
                 <br/>
                 <p style={{fontSize:"9px;"}}>Enter your email and you'll receive an email to reset your password</p>
                 <button  className="form-control btn btn-dark">Reset Link</button>
                <br/><br/>
                {message.success && <span className="alert alert-success">{message.success}</span>}
            {message.error && <span className="alert alert-danger">{message.error}</span>}
            </form>
        </center>
    )
}
export default ResetPassword