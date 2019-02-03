export default AuthReducer = (state={email:'',password:'',user:null,error:'',loading:false},action)=>{
    console.log(action)
      switch(action.type){
          case 'Email_Changed':
           return {...state,email:action.payload}
          case 'Password_Changed':
           return {...state,password:action.payload}
          case 'Log_In':
           return {...state,user:action.payload,error:'',loading:false} 
          case 'Log_In_Fail':
           return {...state,error:'Authentication Failed',password:'',loading:false} 
          case 'Log_In_User':
           return {...state,loading:true,error:''} 
          default :
           return state;  
      }
}