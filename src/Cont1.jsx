import React,{createContext} from 'react';
import Cont2 from './Cont2';
const Fname=createContext();
const Lname=createContext();

const Cont1=()=>{
	return(<>
		<Fname.Provider value={"hi"}>
		<Lname.Provider value={"hello"}>
		<Cont2/>
		</Lname.Provider>
			
		</Fname.Provider>
		

		

	</>);
};
export default Cont1;
export {Fname,Lname};
