import React from 'react';
import { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from 'components/atoms/title/title';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Rendering component <Title/>', () => {
   it('renders component without crashing', () => {
      shallow(<Title />);
   });
   it('renders component without crashing', () => {
      const wrapper = shallow(<Title />);
      const header = wrapper.find('#mainTitle')
         .length;
      expect(header).toBe(1);
   });
});
