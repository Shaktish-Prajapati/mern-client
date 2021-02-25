// define post reducer

import {DELETE,FETCH_ALL,UPDATE,CREATE,LIKE} from '../constants/actionTypes'
// better to use reducer name: "posts" instead of "state" in argument
const postReducer = (posts=[],action)=>{
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...posts,action.payload]
        case UPDATE:
        case LIKE:
            return posts.map(post=>post._id === action.payload._id ? action.payload : post)
        case DELETE:
            return posts.filter(post => post._id !== action.payload)
        default:
            return posts 
    }
}
export default postReducer