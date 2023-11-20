import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import "./multistage.css"
// import { useState } from 'react';s

export default function Firststage(props){
    const fdata=props.fdata;

    const handleChange = (e)=>{
        // e.PreventDafault(fdata);
        const Name=e.target.name;
        const Value=e.target.value
        props.setFData({...fdata,[Name]:Value})
        // console.log(data)
        props.onFirstpageChange(fdata)
        // console.log(e.target)


    }
    return(
        <div className='Fstage'>
            <h1 className='First'>FIRST STAGE</h1>
            <div className='firststage'>
                <label>First Name*</label>
                <InputGroup className="mb-3">
                   <Form.Control
                    name="firstname"
                    value={fdata.firstname}
                    placeholder="Enter your First name"
                    aria-label="Firstname"
                    aria-describedby="basic-addon1"
                    onChange={(e)=>{
                        handleChange(e)}}/>
               </InputGroup>

               <label>Last Name*</label>
                <InputGroup className="mb-3">
                   <Form.Control
                    name="lastname"
                    value={fdata.lastname}
                    placeholder="Enter your Last name"
                    aria-label="Lastname"
                    aria-describedby="basic-addon1"
                    onChange={(e)=>{
                        handleChange(e)}}
                    />
               </InputGroup>

               <label>Date of Birth*</label>
                <InputGroup className="mb-3">
                   <Form.Control
                    type='date'
                    name="dob"
                    value={fdata.dob}
                    onChange={handleChange}
                    placeholder="Enter your Date of birth"
                    aria-label="Date of birth"
                    aria-describedby="basic-addon1"
                    />
               </InputGroup>

               <label>Gender*</label>
               <Form.Select
                 className="mb-3 "
                 name='gender'
                 value={fdata.gender}
                 onChange={handleChange}
                 placeholder='---Select Gender---'
                 aria-label="Default select example">
                 <option  value="Select Gender">---Select Gender---</option>
                 <option  value="MALE"  >MALE</option>
                 <option  value="FEMALE" >FEMALE</option>
                 <option  value="OTHERS">OTHERS</option>
               </Form.Select>

               <Button variant="primary" onClick={()=>props.onFirststageButtonClick()}>NEXT</Button>





            </div>

        </div>
    )
}