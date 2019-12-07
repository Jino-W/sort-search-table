import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import tableDataReducer from '../reducers/tableData'

const configureStore=()=>{
    const store=createStore(combineReducers({
        tableData : tableDataReducer,
    }), applyMiddleware(thunk))
    return store
}

export default configureStore
