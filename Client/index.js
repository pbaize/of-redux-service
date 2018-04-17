import { createStore, applyMiddleware, combineReducers } from 'redux';

const r = require('ramda')

export function init (options, sharedStateActionName = 'shared_state_update') {
    const clientP = fin.desktop.Service.connect(options)

    function createClientMiddleWare(shouldDispatchAction = (action) => action.type === sharedStateChangeName ? false : action) {
        return store => next => action => {
            const toD = shouldDispatchAction(action)
            if (toD) {
                clientP.then(client => client.dispatch('dispatch-action', toD))
            } else {
                next(action)
            }
        }
    }

    function defaultReducer (state = {}, action) {
      return action.type === sharedStateActionName ? action.payload : state
    }

    async function connect(store, updateActionCreator = (payload) => ({type: sharedStateActionName, payload})) {
        const client = await clientP
        const update = r.compose(store.dispatch.bind(dispatch), updateActionCreator)
        client.register('state-change', update)
        const initialState = await client.dispatch('getState');
        update(initialState);
        return client
    }

    return {
        createClientMiddleWare, connect, defaultReducer
    }
}