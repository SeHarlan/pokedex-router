import React from "react";
import renderer from "react-test-renderer";
import PokeDetail from './PokeDetail.js';

test('renders PokeDetail.js correctly', () => {
  const tree = renderer
    .create(<PokeDetail />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})