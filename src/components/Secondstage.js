import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import "./multistage.css"
// import { useState } from 'react';



export default function Secondstage(props){
    const sdata=props.sdata;

    const handleChange = (e)=>{
        const Name=e.target.name;
        const Value=e.target.value
        props.setSData({...sdata,[Name]:Value})
        // console.log(data)
        props.onSecondpageChange(sdata)

    }

    return(
        <div className='Fstage'>
            <h1 className='First'>SECOND STAGE</h1>
            <div className='firststage'>
                <label>College Name*</label>
                <InputGroup className="mb-3">
                   <Form.Control
                    name="college"
                    value={sdata.college}
                    placeholder="Enter your College name"
                    aria-label="Collegename"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    />
               </InputGroup>

               <label>Degree*</label>
                <InputGroup className="mb-3">
                   <Form.Control
                    name="degree"
                    value={sdata.degree}
                    placeholder="Enter your Degree"
                    aria-label="Degree"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    />
               </InputGroup>

               <label>Email ID*</label>
                <InputGroup className="mb-3">
                   <Form.Control
                    name="EmailID"
                    value={sdata.EmailID}
                    placeholder="Enter your Email ID"
                    aria-label="Email ID"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    />
               </InputGroup>

               <label>Contact Number*</label>
                <InputGroup className="mb-3">
                   <Form.Control
                    name="contactnumber"
                    value={sdata.contactnumber}
                    type='number'
                    placeholder="Enter your Contact Number"
                    aria-label="Contact Number"
                    aria-describedby="basic-addon1"
                    // maxLength={10}
                    onChange={handleChange}
                    />
               </InputGroup>

               <Button variant="info" onClick={()=>{props.onSecondstageButtonClick('prev')}}>PREV</Button>
               <Button className='success-btn' variant="primary" onClick={()=>{props.onSecondstageButtonClick('next')}}>NEXT</Button>






            </div>

        </div>
    )
}