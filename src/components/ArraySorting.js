import PropTypes from 'prop-types';
export function ArraySorting(props) {
    //sort ing array of workers according to name or age
  function sortName() {
    const byName = [...props.arrWorkers].sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    props.setArrWorkers(byName);
  }
  function sortAgeUp() {
    const byAgeUp = [...props.arrWorkers].sort((a, b) => a.age - b.age);
    props.setArrWorkers(byAgeUp);
  }
  function sortAgeDown() {
    const byAgeDown = [...props.arrWorkers].sort((a, b) => b.age - a.age);
    props.setArrWorkers(byAgeDown);
  }

  return (
    <div>
    <br/>
      <div style={{textAlign:"center"}}>Choose to sort the array of workers by...</div>
      <button style={{marginLeft: "5px"}} onClick={sortName}>sort by name</button>
      <button style={{marginLeft: "5px"}} onClick={sortAgeUp}>sort by age up</button>
      <button style={{marginLeft: "5px"}} onClick={sortAgeDown}>sort by age down</button>
    </div>
  );
}
ArraySorting.propTypes = {
  arrWorkers: PropTypes.array,
  setArrWorkers: PropTypes.func
};