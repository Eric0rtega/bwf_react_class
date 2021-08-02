




import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const enhancers = [applyMiddleware(...middlewares), monitorReducerEnhancer];

    return createStore(rootReducer, preloadedState, composeWithDevTools(...enhancers))
}