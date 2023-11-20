import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import "./multistage.css"
// import { useState } from 'react';


export default function Thirdstage(props){
    const tdata=props.tdata;

    const handleChange = (e)=>{
        const Name=e.target.name;
        const Value=e.target.value
        props.setTData({...tdata,[Name]:Value})
        // console.log(data)
        props.onThirdpageChange(tdata)

    }
 

    return(
        <div className='Fstage'>
            <h1 className='First'>THIRD STAGE</h1>
            <div className='firststage'>
                <label>Street Name*</label>
                <InputGroup className="mb-3">
                   <Form.Control
                    name="street"
                    value={tdata.street}
                    placeholder="Enter your Street name"
                    aria-label="Streetname"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    />
               </InputGroup>

               <label>City*</label>
                <InputGroup className="mb-3">
                   <Form.Control
                    name="city"
                    value={tdata.city}
                    placeholder="Enter your City name"
                    aria-label="City"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    />
               </InputGroup>

               <label>State*</label>
                <InputGroup className="mb-3">
                   <Form.Control
                    name="state"
                    value={tdata.state}
                    placeholder="Enter your State name"
                    aria-label="State name"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    />
               </InputGroup>

               <label>Country*</label>
                <InputGroup className="mb-3">
                   <Form.Control
                    name="country"
                    value={tdata.country}
                    placeholder="Enter your Country name"
                    aria-label="Country"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    />
               </InputGroup>

               <Button variant="primary" onClick={()=>{props.onThirdstageButtonClick('prev')}}>PREV</Button>
               <Button className='success-btn' variant="success" onClick={()=>{props.onThirdstageButtonClick('submit')}}>SUBMIT</Button>






            </div>

        </div>
    )
}