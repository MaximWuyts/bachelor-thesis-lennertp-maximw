import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import devToolsEnhancer from 'remote-redux-devtools';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from "redux";
import reducers from './src/reducers/index.js';


const store = createStore(reducers, {}, devToolsEnhancer({ realtime: true }));

const AppContainer = () => {
    return (
        <Provider store={store} >
            <App />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => AppContainer);
