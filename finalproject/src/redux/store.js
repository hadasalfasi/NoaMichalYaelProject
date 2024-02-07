import { createStore, combineReducers, applyMiddleware } from 'redux';
import contacts from './reducers/contacts';
//import taske from './reducers/taske';

const reducer = combineReducers({ contacts });

// const logAction = (store) => (next) => (action) => {
//     console.log('action: ' + action);
//     return next(action);
// }

// const checkClass = (store) => (next) => (action) => {
//     if (action.type == 'UPDATE_CLASS' && Number(action.payLoad) - Number(store.getState().classNum.classGrade) == 1)
//         console.log('you cant add more than frome 1 class');
//         else{

//         }
// }

const store = createStore(reducer /*,applyMiddleware(logAction, checkClass)*/);
window.store = store;
export default store;
