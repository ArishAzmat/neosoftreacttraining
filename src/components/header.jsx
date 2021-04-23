import {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
function Header (props){ 
  // console.log(props.updatecart)R
  useEffect(()=>{
    axios({
        method:'post',
        url:"https://apibyashu.herokuapp.com/api/cakecart",
        headers:{authtoken:localStorage.token},
      }).then((response)=>{ 
        console.log("API HIT: Cart success")
        props.dispatch({
          type:"CART",
          payload:response.data.data
        })
        props.dispatch({
          type:"UPDATE-CART",
          payload:true
        })
        // setCart(response.data.data)
        // setRemoved(false)
      },(error)=>{
        console.log("error",error)
      })
   },[props.updatecart,localStorage.token])
  var [search, setSearch] = useState('') 
  let searchq = (event)=>{ 
      setSearch(event.target.value);
          // console.log("yeeee",event.target.value); 
      }
      // let searchdata = (event)=>{
      
      // }
  let logout = (event)=>{ 
    props.dispatch({
        type:"LOGOUT",
    })
    props.dispatch({
      type:"CART",
      payload:null
  })
    
    console.log(props)
  }
  let islogin = ()=>{
    //props.changeLogout(true)
    // console.log(props)
  } 
        return ( <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <Link to="/"> <a className="navbar-brand btn btn-outline" href="#">Justice CakeShop  {props.user && <span>, Welcome {props.user}</span>}</a> </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <Link to="/"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
            </li>  */}
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}
            <li className="nav-item">
              <Link to="/cart"><button className="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> Cart ({props?.cart?.data?.length? props.cart.data.length: 0 })</button></Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" onChange={searchq} placeholder="Search" aria-label="Search"/>
            <Link to={`/search?q=${search}`}><button className="btn btn-outline-success">Search</button></Link>
          </form>
          {props.loginstatus ? 
          <button className="btn btn-danger"   onClick={logout}>Logout</button>:
          <Link to="/login"><button className="btn btn-primary"  onClick={islogin}>Login</button></Link>
         }
        </div>
      </nav>);
   
}
 
export default connect(function(state,props){
  // console.log("state initially",state)
  return {
    user:state?.user?.name,
    loginstatus:state?.isLoggedin,
    cart:state?.cart,
    updatecart:state?.updatecart
  }
})(Header);