import {useState} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
function Header (props){ 
  var [search, setSearch] = useState('') 
  let searchq = (event)=>{ 
      setSearch(event.target.value);
          console.log("yeeee",event.target.value); 
      }
      // let searchdata = (event)=>{
      
      // }
  let logout = ()=>{
    props.changeLogout(false)
    
    console.log(props)
  }
  let login = ()=>{
    //props.changeLogout(true)
    console.log(props)
  }
        return ( <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <Link to="/">  <a className="navbar-brand btn btn-outline" href="#">Justice CakeShop, {props.userName}</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" onChange={searchq} placeholder="Search" aria-label="Search"/>
            <Link to={`/search?q=${search}`}><button className="btn btn-outline-success">Search</button></Link>
          </form>
          {props.checkLogin ? 
          <button className="btn btn-success"   onClick={logout}>Logout</button>:
          <Link to="/login"><button className="btn btn-primary"  onClick={login}>Login</button></Link>
         }
        </div>
      </nav>);
   
}
 
export default Header;