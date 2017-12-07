import { createStore, combineReducers } from 'redux';
import {INCREMENT, DECREMENT, NEW_PLAYER, ADD_TODO, DELETE, REMOVE} from './actions/action';

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

function currentPlayer(state = 'John', action) {
  switch (action.type) {
    case NEW_PLAYER:
      return action.payload;
    default:
      return state;
  }
}

function todos(state = ['laundry', 'study Redux'], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE:
      const removeItem = action.data.todo;
      return state.filter(item => item !== removeItem);
    case DELETE:
      return [];
    default:
      return state;
  }
}
function helloLeah(state = 'Leah'){
  return state;
}

export default combineReducers({ counter, currentPlayer, todos, helloLeah });
