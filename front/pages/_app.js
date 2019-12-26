import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

const NodeBird = ({ Component, store }) => {
    //next에서 넣어주는 props
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css"
                />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object,
};

const configureStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer =
        process.env.NODE_ENV === 'production'
            ? compose(applyMiddleware(...middlewares))
            : compose(
                  applyMiddleware(...middlewares),
                  !options.isServer &&
                      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
                      ? window.__REDUX_DEVTOOLS_EXTENSION__()
                      : f => f,
              );
    const store = createStore(reducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
};

export default withRedux(configureStore)(NodeBird);
