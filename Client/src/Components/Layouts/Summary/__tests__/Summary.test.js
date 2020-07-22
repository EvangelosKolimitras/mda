import { shallow } from 'enzyme';
import React   from 'react';
import Summary from '../Summary';


describe("the Summary component", () => {

    it("should render correctly Summary component", () => {
        const wrapper = shallow(<Summary />)
    });

});
