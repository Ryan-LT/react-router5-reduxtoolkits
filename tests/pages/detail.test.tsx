import React from 'react';
import { Detail } from '@pages';
import { render } from '../render-test';
import '@testing-library/jest-dom';

describe('<Detail/>', () => {
  it('render Detail component', () => {
    const component = render(<Detail />);
    expect(component).toBeTruthy();
  });
});
