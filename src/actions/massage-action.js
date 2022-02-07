const Success = "Success";


export const MassageAction =()=>{
return{
    type: Success
}
}

export const GetMassageFromInput=(value)=>{
    return{
        type: "Input",
        payload: value
    }
}

export const PrimaryAction=()=>{
return{
    type: "primary"
}
}

export const SecondaryAction=()=>{
    return{
        type:"secondary"
    }
}

export const ErrorAction=()=>{
    return{
        type:"error"
    }
}
export const InfoAction=()=>{
    return{
        type:"info"
    }
}

export const WarningAction=()=>{
    return{
        type: "warning"
    }
}