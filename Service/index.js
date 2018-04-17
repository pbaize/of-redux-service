const r = require('ramda')

export default async function connectStoreToProvider(store, actionHelper = r.identity) {
    const provider = await fin.desktop.Service.register()
    provider.register('dispatch-action', r.compose(store.dispatch.bind(store), actionHelper))
    store.subscribe(() => provider.publish('state-change', store.getState()))
    provider.register('getState', () => store.getState())
    return provider
}