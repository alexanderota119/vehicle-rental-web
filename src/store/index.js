import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer/user'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducers = combineReducers({
    user: userReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore({
    reducer: persistedReducer,
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})