import React from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const HandlePdf = () => {
  const [state, setState] = React.useState({
    name: "Adrian",
    receiptId: 0,
    price1: 0,
    price2: 0,
  });

  const handleChange = ({ target: { value, name } }) =>
    setState({ [name]: value });

  const createAndDownloadPdf = () => {
    axios
      .post("/create-pdf", state)
      .then(() => axios.get("/fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "generatedDocument.pdf");
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Receipt ID"
        name="receiptId"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Price 1"
        name="price1"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Price 2"
        name="price2"
        onChange={handleChange}
      />
      <button onClick={createAndDownloadPdf}>Download PDF</button>
    </div>
  );
};

export default HandlePdf;
