import {combineReducers} from 'redux';

import counter from './counter';
import card from './card';

const appReducer = combineReducers({
    counter,
    card
});

export default appReducer;
