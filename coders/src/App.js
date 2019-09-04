import React, {Component} from 'react';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';
import {Link, Switch, Route} from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  render(){
    return(
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/logout" component={Logout}/>
      </Switch>
    )
  }
}

const A =()=>{
  return(
    <div>
    <h1> This is component A page </h1>
    <Link to ="/b"> B Component </Link>
       
     </div>
  )
}

const B = ()=> {
  return(
        <div className="App">
      <header className="App-header">
      <!-- React JS -->
  <script src="http://fb.me/react-0.10.0.min.js"></script>
  <script src="http://fb.me/JSXTransformer-0.10.0.js"></script>

  <!-- Firebase JS -->
  <script src="https://cdn.firebase.com/js/client/1.0.17/firebase.js"></script>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  )
}





export default App;
