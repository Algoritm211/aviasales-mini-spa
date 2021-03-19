
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import ticketsReducer from  './tickets-reducer/tickets-reducer'
import appReducer from  './app-reducer/app-reducer'
import filterReducer from  './filter-reducer/filter-reducer'

const rootReducer = combineReducers({
  appReducer,
  ticketsReducer,
  filterReducer
})

export type RootState = ReturnType<typeof store.getState>


const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// @ts-ignore
window.__store__ = store

export default store

