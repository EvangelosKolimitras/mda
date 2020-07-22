import { shallow } from 'enzyme';
import React         from 'react';
import FigureCaption from '../FigureCaption';


describe("the FigureCaption component", () => {

    it("should render correctly FigureCaption component", () => {
        const wrapper = shallow(<FigureCaption />)
    });

});
