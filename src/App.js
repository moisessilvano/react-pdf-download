import { PDF_BASE64 } from "./base64";

function App() {
  const download = (pdf) => {
    const linkSource = `data:application/pdf;base64,${PDF_BASE64}`;
    const downloadLink = document.createElement("a");
    const fileName = "pdf.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    // ios
    downloadLink.target = "_blank";    
    downloadLink.click();
  };

  return (
    <div className="App">
      <button onClick={() => download()}>Download</button>
    </div>
  );
}

export default App;
