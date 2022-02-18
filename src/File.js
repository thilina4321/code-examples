import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
let classes = "";

const ImageUpload = (props) => {
  const imageRef = useRef();
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => setImageUrl(fileReader.result);
      fileReader.readAsDataURL(file);
    }
  }, [file]);

  const inputHandler = () => {
    imageRef.current.click();
  };

  function addBoqFile(){
    
  }

  const pickedImage = (event) => {
    if (event.target.files && event.target.files.length === 1) {
      setFile((_) => event.target.files[0]);
    }
  };

  const sendHttp = async () => {
    const arr = [file, file];

    const fd = new FormData();
    // const a = []
    for (var i = 0; i < arr.length; i++) {
      fd.append("img", arr[i]);
    }
    // fd.append("img", JSON.stringify([file, file]));
    // fd.append("name", 1);
    // fd.append("img", JSON.stringify(arr));
    fd.append("dd", JSON.stringify(file));
    fd.append("va", JSON.stringify([1, 23]));

    axios({
      url: "http://localhost:3500/name",
      method: "POST",
      data: fd,
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <div className={classes.image__upload}>
      <input
        accept=".jpg,.png,.jpeg"
        onChange={pickedImage}
        ref={imageRef}
        type="file"
        
        className={classes.input__file}
        multiple
      />

      <div className={classes.preview}>
        {imageUrl ? (
          <img src={imageUrl} alt="preview" />
        ) : (
          <p>Please pick a image</p>
        )}
      </div>
      <button className={classes.button} onClick={inputHandler} type="button">
        Pick Image
      </button>
      <button onClick={sendHttp}> Send TO Http For Check </button>
    </div>
  );
};

export default ImageUpload;
