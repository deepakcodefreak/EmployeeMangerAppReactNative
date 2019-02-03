import React from 'react';
import {View,Text} from 'react-native';
import LoginForm from './components/LoginForm';
import {Provider} from 'react-redux';
import reducers from './reducers/index';
import {createStore,applyMiddleware} from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth'
import ReduxThunk from 'redux-thunk';
import Router from './Router';



class App extends React.Component{

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyDQCGq7cf5-sX6d_9JtoI6TB-OBEzsiDJ0",
            authDomain: "manager-d0f1c.firebaseapp.com",
            databaseURL: "https://manager-d0f1c.firebaseio.com",
            projectId: "manager-d0f1c",
            storageBucket: "manager-d0f1c.appspot.com",
            messagingSenderId: "314544098433"
          };
          firebase.initializeApp(config);
    }

    render(){
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        )
    }
}

export default App;