import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

//REDUX SET-UP
import rootReducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
)

import AppContainer from './AppContainer';
const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={AppContainer} />
        </BrowserRouter>
    </Provider>,
    root
);