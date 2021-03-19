import React, {useEffect} from 'react';
import './App.css';
import MainLayout from "./components/MainLayout/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {getAppReady} from "./redux/app-reducer/app-selector";
import {getSearchId} from "./redux/app-reducer/app-reducer";
import Loader from "./components/Loader/Loader";

function App() {

  const dispatch = useDispatch()
  const isReady = useSelector(getAppReady)

  useEffect(() => {
    dispatch(getSearchId())
  }, [])

  return (
    <div className="App">
      {isReady ? <MainLayout /> : <Loader/>}
    </div>
  );
}

export default App;
