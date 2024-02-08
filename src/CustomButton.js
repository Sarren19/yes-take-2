import "./App.css";

export default function CustomButton(props) {
  return (
    <div className="button-styles" onClick={props.onClick}>
      <p>{props.buttonText}</p>
    </div>
  );
}
