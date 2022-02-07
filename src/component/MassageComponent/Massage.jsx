import {useContext, useState} from "react";
import {MassageReducer} from "../../reducer/massage-reducer";
import {MassageAction,GetMassageFromInput ,PrimaryAction,SecondaryAction , ErrorAction,InfoAction,WarningAction } from "../../actions/massage-action";
import { MassageContext } from "../../Context/massageContext";

const Massage = () => {
// const [inputChange , setInputChange ] = useState("");

const {massage , massageDispatch} = useContext(MassageContext);

// const ChangeState=()=>{
//     dispatch(MassageAction());
// }
// const valueInput=(event)=>{
//   setInputChange(event.target.value) ;
// }

// const InputMassage=()=>{
//   dispatch(GetMassageFromInput(inputChange))
// }

const ChangeInputContext = ()=>{
  massageDispatch(PrimaryAction("Blue"))
}

  return (
    <div>
      
      <h1>Massage Component</h1>
      <div>{massage}</div>
      <button type="button" onClick={ChangeInputContext}>Change</button>
      {/* <input type="text" placeholder="Enter Massage" onChange={valueInput}/>
      <button type="button" onClick={InputMassage}>Change</button> */}

    </div>
  );
};

export default Massage;
