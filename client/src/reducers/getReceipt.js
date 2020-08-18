import {
  GetReceipt,
  Loading
} from '../actions/types'

const initialState = {
    receipt:[],
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {
      case GetReceipt:
        return {
          ...state,
          receipt: action.payload,
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
