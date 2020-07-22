import { shallow } from 'enzyme';
import React   from 'react';
import Details from '../Details';


describe("the Details component", () => {

    it("should render correctly Details component", () => {
        const wrapper = shallow(<Details />)
    });

});
