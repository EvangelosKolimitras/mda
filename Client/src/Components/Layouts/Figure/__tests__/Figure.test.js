import { shallow } from 'enzyme';
import React  from 'react';
import Figure from '../Figure';


describe("the Figure component", () => {

    it("should render correctly Figure component", () => {
        const wrapper = shallow(<Figure />)
    });

});
