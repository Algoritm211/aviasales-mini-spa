import React, {useEffect} from 'react';
import './App.css';
import MainLayout from "./components/MainLayout/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {getAppReady} from "./redux/app-selector";
import {getSearchId} from "./redux/app-reducer";

function App() {

  const dispatch = useDispatch()
  const isReady = useSelector(getAppReady)

  useEffect(() => {
    dispatch(getSearchId())
  }, [])

  if (!isReady) {
    return <div>Загрузка...</div>
  }

  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export default App;
