import { shallow } from 'enzyme';
import React from 'react';
import Main  from '../Main';


describe("the Main component", () => {

    it("should render correctly Main component", () => {
        const wrapper = shallow(<Main />)
    });

});
