import {Scene,Router,Actions} from 'react-native-router-flux';
import React from 'react';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';



class RouterComponent extends React.Component{
    render(){
      return (
        <Router>
          <Scene key="root" hideNavBar>
            <Scene key="auth">
              <Scene key="login" component={LoginForm} title="Please Log In" initial/>
            </Scene>
            
             <Scene key="main">
               
               <Scene 
                 key="EmployeeList" 
                 component={EmployeeList} 
                 title="Employees"
                 rightTitle="Add"
                 onRight={()=>{Actions.EmployeeCreate()}}
                 initial
                 />

             <Scene
               key="EmployeeCreate"
               title="Create Employee"
               component={EmployeeCreate}
             />  
            

             <Scene
               key="EmployeeEdit"
               title="Edit Employee"
               component={EmployeeEdit}
             />
               
             </Scene>

             


          </Scene>
        </Router>
      )
    }
}




export default RouterComponent;