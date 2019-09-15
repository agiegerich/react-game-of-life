import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import App from './App';
import { act } from "react-dom/test-utils";
import TestUtil from './TestUtil';

const test = {container: null};
TestUtil.setupBeforeEachAndAfterEach(test);

it('renders without crashing', () => {
  render(<App />, test.container);
});

it('renders 30 row divs when height is 30', () => {
  act( () => {
    render(<App height={30} width={1}/>, test.container);
  });
  expect(test.container.querySelector('div.row').length === 30);
});

it('renders 20 row divs when height is 20', () => {
  act( () => {
    render(<App height={20} width={1}/>, test.container);
  });
  expect(test.container.querySelector('div.row').length === 30);
});
