export function Input(props) {
  return (
    <>
    <label>
      {props.label}
      <br />
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.func_onChange}
        placeholder={props.placeholder}
        />
    </label>
    <br />
    <br />
    </>
  );
}
