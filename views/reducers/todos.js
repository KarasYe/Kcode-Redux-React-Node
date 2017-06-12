import {
  ADD_TODO,
  COMPLETE_TODO
} from '../actions';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, {
          text: action.text,
          completed: false
        }
      ];
    case COMPLETE_TODO:
      let completedState = state[action.index].completed ? false : true;
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: completedState
        }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state
  }
}

export default todos;