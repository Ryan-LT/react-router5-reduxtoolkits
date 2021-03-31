import React from 'react';
import { Detail } from '@pages';
import { fireEvent } from '@testing-library/dom';
import { cleanup, render, screen } from '../render-test';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Detail />);

  expect(asFragment()).toMatchSnapshot();
});

describe('<Detail/>', () => {
  it('render Detail component', () => {
    const component = render(<Detail />);
    expect(component).toBeTruthy();
  });

  it('should be default 0', () => {
    const { getByTestId } = render(<Detail />);
    expect(getByTestId('counter-value')).toBeEnabled();
    expect(getByTestId('counter-value')).toHaveTextContent('0');
  });

  it('increase counter', () => {
    const { getByTestId } = render(<Detail />);
    fireEvent.click(getByTestId('increase-button'));
    expect(getByTestId('counter-value')).toHaveTextContent('1');
  });

  it('decrease counter', () => {
    const { getByTestId } = render(<Detail />);
    fireEvent.click(getByTestId('decrease-button'));
    expect(getByTestId('counter-value')).toHaveTextContent('0');
  });

  it('decrease counter async', async () => {
    const component = render(<Detail />);
    const button = component.getByTestId('incease-async-button');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    const counter = await component.findByText('1');
    expect(counter).toHaveTextContent('4');
  });
});
