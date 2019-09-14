import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  ReactDOM.render(<App />, container);
});
