import pipe from "../Shared/pipe";

export default async function connectStoreToProvider(store, actionHelper = a => a) {
    const provider = await fin.desktop.Service.register()
    provider.register('dispatch-action', pipe(actionHelper, store.dispatch.bind(store)))
    store.subscribe(() => provider.publish('state-change', store.getState()))
    provider.register('getState', () => store.getState())
    return provider
}