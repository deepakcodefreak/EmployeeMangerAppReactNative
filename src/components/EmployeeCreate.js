import React from 'react';
import {View,Text,Picker} from 'react-native';
import {Card,CardSection,Button, Input} from './common';
import {connect} from 'react-redux';
import {EmployeeUpdate,EmployeeCreateAction}  from '../actions'
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends React.Component{
    onButtonPress = ()=>{
        const {name,phone,shift} = this.props;
        this.props.EmployeeCreateAction({name,phone,shift})
    }

    render(){
        console.log(this.props.employee)
        return (
          <Card>
            <EmployeeForm {...this.props}/>
            
            <CardSection>
                <Button onPress={this.onButtonPress}>
                    Create
                </Button>
            </CardSection>

          </Card>
        )
    }
}

const mapStateToProps = (state)=>{
    const {name,phone,shift} = state.employee;
    console.log(state);
    return {name,phone,shift};
}


export default connect(mapStateToProps,{EmployeeUpdate,EmployeeCreateAction})(EmployeeCreate);