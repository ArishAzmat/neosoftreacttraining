import {Component} from 'react'
import axios from "axios";
class Signup extends Component{
    constructor(props){
        super()
        this.state = {
            count : 0,  
        }
    }
    user = {}
    getName = (event)=>{ 
        this.user.name = event.target.value
        }
    getEmail = (event)=>{ 
        this.user.email = event.target.value
        // if(event.target.value  === 'some@email.com'){
        //     this.setState({
        //         errorEmail : ''
        //     });
        // }else{
        //     this.setState({
        //         errorEmail : 'Please enter a valid email'
        //     });
        // }
        //console.log(event.target.value);
    }
    getPassword = (event)=>{ 
        this.user.password = event.target.value
    //    if(event.target.value === '123'){
    //     this.setState({
    //         errorPassword : ""
    //     });
    //    }else{
    //     this.setState({
    //         errorPassword : "Please Enter a valid Password"
    //     });
    //    }
    }
    register = ()=>{   
        //console.log(this.user)
        if(!this.user.email || !this.user.password){
            this.setState({
                errorMessage : 'Please fill all details'
            })
        }
        // else if (this.user.email !== 'some@email.com' && this.user.password !== '123' ){
        //     this.setState({
        //         errorMessage : 'Email or Password is invalid'
        //     })
        // }
        else{
            this.setState({
                errorMessage : ''
            })
            axios({
                url:"https://apibyashu.herokuapp.com/api/register",
                method:"post",
                data:this.user,
            }).then((response)=>{ 
                if(response.data.message == "User Registered"){
                    this.setState({
                        Message :"Registered Successfully Please Check your Email",
                        errorMessage : false
                    })
                    setTimeout(()=>{
                        this.props.history.push('/')
                    },2000)
                   
                }
                else{
                    this.setState({
                        Message : false,
                        errorMessage : response.data.message
                    })
                }
                //console.log(response)
            },(error)=>{
                //console.log(error)
            })
        }
        
    }
    render(){
        return (
            <center> 
             <form style={{width: "500px"}}>
                  <h3>Register</h3>
                  <input placeholder="Enter Your Name" className="form-control" type="text" onChange={this.getName}/> <br/>
                <input placeholder="Enter Your Email" className="form-control" type="text" onChange={this.getEmail}/>
                <br/>
                 <input placeholder="Enter Your Password" className="form-control" type="text" onChange={this.getPassword}/>
                 <span  className="alert">{this.state.errorPassword}</span>
               </form>
               {this.state.errorMessage && <span  className="alert-danger">{this.state.errorMessage}</span> }
               
               {this.state.Message && <span  className="alert-success">{this.state.Message}</span> }
                <button className="btn btn-secondary m-3" onClick={this.register}>register</button>
            </center>
        )
    }
}
 
export default Signup;