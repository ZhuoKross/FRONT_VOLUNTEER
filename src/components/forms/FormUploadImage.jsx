import { useState } from "react";
import axios from "axios";



export default function FormUploadImage(){


    const [selectedFile, setSelectedFile] = useState(null);

    const handleFile = (e) =>{
        setSelectedFile(e.target.files[0])
    }


    const handleUploadEvent = async () =>{
        
    }


    return(
        <div>
            <form>
                
            </form>
        </div>
    );
}