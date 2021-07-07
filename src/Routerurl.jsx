import React from 'react';
import About from './About';
import Contact from './Contact';
import {Route,Switch,Redirect} from 'react-router-dom';
import Errorr from './Errorr';
import Navbar from './Navbar';


const Routerurl=()=>{
	const Name=()=>{
	return(<>
		<p>name</p>
	</>)
}
	return (<>
		<Navbar/>
		<Switch>
		<Route exact path="/" component={Errorr}/>
		
		<Route exact path="/about/:a/:b" component={About}/>
		<Route  path="/about/name" component={Name}/>
		<Route path="/contact" component={Contact}/>
		{/*<Route  component={Errorr}/>*/}
		<Redirect to="/"/>
		</Switch>
		
		
		
	</>)
}

export default Routerurl