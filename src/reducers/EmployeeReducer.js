export default (state={name:'',phone:'',shift:'Monday'},action)=>{
    switch(action.type){
        case 'Employee_Update':
            return {...state,[action.payload.props]:action.payload.value}
        case 'Employee_Create':
            return {...state,name:'',phone:''}; 
        case 'Employee_Save_Success':
            return {...state,name:'',phone:'',shift:'Monday'};
        default:
            return state;    
    }
}