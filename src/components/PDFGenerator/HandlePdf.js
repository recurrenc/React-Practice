import React from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const HandlePdf = () => {
  const [data, setData] = React.useState({
    name: "",
    receiptId: Date.now(),
    grade: "",
  });

  const handleChange = (event) =>
    setData({
      ...data,
      [event.target.name]: event.target.value,
      receiptId: Date.now(),
    });

  const createAndDownloadPdf = () => {
    axios
      .post("/create-pdf", data)
      .then(() => axios.get("/fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, `${data.name}.pdf`);
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
        type="text"
        placeholder="Grade"
        name="grade"
        onChange={handleChange}
      />

      <button onClick={createAndDownloadPdf}>Download PDF</button>
    </div>
  );
};

export default HandlePdf;
