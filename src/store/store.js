import { createStore, applyMiddleware } from 'redux';

// Middlewares
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// Reducers
import rootReducers from './reducers/rootReducers';

// Sagas
import rootSagas from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewaresArr = [sagaMiddleware];
process.env.NODE_ENV === 'development' && middlewaresArr.push(logger);

const middlewares = applyMiddleware(...middlewaresArr);

let store = createStore(rootReducers, middlewares);
process.env.NODE_ENV === 'development' &&
  (store = createStore(rootReducers, composeWithDevTools(middlewares)));

sagaMiddleware.run(rootSagas);

export default store;
