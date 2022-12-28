import { useState } from "react";
import { Input } from "./Input";
import PropTypes from "prop-types";
export function AddWorkers(props) {
  const [details, setDetails] = useState({});
  //enters details of each worker into the state of details by props
  function addDetails(event) {
    const name = event.target.name;
    const value = event.target.value;
    setDetails((prev) => ({ ...prev, [name]: value }));
  }

  //Checks that all the fields of the details are complete and also that this Id does not exist in the system and then enters into the workers array
  function addWorkerToArray() {
   let arr = props.arrWorkers;
    console.log(arr);
    if (details.name && details.age && details.ID) {
      let isExists = -1;
      if (arr.length >= 1) {
        isExists = arr.findIndex((item) => item.ID === details.ID);
      }
      if (isExists !== -1) {
        alert("ID already exists");
      } else {
        arr.push(details);
        props.setArrWorkers(arr);
        setDetails({});
      }
    } else {
      alert("Please fill in all fields");
    }
    console.log(arr);
    console.log(props.arrWorkers);
    props.setArrWorkers(props.arrWorkers);
  }

  return (
    <div>
      <form>
        <Input
          label="Name"
          name="name"
          type="text"
          value={details.name || ""}
          func_onChange={addDetails}
          placeholder="Name"
        />
        <Input
          label="Age"
          name="age"
          type="number"
          value={details.age || ""}
          func_onChange={addDetails}
          placeholder="Age"
        />
        <Input
          label="ID"
          name="ID"
          type="text"
          value={details.ID || ""}
          func_onChange={addDetails}
          placeholder="ID"
        />

        <div style={{ textAlign: "center" }}>
          <input type="button" value="Add Worker" onClick={addWorkerToArray} />
        </div>
      </form>
    </div>
  );
}
AddWorkers.propTypes = {
  arrWorkers: PropTypes.array,
  setArrWorkers: PropTypes.func
};
