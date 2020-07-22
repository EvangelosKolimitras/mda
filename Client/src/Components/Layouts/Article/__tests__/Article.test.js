import { shallow } from 'enzyme';
import React   from 'react';
import Article from '../Article';


describe("the Article component", () => {

    it("should render correctly Article component", () => {
        const wrapper = shallow(<Article />)
    });

});
