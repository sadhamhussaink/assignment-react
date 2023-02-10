
import './App.css';
import { BsXLg } from "react-icons/bs";

const Detail = ({tempArray,removeDetail})=>{

    return(
        <div>
         <div className='detail-card'>
         <div className='detail-remove' onClick={() => removeDetail(tempArray.name)}>
         <BsXLg />
        </div>
        <div>
        <div className='row'>
          <span className='label'>Name</span>
          <span className='detail-right-label'>{tempArray.name}</span>
        </div>
        <div className='row'>
          <span className='label'>Age</span>
          <span className='detail-right-label'>{tempArray.age}</span>
        </div>
        <div className='row'>
          <span className='label'>Ph no</span>
          <span className='detail-right-label'>{tempArray.number}</span>
        </div>
        </div>
      </div>
        </div>
    );
}
export default Detail;