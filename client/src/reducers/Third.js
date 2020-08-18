import {
  Loading,
  ThirdTerm,
} from '../actions/types'

const initialState = {
  third:[],
  loading:false,
  msg:''
}

export default function(state= initialState, action) {
  switch (action.type) {

    case ThirdTerm:
    return {
      ...state,
      third: action.payload,
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
