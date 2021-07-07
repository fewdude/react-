import React,{useState,useEffect} from 'react';
import axios from 'axios';

const AxiosApi=()=>{
	const [num,setNum]=useState();
	const [name,setName]=useState("");
	const [move,setMove]=useState();
	useEffect(async ()=>{
		//async function getData(){
			const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
			//console.log(res.data)
			setName(res.data.name);
			setMove(res.data.moves.length);
		//}
		//getData();
	});
	return(<>
		<h1>you choose {num}</h1>
		<h1>My name is {name}</h1>
		<h1>My move is {move}</h1>
		
		<select onChange={(e)=>{
			setNum(e.target.value);
		}} value={num}>
			<option value="1">1</option>
			<option value="25">25</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="6">6</option>
		</select>
	</>)

}
export default AxiosApi