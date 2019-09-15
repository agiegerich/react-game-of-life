import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import Cell from './Cell.js'
import TestUtil from './TestUtil';

const test = {container: null};
TestUtil.setupBeforeEachAndAfterEach(test);

it('renders without crashing', () => {
    render(<Cell/>, test.container);
});
