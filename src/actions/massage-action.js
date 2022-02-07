import {SUCCESS,PRIMARY,SECONDARY,ERROR,INFO,WARNING} from "./types/types-const";


export const MassageAction =()=>{
return{
    type: SUCCESS
}
}

export const GetMassageFromInput=(value)=>{
    return{
        type: "Input",
        payload: value
    }
}

export const PrimaryAction=(primaryValue)=>{
return{
    type: PRIMARY,
    payload: primaryValue
}
}

export const SecondaryAction=(secondaryValue)=>{
    return{
        type:SECONDARY,
        payload:secondaryValue,
    }
}

export const ErrorAction=(errorValue)=>{
    return{
        type:ERROR,
        payload:errorValue,
    }
}
export const InfoAction=(infoValue)=>{
    return{
        type:INFO,
        payload:infoValue,
    }
}

export const WarningAction=(warningValue)=>{
    return{
        type: WARNING,
        payload:warningValue,
    }
}