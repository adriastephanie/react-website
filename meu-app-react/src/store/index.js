import { createStore } from 'redux';
import ussuarioReducer from './usuarioReducer';
import { persistReducer, persisteStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
    key: 'siteeventos',
    storage,
}

const persistedReducer = persistReducer(persistConfig, ussuarioReducer);


const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };