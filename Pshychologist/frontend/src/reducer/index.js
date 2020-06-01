import {combineReducers} from 'redux'
import BlogReducer from './blog-data'


const allBlogs=combineReducers({
    blogs: BlogReducer
})

export default allBlogs
