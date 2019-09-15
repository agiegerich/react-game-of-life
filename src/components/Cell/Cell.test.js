import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import App from './App';
import Cell from './Cell.js'

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
    render(<Cell />, container);
});
