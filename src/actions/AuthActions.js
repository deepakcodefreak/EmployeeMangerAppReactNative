import firebase from '@firebase/app'
import '@firebase/auth';
import {Actions} from 'react-native-router-flux';

export const EmailChanged = (text)=>{
   return {
      type:'Email_Changed',
      payload:text
   } 
}

export const PasswordChanged = (text)=>{
    return {
        type:'Password_Changed',
        payload:text
    }
}

export const LogIn = ({email,password})=>{
   return (dispatch)=>{
          dispatch({type:'Log_In_User'})

       firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user=>onLogInSuccess(dispatch,user))
        .catch((error)=>{
            console.log(error);
           firebase.auth().createUserWithEmailAndPassword(email,password)
           .then(user=>onLogInSuccess(dispatch,user))
           .catch(()=>onLogInFail(dispatch))
        })
   }
}


const onLogInSuccess = (dispatch,user)=>{
    dispatch({type:'Log_In',payload:user});
    Actions.main();
}

const onLogInFail = (dispatch)=>{
    dispatch({type:'Log_In_Fail'})
}