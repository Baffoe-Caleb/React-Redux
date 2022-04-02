import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootSaga from './sagas/index';
import { reducers } from './reducers/index';

import middleware, { sagaMiddleware } from './middleware';
import immutablePersistenceTransform from './immutable-persistence-transform'

const reducer = persistReducer(
    {
        key: 'root', // key is required
        storage, // storage is now required
        transforms: [immutablePersistenceTransform]
    },
    reducers,
);

/* istanbul ignore next */
const configStore = (initialState = {}) => {
    const store = createStore(reducer, initialState, compose(applyMiddleware(...middleware)));

    sagaMiddleware.run(rootSaga);

    return {
        persistor: persistStore(store),
        store,
    };
};

export const { store, persistor } = configStore();
