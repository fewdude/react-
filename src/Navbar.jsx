import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar=()=>{
	return (<>
		<NavLink exact activeClassName="astyle" to="/">home</NavLink><br/>
		<NavLink exact activeClassName="astyle" to="/about">about</NavLink><br/>
		<NavLink exact activeClassName="astyle" to="/contact">contact</NavLink><br/>
		<NavLink exact activeClassName="astyle" to="/about/name">name</NavLink><br/>

	</>)

}
export default Navbar