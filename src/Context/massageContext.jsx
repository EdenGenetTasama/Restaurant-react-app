import react,{useReducer} from "react"
import { MassageReducer } from "../reducer/massage-reducer";

export const MassageContext =react.createContext();


const MassageProvider=({children})=>{
    const [massage , massageDispatch] = useReducer(MassageReducer,"Empty Massage");
    return(
        <MassageContext.Provider value={{massage , massageDispatch}}>
        {children}
        </MassageContext.Provider>
    )
}

export default MassageProvider;