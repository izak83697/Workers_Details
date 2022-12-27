import { Input } from "./Input";
import PropTypes from 'prop-types';
export function AddWorkers(props) {
  //enters details of each worker into the state of details by props
  function addDetails(event) {
    const name = event.target.name;
    const value = event.target.value;
    props.setDetails((prev) => ({ ...prev, [name]: value }));
  }

  //Checks that all the fields of the details are complete and also that this Id does not exist in the system and then enters into the workers array
  function addWorkerToArray() {
    let arr = props.arrWorkers;
    if (props.details.Name && props.details.Age && props.details.ID) {
      let isExists = -1;
      if (arr.length >= 1) {
        isExists = arr.findIndex(
          (item) => item.ID === props.details.ID
        );
      }
      if (isExists !== -1) {
        alert("ID already exists");
      } else {
        arr.push(props.details);
        props.setArrWorkers(arr);
        props.setDetails({});
      }
    } else {
      alert("Please fill in all fields");
    }
  }

  return (
    <div>
      <form>
        <Input
          label="Name"
          name="Name"
          type="text"
          value={props.details.Name || ""}
          func_onChange={addDetails}
          placeholder="Name"
        />
        <Input
          label="Age"
          name="Age"
          type="number"
          value={props.details.Age || ""}
          func_onChange={addDetails}
          placeholder="Age"
        />
        <Input
          label="ID"
          name="ID"
          type="text"
          value={props.details.ID || ""}
          func_onChange={addDetails}
          placeholder="profession"
        />

        <div style={{textAlign: "center"}}><input type="button" value="Add Worker" onClick={addWorkerToArray}/></div>
      </form>
    </div>
  );
}
AddWorkers.propTypes = {
  details: PropTypes.object,
  arrWorkers:PropTypes.array
};
