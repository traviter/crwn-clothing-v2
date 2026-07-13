import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { isDevEnvironment, getReduxCompose } from '../utils/environment/environment.utils';
import { rootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = isDevEnvironment() ? [logger, thunk] : [thunk];


const composeEnhancer = isDevEnvironment() && getReduxCompose() || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);