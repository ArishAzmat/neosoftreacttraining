import {useState} from 'react';
import axios from "axios";
function Header (props){ 
  var [search, setSearch] = useState('') 
  let searchq = (event)=>{ 
      setSearch(event.target.value);
          console.log(event.target.value); 
      }
      let searchdata = (event)=>{
        event.preventDefault();
        console.log("https://apibyashu.herokuapp.com/api/searchcakes?q=chocolate"+search)
        axios({
          url:"https://apibyashu.herokuapp.com/api/searchcakes?q="+search,
          method:"get", 
      }).then((response)=>{
          console.log(response)
          props.getSearchData(response.data.data)
      // props.set(true)
      // props.userName(user.name)
      },(error)=>{
          console.log(error)
      })
      }
  let logout = ()=>{
    props.changeLogout(false)
    
    console.log(props)
  }
  let login = ()=>{
    //props.changeLogout(true)
    console.log(props)
  }
        return ( <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Hello, {props.userName}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
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
            <button onClick={searchdata} className="btn btn-outline-success">Search</button>
          </form>
          {props.checkLogin ? 
          <button className="btn btn-success"   onClick={logout}>Logout</button>:
          <button className="btn btn-primary"  onClick={login}>Login</button>
         }
        </div>
      </nav>);
   
}
 
export default Header;