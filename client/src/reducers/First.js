import {
  Loading,
  FirstTerm,
} from '../actions/types'

const initialState = {
  first:[],
  loading:false,
  msg:''
}

export default function(state= initialState, action) {
  switch (action.type) {

    case FirstTerm:
    return {
      ...state,
      first: action.payload,
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
