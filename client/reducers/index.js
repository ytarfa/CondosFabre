import { combineReducers } from 'redux';

import interfaceReducer from './interfaceReducer';

const rootReducer = combineReducers({
    interfaceReducer: interfaceReducer
});

export default rootReducer;