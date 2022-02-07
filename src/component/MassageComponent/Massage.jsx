import {useReducer, useState} from "react";
import {MassageReducer} from "../../reducer/massage-reducer";
import {MassageAction,GetMassageFromInput ,PrimaryAction,SecondaryAction , ErrorAction,InfoAction,WarningAction } from "../../actions/massage-action";

const Massage = () => {
const [massage , dispatch] = useReducer(MassageReducer,"Massage");
const [inputChange , setInputChange ] = useState("");

const ChangeState=()=>{
    dispatch(MassageAction());
}
const valueInput=(event)=>{
  setInputChange(event.target.value) ;
}

const InputMassage=()=>{
  dispatch(GetMassageFromInput(inputChange))
}


  return (
    <div>
      <h1>Massage Component</h1>
      <div>{massage}</div>
      <input type="text" placeholder="Enter Massage" onChange={valueInput}/>
      <button type="button" onClick={InputMassage}>Change</button>
    </div>
  );
};

export default Massage;
