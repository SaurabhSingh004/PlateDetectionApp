import React, { useState,useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
function ServiceDetection() {
    const [selectedFile,setSelectedFile]=useState(null);
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
    }

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append(
          "myFile",
          selectedFile,
          selectedFile.name
        );
      
        console.log(selectedFile);
      
    //    axios.post("api/uploadfile", formData);
      };
      
    let base64String = "";
    let imageBase64Stringsep="";
    const toDataURL=()=> {
      var file = document.querySelector(
        'input[type=file]')['files'][0];
    var reader = new FileReader();
    console.log("next");
    reader.onload = function () {
        base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");
        imageBase64Stringsep = base64String;
        // alert(imageBase64Stringsep);
        console.log(base64String);
    }
    reader.readAsDataURL(file);
    }
    return (
        <>
      <div className="form-container">
        <div className="row">
            <input type='file' onChange={onSelectFile} />
            <button onClick={toDataURL}>
              Send Image!!
            </button>
            </div>
            <div className='row'>
            {selectedFile &&  <img src={preview} /> }
            </div>
      </div>
      <div className='initmap'>
      <Link to={`/initmap`} style={{ textDecoration: "none" }}>
        <button >Click To Track</button>
      </Link>
      </div>

      </>
    );
  }
  
  export default ServiceDetection;
  