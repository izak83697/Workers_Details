import "./App.css";
import { useEffect, useState } from "react";
import { AddWorkers } from "./components/AddWorkers";
import { WorkersDetails } from "./components/WorkersDetails";
import { ArraySorting } from "./components/ArraySorting";
function App() {
  const [arrWorkers, setArrWorkers] = useState(JSON.parse(localStorage.getItem("arrWorkers")));
//saves all workers in localstorage so that even when the page is refreshed, the list of workers will not deleted
  useEffect(() => {
    localStorage.setItem("arrWorkers", JSON.stringify(arrWorkers));
  }, [arrWorkers]);

  return (
    <div className="App">
      <div className="containerApp">
        <h3>Welcome to NICE interview Workers app</h3>
        <AddWorkers setArrWorkers={setArrWorkers} arrWorkers={arrWorkers} />
        <ArraySorting setArrWorkers={setArrWorkers} arrWorkers={arrWorkers} />
        <WorkersDetails arrWorkers={arrWorkers} setArrWorkers={setArrWorkers} />
      </div>
    </div>
  );
}

export default App;
