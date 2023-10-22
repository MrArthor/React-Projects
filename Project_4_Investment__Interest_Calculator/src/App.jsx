/** @format */
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import FormComponent from "./Components/FormComponent/FormComponent";
import TableComponent from "./Components/TableComponent/TableComponent";

function App() {
    const [Data, setData] = useState([]);
    const dataHandler = (data) => {
        setData(data);
        //console.log(data['Savings']);
       // console.log(data);
    }
  return (
    <div>
      <Header />
      <FormComponent PropData={dataHandler} />
      <TableComponent Data={Data} /> {/* Todo: Show below table conditionally (only once result data is available) */}{" "}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
