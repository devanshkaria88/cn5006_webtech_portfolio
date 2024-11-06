import "./App.css";

function AppColor(props) {
  function changeBackgroundColor() {
    document.body.style.backgroundColor = props.color;
    alert("Background color changed to " + props.color);
  }

  return (
    <div className="App">
      <h1>{props.heading}</h1>
      <label>{props.lbl}</label>
      <input type="text" placeholder="Enter your name" />
      <button onClick={changeBackgroundColor}>Change to {props.color}</button>
    </div>
  );
}

export default AppColor;
