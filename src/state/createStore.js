import { createStore } from 'redux';
import combineReducers  from '../reducers/rootReducer';  


// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(combineReducers, preloadedState);
};