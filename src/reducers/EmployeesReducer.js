export default (state={},action)=>{
   
    switch(action.type){
        case 'Employees_Fetch_Success':
            let data = action.payload
            return {...state,data};
        default :
            return  state;
             
    }
}