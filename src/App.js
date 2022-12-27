import "./App.css";
import { useState } from "react";
import { AddWorkers } from "./components/AddWorkers";
import { WorkersDetails } from "./components/WorkersDetails";
import { ArraySorting } from "./components/ArraySorting";
function App() {
  const [details, setDetails] = useState({});
  const [arrWorkers, setArrWorkers] = useState([]);
  return (
    <div className="App">
    <div className="containerApp">
    <h3>Welcome to NICE interview Workers app</h3>
      <AddWorkers details={details} setDetails={setDetails} setArrWorkers={setArrWorkers} arrWorkers={arrWorkers}/>
      <ArraySorting setArrWorkers={setArrWorkers} arrWorkers={arrWorkers}/>
      <WorkersDetails arrWorkers={arrWorkers} setArrWorkers={setArrWorkers}/>
    </div>
    </div>
  );
}

export default App;
