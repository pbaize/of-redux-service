import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'

const rootEl = document.getElementById('root')

export default store => () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl
)
