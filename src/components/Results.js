import React,{useRef} from "react";
import { Button } from "react-bootstrap"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


export default function Results(props){

    const pdf=useRef(null)
    const formData = props.formData;
    const handleDownload =()=>{
        const toPdf = pdf.current
        html2canvas(toPdf).then(res=>{
            const imgData =res.toDataURL('image/png')
            const jsPDFData = new jsPDF()
            jsPDFData.addImage(imgData,'png',0,0);
            jsPDFData.save('userData.pdf')
        })
    }
    return(
        <div className="Results">
            <div ref={pdf}>
            <h1 className="First">Go Policy/Good.in</h1>
            <h1 className="First">Registration details of Customer</h1>
            <table className="Results-table">
                <thead>
                    <tr>
                        <th style={{fontWeight:"900"}}>TYPE</th>
                        <th style={{fontWeight:"900"}}>DETAILS</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(formData).map(([type,value])=>{
                        return(
                            <>
                            <tr key={type}>
                            <td>{type.toUpperCase()}</td>
                            <td>{value.toUpperCase()}</td>
                        </tr>
                            </>
                        )
                    })}
                </tbody>

            </table>
                </div>            

            <div>
                <Button className="Results-home-btn" variant="info" onClick={()=>{props.onGoToHomepage()}}>GO TO HOME</Button>
                <Button className="Results-download-btn" onClick={()=>{handleDownload()}} variant="success">Download</Button>
            </div>

        </div>
    )
}