import React,{useState,useEffect} from 'react';

const UseEffectHook=()=>{
	const [num,setNum]=useState(0);
	const [nums,setNums]=useState(0);
	useEffect(()=>{
		alert("you click me use effect ")

	},[num]);

	return(<>
		 <button onClick={(e)=>{setNum(num+1)}}>click me {num}</button><br/>
		 <button onClick={(e)=>{setNums(nums+1)}}>click me {nums}</button>
		

	</>);

}
export default UseEffectHook;