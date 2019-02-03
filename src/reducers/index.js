import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';
import EmployeesReducer from './EmployeesReducer';


export default combineReducers({
    auth:AuthReducer,
    employee:EmployeeReducer,
    employees:EmployeesReducer
})