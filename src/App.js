// import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function App() {
  return (
    <div className="App" >
      <header className="App-header"style={{border:"red solid 5px",width:"500px"}}>
        <h1>hi hello!!! welcome to Multiple Stage Form</h1>
        <div>
          <label style={{margin:0,padding:0,fontSize:"15px",textAlign:"right"}}>FIRST NAME*</label><br></br>
          <input type='text' placeholder='Enter your First name' 
                 style={{width:"300px",height:"30px",textAlign:"center",borderRadius:"5px"}}></input>
        </div>
        <div>
          <label style={{margin:0,padding:0,fontSize:"15px",textAlign:"right"}}>LAST NAME*</label><br></br>
          <input type='text' placeholder='Enter your last name' 
                 style={{width:"300px",height:"30px",textAlign:"center",borderRadius:"5px"}}></input>
        </div>
        <div>
          <label style={{margin:0,padding:0,fontSize:"15px",textAlign:"right"}}>DATE OF BIRTH*</label><br></br>
          <input type='text' placeholder='Enter your Date of Birth' 
                 style={{width:"300px",height:"30px",textAlign:"center",borderRadius:"5px"}}></input>
        </div>
        <div>
          <label style={{margin:0,padding:0,fontSize:"15px",textAlign:"right"}}>GENDER NAME*</label><br></br>
          <input type='text' placeholder='Enter your Gender name' 
                 style={{width:"300px",height:"30px",textAlign:"center",borderRadius:"5px"}}></input><br></br>
          <button style={{marginTop:"20px",borderRadius:"5px"}}>NEXT</button>
        </div>

      </header>
      <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      </div>
    </div>
  );
}

export default App;
