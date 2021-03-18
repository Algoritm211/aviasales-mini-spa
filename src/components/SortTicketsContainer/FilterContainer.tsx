import React, {useEffect, useState} from 'react';
import './FilterContainer.scss'
import {useDispatch} from "react-redux";

const FilterContainer: React.FC = () => {

  const dispatch = useDispatch()
  const [numberOfTransfers, setNumberOfTransfers] = useState(-1)

  useEffect(() => {
    dispatch(numberOfTransfers)
  }, [dispatch, numberOfTransfers])

  return (
    <div className={'fContainer'}>
      <div className="fContainer__header">
        Количество пересадок
      </div>
      <div className="fContainer__filters">
        <div>
          <input type="checkbox" id="all" onClick={() => setNumberOfTransfers(-1)}/>
          <label htmlFor="all">Все</label>
        </div>
        <div>
          <input type="checkbox" id="without_transfer" />
          <label htmlFor="without_transfer">Без пересадок</label>
        </div>
        <div>
          <input type="checkbox" id="1_transfer"/>
          <label htmlFor="1_transfer">1 пересадка</label>
        </div>
        <div>
          <input type="checkbox" id="2_transfer"/>
          <label htmlFor="2_transfer">2 пересадки</label>
        </div>
        <div>
          <input type="checkbox" id="3_transfer"/>
          <label htmlFor="3_transfer">3 пересадки</label>
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
