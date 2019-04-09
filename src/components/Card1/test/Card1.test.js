import Card1 from '../';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import testData from './testData';

enzyme.configure({ adapter: new Adapter() });

describe('Card1 component', () => {
  it('Should render successfully', () => {
    const component = shallow(<Card1 element={testData[0]} />);
    expect(component.exists()).toEqual(true);
  });

  it('Should have class name card', () => {
    const component = shallow(<Card1 element={testData[0]} />);
    expect(component.find('.card').length).toEqual(1);
  });

  it('Should not have active class when active prop not given', () => {
    const component = shallow(<Card1 element={testData[0]} />);
    expect(component.find('.active').length).toEqual(0);
  });

  it('Should have active class when active prop given', () => {
    const component = shallow(<Card1 element={testData[0]} active />);
    expect(component.find('.active').length).toEqual(1);
  });
  

  it('Should have class name card', () => {
    const component = shallow(<Card1 element={testData[0]} />);
    expect(component.find("img").prop("src")).toEqual('https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f4c77fa1edb3ba_640.jpg');
  });

  it('Should render tags correct', () => {
    const component = shallow(<Card1 element={testData[0]} />);
    expect(component.find('.info').text()).toEqual('Tags: fantasy, beautiful, dawn');
  });

});