import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import getMoviesReducer from './movies/slice'
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const reducers = {
    getMovies: getMoviesReducer,

}
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: combineReducers(reducers),
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            thunk: false,
        }),
        sagaMiddleware,
    ],

});

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga])
};


export default store;