import React, {useEffect, useState} from 'react';
import './FilterContainer.scss'
import {useDispatch} from "react-redux";
import { setNumberTransfers } from '../../redux/filter-reducer/filter-reducer';

const FilterContainer: React.FC = () => {

  const dispatch = useDispatch()
  const [numberOfTransfers, setNumberOfTransfers] = useState<number[]>([])

  console.log(numberOfTransfers)

  const onChangeTransfer = (transfersNumber: number) => {
    if (!numberOfTransfers.includes(transfersNumber)) {
      setNumberOfTransfers(prevState => [...prevState, transfersNumber])
    } else {
      setNumberOfTransfers(prevState => prevState.filter(num => num !== transfersNumber))
    }
  }

  useEffect(() => {
    dispatch(setNumberTransfers({numberOfTransfers}))
  }, [dispatch, numberOfTransfers])

  return (
    <div className={'fContainer'}>
      <div className="fContainer__header">
        Количество пересадок
      </div>
      <div className="fContainer__filters">
        <div>
          <input type="checkbox" id="all" onClick={() => onChangeTransfer(-1)}/>
          <label htmlFor="all">Все</label>
        </div>
        <div>
          <input type="checkbox" id="without_transfer" onClick={() => onChangeTransfer(0)} />
          <label htmlFor="without_transfer">Без пересадок</label>
        </div>
        <div>
          <input type="checkbox" id="1_transfer" onClick={() => onChangeTransfer(1)}/>
          <label htmlFor="1_transfer">1 пересадка</label>
        </div>
        <div>
          <input type="checkbox" id="2_transfer" onClick={() => onChangeTransfer(2)}/>
          <label htmlFor="2_transfer">2 пересадки</label>
        </div>
        <div>
          <input type="checkbox" id="3_transfer" onClick={() => onChangeTransfer(3)}/>
          <label htmlFor="3_transfer">3 пересадки</label>
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
