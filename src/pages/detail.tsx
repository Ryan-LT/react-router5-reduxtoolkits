import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line object-curly-newline
import { increment, decrement, State, testNavigateInRedux } from '@store';

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
      <button type="button" onClick={() => dispatch(testNavigateInRedux())}>
        Navigate Back
      </button>
    </div>
  );
};

export default Detail;
