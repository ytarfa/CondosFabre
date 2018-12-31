import { combineReducers } from 'redux';

import interfaceReducer from './interfaceReducer';
import routingReducer from './routingReducer';
import contactReducer from './contactReducer';
import quartierReducer from './quartierReducer';

const rootReducer = combineReducers({
    interfaceReducer: interfaceReducer,
    routingReducer: routingReducer,
    contactReducer: contactReducer,
    quartierReducer: quartierReducer
});

export default rootReducer;