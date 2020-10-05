import React,{Component} from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'

 //apply lazy loading
import asyncComponent from "./hoc/asynComponent";
const asyncBooks=asyncComponent(()=>{
  return import("./containers/Products/Books/Books")
});
const asyncBags=asyncComponent(()=>{
  return import("./containers/Products/Bags/Bags")
});
const asyncMics=asyncComponent(()=>{
  return import("./containers/Products/Mics/Mics")
});
const asyncTshirts=asyncComponent(()=>{
  return import("./containers/Products/Tshirts/Tshirts")
});
const asyncDefault=asyncComponent(()=>{
  return import("./containers/Products/Default/Default")
});

class App extends Component{
  state={
  }

  render() {
    return (
        <div className="App">
            <Switch>
              <Route path='/Books'  component={asyncBooks}/>
              <Route path='/Bags'  component={asyncBags}/>
              <Route path='/Mics' component={asyncMics}/>
              <Route path='/Tshirts' component={asyncTshirts}/>
              <Route path='/' exact component={asyncDefault}/>

            </Switch>

        </div>
    );
  }
}


export default App;
