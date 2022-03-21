import './App.css';
import {useEffect, useState} from 'react'
import {FileUploader} from './FileUploader';

function App() {
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
		console.log("changed file url", fileUrl)
	}, [fileUrl]);

  return (
    <div className="App">
     <FileUploader setFileUrl={setFileUrl} />
    </div>
  );
}

export default App;
