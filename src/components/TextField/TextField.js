import '../../App.css';

function TextField({ type, inputValue, changeInputText }) {
  return (
    <input type={type}  className="textField" value={inputValue} onChange={changeInputText}/>
  );
}

export default TextField;