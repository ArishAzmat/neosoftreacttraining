import './App.css';
import Home from './components/Home';
import Header from './components/header';
import Slider from './components/slider';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {useState} from 'react';
import Signup from './components/signup';
import CakeDetails from './components/CakeDetails';
import Search from './components/search';

function App() {
 
  let [details, setDetails] = useState({}) 
  let [cakes, setCakes] = useState({})
  let [searchCake, setSearchCake] = useState({})
  let [login, setlogin] = useState(false);
  let [name, setName] = useState('Anonymous User');
  
  return (
    <div className="App">
      <Router>
      <Header getSearchData={setSearchCake} userName={name} checkLogin={login} changeLogout={setlogin,setlogin}/>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/login' ><Login userName={setName} checkLogin={login} set={setlogin}/></Route>
        <Route exact path='/cake/:cakeid'><CakeDetails /></Route>
        <Route exact path='/search' component={Search}></Route>
      </Router>
          {/* <Login userName={setName} checkLogin={login} set={setlogin}/></Router> */}
    </div>
  );
}

export default App;
