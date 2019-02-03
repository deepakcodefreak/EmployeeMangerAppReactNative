import React from 'react';
import {View,Text,Picker} from 'react-native';
import {CardSection,Input} from './common';
import {EmployeeUpdate} from '../actions'
import {connect} from 'react-redux';

class EmployeeForm extends React.Component{


    render(){
        return (
            <View>
             
                <CardSection>
                    <Input
                        label="Enter Name"
                        placeholder="Deepak"
                        value={this.props.name}
                        onChangeText = {(value)=>this.props.EmployeeUpdate({props:'name',value})}
                     />
                </CardSection>

                <CardSection>
                    <Input
                        label="Enter Phone No."
                        placeholder="8168578812"
                        value={this.props.phone}
                        onChangeText = {(value)=>this.props.EmployeeUpdate({props:'phone',value})}
                    />
                </CardSection>

                <CardSection>
                     <Text style={styles.shiftPickerStyle}>
                         Shift
                    </Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange = {value => this.props.EmployeeUpdate({props:'shift',value})}
                        style={{flex:1}}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>

                    </Picker>
                </CardSection>

            </View>
        )
     }
}



const styles = {
    shiftPickerStyle:{
        fontSize:20,
        paddingTop:10,
        paddingRight:10,
        paddingLeft:10
    }
}


const mapStateToProps = (state)=>{
    const {name,phone,shift} = state.employee;
    return {name,phone,shift};
}


export default connect(mapStateToProps,{EmployeeUpdate})(EmployeeForm);