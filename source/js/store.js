import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers';

const initStore = (initialStore = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    let middleware;

    if (process.env.NODE_ENV === 'production') {
        middleware = applyMiddleware(sagaMiddleware);
    } else {
        middleware = __REDUX_DEVTOOLS_EXTENSION__
            ? compose(applyMiddleware(sagaMiddleware, logger), __REDUX_DEVTOOLS_EXTENSION__())
            : compose(applyMiddleware(sagaMiddleware, logger));
    }

    const store = createStore(
        rootReducer,
        initialStore,
        middleware
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
};

export default initStore;
