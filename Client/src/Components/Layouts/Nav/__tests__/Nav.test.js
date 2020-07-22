import { shallow } from 'enzyme';
import React from 'react';
import Nav   from '../Nav';


describe("the Nav component", () => {

    it("should render correctly Nav component", () => {
        const wrapper = shallow(<Nav />)
    });

});
