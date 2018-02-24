
const INITAIL_STATE = { all: {} ,post: null };
import {FETCH_POSTS} from '../actions/index'

export default function (state = INITAIL_STATE, action) {
    switch(action.type){
        case "FETCH_POSTS":
            return [{...state, all: action.payload.data}];
        default:{
            return state
        }
    }
}