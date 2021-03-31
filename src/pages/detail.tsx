import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line object-curly-newline
import { increment, decrement, State, testNavigateInRedux } from '@store';

const Detail: FunctionComponent = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: State) => state.counter.value);

  const delayCount = (): void => {
    setTimeout(() => {
      dispatch(increment());
    }, 500);
  };

  return (
    <div>
      <button
        type="button"
        data-testid="increase-button"
        onClick={() => dispatch(increment())}
      >
        Increase
      </button>
      <h1 data-testid="counter-value">{counterValue}</h1>
      <button
        type="button"
        data-testid="decrease-button"
        onClick={() => dispatch(decrement())}
      >
        Decrease
      </button>
      <button type="button" onClick={() => dispatch(testNavigateInRedux())}>
        Navigate Back
      </button>
      <button
        type="button"
        data-testid="incease-async-button"
        onClick={() => delayCount()}
      >
        Async Increase
      </button>
    </div>
  );
};

export default Detail;
