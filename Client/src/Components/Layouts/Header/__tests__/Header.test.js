import { shallow } from 'enzyme';
import React  from 'react';
import Header from '../Header';


describe("the header component", () => {

    it("should render correctly header component", () => {
        const wrapper = shallow(<Header />)
    });

});
