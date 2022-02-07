import { useReducer } from "react";
import { NameReducer } from "../../reducer/name-reducer";
import {
  EdenAction,
  DanielAction,
  YafitAction,
} from "../../actions/name-actions";
const Name = () => {
  const [name, dispatch] = useReducer(NameReducer, "Empty");
  const EdenStyle = {
    border: "5px solid green",
    width: "7%",
  };
  
  const NameOne = () => {
    dispatch(EdenAction());
  };

  const NameTwo = () => {
    dispatch(DanielAction());

  };

  const NameThree = () => {
    dispatch(YafitAction());
  };
  return (
    <div>
        <h2>Name Component:</h2>
      <h3>{name}</h3>
      <button type="button" onClick={NameOne} style={EdenStyle}>
        Eden
      </button>
      <button type="button" onClick={NameTwo} style={EdenStyle}>
        Daniel
      </button>
      <button type="button" onClick={NameThree} style={EdenStyle}>
        Yafit
      </button>
    </div>
  );
};

export default Name;
