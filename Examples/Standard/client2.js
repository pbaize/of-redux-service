import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';

import renderCounter from "../Shared/renderCounter";
import init from '../../Client';

const {createClientMiddleWare, connect, defaultReducer} = init({uuid: 'standard-service'})

const store = createStore(defaultReducer, NaN, applyMiddleware(createClientMiddleWare()))
const root = document.getElementById('root')

ReactDOM.render(<div>connecting to service</div>, root)
store.subscribe(renderCounter(store))

connect(store).then(() => console.log('connected to service')).then(()=> console.log(store.getState()))