import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, State } from '@store';

const Detail: FunctionComponent = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: State) => state.counter.value);
  return (
    <div>
      <button type="button" onClick={() => dispatch(increment())}>
        Increase
      </button>
      <h1>{counterValue}</h1>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrease
      </button>
    </div>
  );
};

export default Detail;
