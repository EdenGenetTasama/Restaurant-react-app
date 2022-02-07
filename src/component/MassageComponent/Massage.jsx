import {useReducer} from "react";
import {MassageReducer} from "../../reducer/massage-reducer";
import {MassageAction} from "../../actions/massage-action";

const Massage = () => {
const [massage , dispatch] = useReducer(MassageReducer,"Massage");

const ChangeState=()=>{
    dispatch(MassageAction);
    console.log(MassageAction.type);
}

  return (
    <div>
      <h1>Massage Component</h1>
      <div>{massage}</div>
      <button type="button" onClick={ChangeState}>Change</button>
    </div>
  );
};

export default Massage;
