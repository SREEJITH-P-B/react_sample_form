/*import React from 'react';
import Apihandling from "./components/Apihandling"


const App = () => {
const [productname, Setproductname] = React.useState('hello');
const changeProductname = (productname) => {
 Setproductname(productname);

}
  return (
      
      
       < Apihandling  />
    
  );
}

export default App;*/
/*import React from 'react';
import {useState} from 'react';
import './App.css';
import Employee  from './components/employee';

function App(){
    return(
    <div>
    <Employee/>
    </div>
    )
};
export default App*/

import React from 'react';
import Home from './Home';
import Login from './Login';
import Add from './Register';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App(){
      
  return (
   
    <Router>
    <div>

      <Switch>
          <Route path="/Home">
            <Home/>
          </Route>

          <Route path="/add">
            <Add/>
          </Route>

          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>

    
  );
}