// import firebase from '@firebase/app';
// import '@firebase/auth'
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';




export const EmployeeUpdate = ({props,value}) => {
    return{
        type:'Employee_Update',
        payload:{props,value}
    }
}

export const EmployeeCreateAction = ({name,phone,shift})=>{
    const {currentUser} = firebase.auth();
    return (dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name,phone,shift})
        .then(()=>{
            dispatch({type:'Employee_Create'})
            Actions.pop();
        })
    }
    
}

export const EmployeesList =()=>{
    const {currentUser} = firebase.auth();
    return (dispatch)=>{
         firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value',snapshot=>{
              dispatch({type:'Employees_Fetch_Success',payload:snapshot.val()})
         })
    }
}


export const EmployeeSave = ({name,phone,shift,id})=>{
    console.log(name,phone,shift,id)
    const {currentUser} = firebase.auth();

    return (dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees/${id}`)
         .set({name,phone,shift})
         .then(()=>{
            Actions.EmployeesList();
         })
    }
}

export const EmployeeDelete = ({id})=>{
    console.log(id);
    const {currentUser} = firebase.auth();

    return (dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees/${id}`)
            .remove()
            .then(()=>{
                Actions.EmployeeList();
            })
    }
}