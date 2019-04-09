import Card2 from '../';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import testData from './testData';

enzyme.configure({ adapter: new Adapter() });

describe('Card2 component', () => {
  it('Should render successfully', () => {
    const component = shallow(<Card2 element={testData[0]} />);
    expect(component.exists()).toEqual(true);
  });

  it('Should render link', () => {
    const component = shallow(<Card2 element={testData[0]} />);
    expect(component.find('a').length).toEqual(1);
  });

  it('Should render link with correct url', () => {
    const component = shallow(<Card2 element={testData[0]} />);
    expect(component.find("a").prop("href")).toEqual('https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f4c77fa1edb3ba_1280.jpg');
  });

});