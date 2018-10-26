import { combineReducers } from 'redux';

import interfaceReducer from './interfaceReducer';
import routingReducer from './routingReducer';

const rootReducer = combineReducers({
    interfaceReducer: interfaceReducer,
    routingReducer: routingReducer
});

export default rootReducer;