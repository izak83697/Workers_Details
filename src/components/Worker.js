export default function Worker(props) {
  //details of worker with avater
  return (
    <div className="worker">
      <div className="conainerImgAndDetailsOfWorker">
        <div className="pictureFrame">
          <img
            src="programmer.png"
            alt="programmer"
            style={{ width: "50px", height: "60px" }}
          />
        </div>
        <div className="workerDetails">
          <div>Name: {props.name}</div>
          <div>Age: {props.age}</div>
          <div>ID: {props.id}</div>
        </div>
      </div>

      <div className="conainerTrashCanIcon">
       <img className="img"
          src="trash-can.png"
          alt="trash-can"
          style={{ width: "20px", height: "20px" }}
          onClick={props.delete}
        />
      </div>
    </div>
  );
}
