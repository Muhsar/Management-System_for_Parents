import {GetTotal,
Loading,
} from '../actions/types'

const initialState = {
    total:'',
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {
      case GetTotal:
        return {
          ...state,
          total: action.payload,
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
