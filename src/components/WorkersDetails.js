import PropTypes from "prop-types";
import Worker from "./Worker";
export function WorkersDetails(props) {
  //deletes the employee from the array and updates the main state
  function deleteWorker(index) {
    let arr = props.arrWorkers;
    arr[index] = undefined;
    let newArr = arr.filter((item) => {
      return item !== undefined;
    });
    props.setArrWorkers(newArr);
  }
  return (
    <div className="WorkersDetails">
      {Array.isArray(props.arrWorkers) &&
        props.arrWorkers.map((item, index) => {
          return (
            <Worker
              name={item.Name}
              age={item.Age}
              id={item.ID}
              index={index}
              delete={() => deleteWorker(index)}
            />
          );
        })}
    </div>
  );
}
WorkersDetails.propTypes = {
  arrWorkers: PropTypes.array,
};
