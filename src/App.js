// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Firststage from './components/Firststage';
import Secondstage from './components/Secondstage';
import Thirdstage from './components/Thirdstage';
import Results from './components/Results';
// import Button from 'react-bootstrap/Button'





function App() {
  const [details,setDetails]=useState({
    firstname:"",
    lastname:"",
    dob:"",
    gender:"",
    college:"",
    degree:"",
    EmailID:"",
    contactnumber:"",
    street:"",
    city:"",
    state:"",
    country:""

  })
  console.log(details)

  const [isFirststage, setIsFirststage] = useState(true);
  const [isSecondstage,setIsSecondstage] = useState(false);
  const [isThirdstage,setIsThirdstage] = useState(false);
  const [isSubmitted,setIsSubmited] = useState(false)
  // use state data
  const [formData,setFormData] = useState({})
  // const alldata = [{...formData}]
  // console.log(alldata)

 const onFirststageButtonClick = ()=>{
  
    if( validate(details.firstname,'text') && validate(details.lastname,'text') && details.dob && validate(details.gender,'text')){
    setIsFirststage(false);
    setIsSecondstage(true);
    }
    else{alert("every inputs are need values")}
  }

  const validate =(value,type)=>{
    
    if(type === 'text' && value.length !== 0){
      const data =/^[a-zA-Z]/.test()
      console.log(data)
     return  data
    }else if(type === 'email' && value.length !== 0){
      console.log(/^S+@\S+\.\S+$/.test(value))
      
      return  value
    }else if(type === 'number' && value.length !== 0){
      console.log(/^[0-9]/.test(value))
      return  /^[0-9]/.test(value)
    }else{
      return false
    }

  }
  const onSecondstageButtonClick = (key)=>{

      if(key==='next'){
        if( validate(details.college,'text') && validate(details.degree,'text') && validate(details.EmailID,"email") && validate(details.contactnumber,'number')){
        setIsSecondstage(false);
        setIsThirdstage(true);
        }else{
          alert("every inputs are need values")
        }
      }
      else{
        setIsSecondstage(false);
        setIsFirststage(true);
        setIsThirdstage(false);
    
      }

  }

  const onThirdstageButtonClick = (key)=>{
    if(key==='prev'){
      setIsSecondstage(true);
      setIsThirdstage(false);  
    }
    else{
      if( validate(details.street,'text') && validate(details.city,'text') && validate(details.state,"text") && validate(details.country,'text')){
      setIsFirststage(false);
      setIsSecondstage(false);
      setIsThirdstage(false);
      setIsSubmited(true)
      }else{
        alert("every inputs are need values")
      }
    }
  }

  const onGoToHomepage = ()=>{
    setIsFirststage(true);
    setIsSubmited(false)
    setDetails({
      firstname:"",
      lastname:"",
      dob:"",
      gender:"",
      college:"",
      degree:"",
      EmailID:"",
      contactnumber:"",
      street:"",
      city:"",
      state:"",
      country:""
  
    })
  }

  // onfirstpagechange arg data
  const onFirstpageChange = (fdata)=>{
    
    setFormData({...formData, ...fdata});
    // console.log(formData)
  }
  //setData

  const onSecondpageChange = (sdata)=>{
    setFormData({...formData,...sdata})
    // console.log(formData)

  }

  const onThirdpageChange = (tdata)=>{
    setFormData({...formData,...tdata})
    // console.log(formData)
  }


  return (
    <div className="App" >
      <header className='App-header'>
        <h1>GO POLICY/GOOD.IN</h1>
        <h4>Customer Profile Registration</h4>
      </header>

      {isFirststage &&
      <>      <Firststage fdata={details} setFData={setDetails} onFirststageButtonClick={onFirststageButtonClick} onFirstpageChange={onFirstpageChange}/>      </>
      }
      
      {isSecondstage &&
        <>      <Secondstage sdata={details} setSData={setDetails} onSecondstageButtonClick={onSecondstageButtonClick} onSecondpageChange={onSecondpageChange}/>        </>
      }

      {isThirdstage &&
      <>      <Thirdstage tdata={details} setTData={setDetails} onThirdstageButtonClick={onThirdstageButtonClick} onThirdpageChange={onThirdpageChange}/>      </>
      }
      {isSubmitted && 
      <>      <Results formData={details} onGoToHomepage={onGoToHomepage}/>   </>
      }
    </div>
  );
}

export default App;
