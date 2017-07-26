import { List, fromJS } from 'immutable';

const initialState = List();

const candidates = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_CANDIDATES': 
    return fromJS(action.payload);
  default:
    return state;
  }
};

export default candidates;
