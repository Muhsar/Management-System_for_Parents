import {
  Loading,
  SecondTerm,
} from '../actions/types'

const initialState = {
  second:[],
  loading:false,
  msg:''
}

export default function(state= initialState, action) {
  switch (action.type) {

    case SecondTerm:
    return {
      ...state,
      second: action.payload,
      loading: false
    };

    case Loading:
    return {
      ...state,
      loading: true
    };
    default:
    return state;
  }
}
