import React, {useEffect} from 'react';
import './App.css';
import MainLayout from "./components/MainLayout/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {getAppError, getAppReady} from "./redux/app-reducer/app-selector";
import {getSearchId} from "./redux/app-reducer/app-reducer";
import Loader from "./components/Loader/Loader";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {

  const dispatch = useDispatch()
  const isReady = useSelector(getAppReady)
  const isError = useSelector(getAppError)

  useEffect(() => {
    dispatch(getSearchId())
  }, [dispatch])

  if (isError) {
    return <ErrorPage />
  }

  return (
    <div className="App">
      {isReady ? <MainLayout /> : <Loader/>}
    </div>
  );
}

export default App;
