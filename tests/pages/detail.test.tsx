import React from 'react';
import { Detail } from '@pages';
import { cleanup, render } from '../render-test';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('<Detail/>', () => {
  it('render Detail component', () => {
    const component = render(<Detail />);
    expect(component).toBeTruthy();
  });
});
