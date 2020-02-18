import App from './App';

import React from "react";
import renderer from "react-test-renderer";


test('renders app.js correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
