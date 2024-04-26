import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {


const [score,setScore] = useState("10"); 
const [comment,setComment]=useState("")

const HandleSubmit=(e)=>{
e.preventDefault();

Number(score)<=5 && comment.length<10? alert("Please explain the issue"): alert("Submitted")
console.log(score)
}

  return (
    <div className="container-fluid justify-content-center">
     <form onSubmit={HandleSubmit}> 
     <label><h2>Feedback Form</h2></label>
      <div className='form-group  col-3 justify-content-center'>
       
        <label><h4>Score: {score}<span><i class="bi bi-star-fill"></i></span></h4></label>
        <input type='range'required className='form-range' value={score} onChange={e=>setScore (e.target.value)}></input>
      </div>

      <div className='form-grpup'>
      <label><h4>Your Comments</h4></label>
      </div>
      <textarea value={comment} className='form-control col-3' onChange={e=>setComment(e.target.value)}></textarea>
      <button type='submit' disabled= {!comment} className='btn btn-primary mt-2'>Submit</button>
      </form>
    </div>
  );
}

export default App;
