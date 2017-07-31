import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyBdoFTnhO7HUrlNGG3wJYdFO-OlavwaDS0',
            authDomain: 'manager-3ee41.firebaseapp.com',
            databaseURL: 'https://manager-3ee41.firebaseio.com',
            storageBucket: 'manager-3ee41.appspot.com',
            messagingSenderId: '770119741783'
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
