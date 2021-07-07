//var React = require('react');
//var ReactDOM=require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Card';
import Cdata from './Cdata';
import ToDoList from './ToDoList';
import Cont1 from './Cont1';
import UseEffectHook from './UseEffectHook';
import AxiosApi from './AxiosApi';
import Routerurl from './Routerurl';
import {BrowserRouter} from 'react-router-dom';

 
/*var b=" uttar pradesh"
var d=new Date().toLocaleDateString();
var c=new Date().toLocaleTimeString();
var aa={color:'red'};

ReactDOM.render(<React.Fragment>
  <h1 className="s">fsfsfs {` my name is${b}`} {d} </h1>
  <p style={aa}>fragment added{c}</p>
  <img src="https://www.w3schools.com/images/colorpicker.gif" />
  </React.Fragment>,
  document.getElementById('root'));*/
  /* greeting app start here
  let gr="";
  var stl={
    color:'red'
  }
  var dt=new Date(2021,5,5,20);
  var tm=dt.getHours();
  if(1<tm&&tm<12){
    stl.color="green"
     gr="Good Morning"
  }else if (18>tm&&tm>12) {
    stl.color="blue"
    gr="Good AfterNoon"
    
  }else{
    stl.color="red"
    gr="Good Night"

  }

  ReactDOM.render(<h1>Hello Sir, <span style={stl}> {gr}</span></h1>,document.getElementById('root'));
  greeting app end here */

function ncard(val,i,arr){
  return (
    <Card imgsrc={val.imgsrc} title={val.title} key={val.id}/>

    );

}
  
  ReactDOM.render(<>
    <BrowserRouter>
    <Routerurl />
    </BrowserRouter>
    
    
    
    
    {/*Cdata.map(ncard)*/}
    </>,document.getElementById('root'));

     