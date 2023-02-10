
import './App.css';
import Detail from './detail';
import React,{useState} from 'react';

function App() {
  const [detailArray,setDetailArray] = useState([]);
  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [number,setNumber] = useState('');

const addButtonAction = ()=>{

  let tempArray = [...detailArray];

  let tempObj = {
    name,
    age,
    number,
  }
  tempArray.push(tempObj);
  setDetailArray(tempArray);
  clearInputValue();
}

const clearInputValue = () =>{
  setName('');
  setAge('');
  setNumber('');
}

const removeDetail = (name) =>{
  let tempArray = [...detailArray];
 setDetailArray(tempArray.filter((temp) => temp.name !== name));
}

  return (
    <>
    <div className="App">
      <div className='card'>
        <div className='row'>
          <span className='label'>Name</span>
          <input className='text-Input' type="text" autoComplete='false'
          value={name}
           onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <div className='row'>
          <span className='label'>Age</span>
          <input className='text-Input' type="text"
          autoComplete='false'
          value={age}
           onChange={(e)=>setAge(e.target.value)}></input>
        </div>
        <div className='row'>
          <span className='label'>Ph no</span>
          <input className='text-Input'
          autoComplete='false'
          type="text"
          value={number}
           onChange={(e)=>setNumber(e.target.value)}></input>
        </div>

      </div>
      <button className='add-button' disabled={!name || !age || !number} onClick={()=>addButtonAction()}>Add</button>
    </div>
    { detailArray.length > 0 && 
    <div className='detail-div'>
    {detailArray?.map((tempArray) => (
      <Detail 
      tempArray={tempArray} 
      removeDetail={removeDetail}></Detail>
    ))}
    </div>
    }
    </>
  );
}

export default App;
