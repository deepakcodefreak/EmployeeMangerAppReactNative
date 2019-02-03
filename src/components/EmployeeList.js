import React from 'react';
import {View,Text,FlatList,TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {EmployeesList} from '../actions'
import {CardSection} from './common'
import {Actions} from 'react-native-router-flux';
import ListItem from './ListItem';


class EmployeeList extends React.Component{
    
    componentDidMount(){
        this.props.EmployeesList();
    }


    renderItem = (item)=>{
        return (
           <View>
               <ListItem employee={item.item}/>
            </View>
        )
        
        
    }

    render(){
        // console.log(this.props.employee)
        return (
            <FlatList
                data={this.props.employees}
                keyExtractor={(item,index)=>item.id}
                renderItem={this.renderItem}
            />
        )
    }
}

const mapStateToProps = (state)=>{
    const t = state.employees;    
    var op = Array();
 
        for (const y in t) {
         for (const z in t[y]) {
          t[y][z]["id"] = z;
          op.push(t[y][z]);
         }
        }
       
    return {employees:op};

}
export default connect(mapStateToProps,{EmployeesList})(EmployeeList);