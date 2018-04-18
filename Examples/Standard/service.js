import {createStore} from 'redux';

import counter from '../Shared/Reducers/counter'
import connect from "../../Service";

const store = createStore(counter, 0);

connect(store).then(() => console.log('store connected'))

