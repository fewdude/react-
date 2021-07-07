import React from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom';
import Navbar from './Navbar';
/*
const About=({match})=>{
	return (<>
		<p>from about {match.params.a} and {match.params.b} </p>
		
		</>)
}
*/
const About=()=>{
	const {a,b}=useParams();
	const location=useLocation();
	const history=useHistory();
	//console.log(history)
	return (<>
		<p>from about {a}and {b}</p>
		
		{/*location.pathname===`/about/shiv/pujan`?(<button>click</button>):null*/}
		{a===`shiv`&&b===`pujan`?(<button onClick={()=>{
			history.push('/');
		}}>click</button>):null}

		
		
		</>)
}


export default About