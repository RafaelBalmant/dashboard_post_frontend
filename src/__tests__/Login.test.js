import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Login from '../components/login';

 ({ adapter: new Adapter() });

describe('Testing App Component', () => {
  it('render successfully', () => {
    const wrapper = shallow(
      <Login />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
