import { combineReducers } from 'redux';

import interfaceReducer from './interfaceReducer';
import routingReducer from './routingReducer';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
    interfaceReducer: interfaceReducer,
    routingReducer: routingReducer,
    contactReducer: contactReducer
});

export default rootReducer;