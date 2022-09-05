import { useEffect, useState } from "react";
import { PDF_BASE64 } from "./base64";

function App() {
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    const linkSource = `data:application/pdf;base64,${PDF_BASE64}`;

    fetch(linkSource)
      .then((res) => res.blob())
      .then((blob) => {
        const fileUrl = URL.createObjectURL(blob);
        setFileUrl(fileUrl);
      });
  }, []);

  return (
    <div className="App">
      <a href={fileUrl} target="_blank" rel="noreferrer">
        Download PDF
      </a>
    </div>
  );
}

export default App;
