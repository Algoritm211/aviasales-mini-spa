
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import ticketsReducer from  './tickets-reducer'
import appReducer from  './app-reducer'

const rootReducer = combineReducers({
  appReducer,
  ticketsReducer
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

