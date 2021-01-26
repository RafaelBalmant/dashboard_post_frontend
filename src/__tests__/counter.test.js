import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import Counter from '../components/counter';

configure({ adapter: new Adapter() });

describe('Testing App Component', () => {
  it('render successfully', () => {
    const wrapper = shallow(
      <Counter count={5} />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
