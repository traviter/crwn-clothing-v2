import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


import { isDevEnvironment, getReduxCompose } from '../utils/environment/environment.utils';
import { rootReducer } from './root-reducer';


import { rootSaga } from './root-saga';
import createSagaMiddleware from 'redux-saga';

// Configure redux keys which persist in local storage to survive browser refresh
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create middleware for redux-saga intercepting and chaining async calls
const sagaMiddleware = createSagaMiddleware();
// Include logger only in development environment
const middleWares = isDevEnvironment() ? [logger, sagaMiddleware] : [sagaMiddleware];
// Allow redux debugger to track compositions in development environment
const composeEnhancer = isDevEnvironment() && getReduxCompose() || compose;

// Compose all middlewares for intercepting redux actions
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
// Create the store from the root reducer with the configured middlewares
export const store = createStore(persistedReducer, undefined, composedEnhancers);

// Initialize the saga middleware now that the store is configured
sagaMiddleware.run(rootSaga);

// Export function for persisting the store in local storage
export const persistor = persistStore(store);