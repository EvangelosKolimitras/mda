import { shallow } from 'enzyme';
import React from 'react';
import Time  from '../Time';


describe("the Time component", () => {

    it("should render correctly Time component", () => {
        const wrapper = shallow(<Time />)
    });

});
