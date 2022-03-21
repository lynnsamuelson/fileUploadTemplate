import './App.css';
import React, {useState} from 'react'
import {storage} from "./firebase";
import {getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage"

export const FileUploader = ({setFileUrl}) => {
  const [progress, setProgress] = useState(0);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file)
    uploadfiles(file)
  }

  const uploadfiles = (file) => {
    if(!file) return;
    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      )
      setProgress(prog)
    }, (err) => console.log(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => setFileUrl(url));
    }
    )

  }

  return (
    <>
      <form onSubmit={formHandler}>
          <input type="file" className="input" />
          <button type="submit">Upload</button>
      </form>
      <h3>Uploaded {progress} %</h3>
    </>
  );
}

