import react from 'react';
import Hamburger from 'components/atoms/hamburger/hamburger';
import {configure,shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { interpolate } from 'gsap/gsap-core';
Enzyme.configure({adapter: new adapter()});
describe("<Hamburger>first test",()=>{
    const mockFn=jest.fn();
    const props = {
        hamburgerClicked: mockFn,
   hamburgerAnimStart:true,
   sidebarOpen:true,
    }
it("should render...",()=>{

})
})