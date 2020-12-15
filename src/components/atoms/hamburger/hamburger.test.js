import React from 'react';
import Hamburger from 'components/atoms/hamburger/hamburger';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

describe('Rendering component <Hamburger/>', () => {
   let wrapper;
   let initialState = {
      hamburgerClicked: () => {},
      hamburgerAnimStart: false,
      sidebarOpen: null,
   };

   const store = mockStore(initialState);
   beforeEach(() => {
      wrapper = mount(
         <Provider store={store}>
            <Hamburger />
         </Provider>,
      );
   });
   it('renders component without crashing', () => {
      wrapper;
   });
   it('check if contains hamburgerComponent', () => {
      expect(
         wrapper.find('#hamburgerComponent')
            .length,
      ).toBe(2);
   });

   // it('check if after click state is ok', () => {
   //     mockFn=jest.fn();
   //     initialState = {
   //         hamburgerClicked: ()=>{},
   //         hamburgerAnimStart: true,
   //         sidebarOpen: null,
   //     }
   //     const elemToClick = wrapper.find("#hamburgerComponent").first();
   //     console.log(elemToClick.debug());
   //     elemToClick.simulate("click");
   //     expect(mockFn).mock.calls.length.toBe(1);
   //   });
});

//Rendering test
