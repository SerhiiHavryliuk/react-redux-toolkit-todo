import '../../App.css';

function Button({title, runFunction}) {
  return (
    <button className="button" onClick={runFunction}>
      {title}
    </button>
  );
}

export default Button;