// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hi hello!!! welcome to Multiple Stage Form</h1>
        <div>
          <label style={{margin:0,padding:0,fontSize:"15px",textAlign:"right"}}>FIRST NAME*</label><br></br>
          <input type='text' placeholder='Enter your First name' 
                 style={{width:"300px",height:"30px",textAlign:"center",borderRadius:"5px"}}></input>
        </div>
        <div>
          <label style={{margin:0,padding:0,fontSize:"15px",textAlign:"right"}}>FIRST NAME*</label><br></br>
          <input type='text' placeholder='Enter your First name' 
                 style={{width:"300px",height:"30px",textAlign:"center",borderRadius:"5px"}}></input>
        </div>
        <div>
          <label style={{margin:0,padding:0,fontSize:"15px",textAlign:"right"}}>FIRST NAME*</label><br></br>
          <input type='text' placeholder='Enter your First name' 
                 style={{width:"300px",height:"30px",textAlign:"center",borderRadius:"5px"}}></input>
        </div>
        <div>
          <label style={{margin:0,padding:0,fontSize:"15px",textAlign:"right"}}>FIRST NAME*</label><br></br>
          <input type='text' placeholder='Enter your First name' 
                 style={{width:"300px",height:"30px",textAlign:"center",borderRadius:"5px"}}></input><br></br>
          <button style={{marginTop:"20px",borderRadius:"5px"}}>NEXT</button>
        </div>

      </header>
    </div>
  );
}

export default App;
