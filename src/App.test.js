import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import App from './App';
import { act } from "react-dom/test-utils";

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  render(<App />, container);
});

it('renders 30 row divs when height is 30', () => {
  act( () => {
    render(<App height={30} width={1}/>, container);
  });
  expect(container.querySelector('div.row').length === 30);
});

it('renders 20 row divs when height is 20', () => {
  act( () => {
    render(<App height={20} width={1}/>, container);
  });
  expect(container.querySelector('div.row').length === 30);
});
