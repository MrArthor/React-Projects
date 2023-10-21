import Header from './Components/Header/Header';
import FormComponent from './Components/FormComponent/FormComponent';
import TableComponent from './Components/TableComponent/TableComponent'
function App() {
 
  return (
    <div>
    <Header/>
<FormComponent/>
      <TableComponent/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

     
    </div>
  );
}

export default App;
