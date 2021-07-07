import React,{useContext} from 'react';
import Cont3 from './Cont3';
import {Fname,Lname} from './Cont1';
const Cont2=()=>{
	const fname=useContext(Fname);
	const lname=useContext(Lname);
	return(<>
		{fname}{lname}
		
		<Cont3/>

	</>);
};
export default Cont2;