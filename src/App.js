import React,{useState} from 'react';
import Ap from './Ap';
import Head from './Head';
import Para from './Para';
import ReactDOM from 'react-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';



/*function App(){
  return (
    <>
    <Head/>
    <Para/>
    <Ap/>
    </>
    );
}*/
/*
const Slotm=(props)=>{

  let x=props.x;
  let y=props.y;
  let z=props.z;

  if(x===y&&y===z){
    return(<>
      <div className="slot_inner">
      <h1>{x}{y}{z}</h1>
      <h2>This Is Matching</h2>
      <hr />


      </div>

      </>)
  }else{
      return(<>
      <div className="slot_inner">
      <h1>{x}{y}{z}</h1>
      <h2>This Is Not Matching</h2>


      </div>

      </>)

  }
}

const App=()=>{
  return(
    <>
    <h1> 🎰 Welcome to <span>  Slot Machine </span></h1>
    <div>
    <Slotm x='😇' y='😇' z='😇'/><Slotm x='😇' y='😇' z='✈'/>
    </div>
    </>
    )
}*/



 /*const App=()=>{
  const state=useState();

  //console.log(state);
  const [count,setCount]=useState(6);


  //let count=1;

const IncName=()=>{
  setCount(count+1);
  
  //const [count,setCount]=useState(5);
  console.log('clicked');
  //count++;
};


  return(
    <>
    <h1>{count}</h1>
    <button onClick={IncName}>Click Me</button>
    </>
    );
 };
*/
/*
const App=()=>{
  
 
  const [vl,newvl]=useState({
    name:"",
    password:"",
    email:""
  });
 /* const [vll,newvll]=useState();

  const [pv,pvl]=useState("");
  const[pvv,newps]=useState();*/
  /*const F1=(e)=>{
    
    const va=e.target.value;
    const name=e.target.name;
    newvl((prevValue)=>{
      if(name==='name'){
        return{
          name:va,
        password:prevValue.password,
        email:prevValue.email,
        }
        
      } else if(name==='password'){
        return{

          name:prevValue.name,
        password:va,
        email:prevValue.email
        }
        
      } else if(name==='email'){
        return{
          name:prevValue.name,
        password:va,
        email:va
        }
        
      }
      
    });
    //console.log(e.target.value);
    //vll=e.target.value
  };
  /*const F2=(e)=>{
    pvl(e.target.value);

  };*/
  /*const Values=(e)=>{
    e.preventDefault();
   

   
  };
  return (
    <>

    <h1>hello {vl.name} and {vl.password}and {vl.email} </h1>
    <form onSubmit={Values}>
    <input type="text" name="name" onChange={F1} value={vl.name}/>
    <input type="password" name="password" onChange={F1} value={vl.password}/>
    <input type="email" name="email" onChange={F1} value={vl.email}/>
    <button type="submit" >click me 👍</button>
    </form>


    </>);
};
*/

const App=()=>{
  const [inputList,setInputList]=useState("");
  const [item,setItems]=useState([]);
  const itemEvent=(e)=>{
    setInputList(e.target.value);

  };
  const litem=(e)=>{
    setItems((prevValue)=>{
      return [inputList,...prevValue];

    });
    setInputList("");


  };
  const dlt=(id)=>{
    console.log(id);
    setItems((prevValue)=>{
      return prevValue.filter((arra,indx)=>{
        return indx !== id;
      });

    });
  };
  return(
    <>
    <h1>To Do List</h1>
    <input type="text" onChange={itemEvent} value={inputList}/>
    <Button onClick={litem} variant="contained" color="secondary">➕</Button>
   
    <ol>
    {/*<li>{inputList}</li>*/}
    {item.map((itemValue,ind)=>{
          return <><li key={ind}><span onClick={()=>{
            dlt(ind);
          }}>✖ </span> {itemValue}</li><AddCircleOutlineIcon/></>
        })}
    </ol>
    </>)
};



export default App;