import React from 'react';
import {View,Text,FlatList,TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
// import {EmployeesList} from '../actions'
import {CardSection} from './common'
import {Actions} from 'react-native-router-flux';



class ListItem extends React.Component{
    
  
    onPressRow = ()=>{
        Actions.EmployeeEdit({employee:this.props.employee});
    }

        render(){
            // console.log(this.props.employee)
            return (
                <TouchableWithoutFeedback onPress={this.onPressRow}>
                    <View>
                        <CardSection>
                            <Text>{this.props.employee.name}</Text>
                        </CardSection>
                    </View>
                </TouchableWithoutFeedback>
            )
        }

   
}

export default ListItem;