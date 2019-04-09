import Carousel from '../';
import Card1 from '../../Card1';
import React from 'react';
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import testData from './testData';

enzyme.configure({ adapter: new Adapter() });

describe('Carousel component', () => {
  it('Should render successfully', () => {
    const component = shallow(<Carousel Card={Card1} elements={testData} />);
    expect(component.exists()).toEqual(true);
  });

  it('Should have wrapped with column', () => {
    const component = shallow(<Carousel Card={Card1} elements={testData} />);
    expect(component.find('.col').length).toEqual(1);
  });

  it('Should have prev and next buttons', () => {
    const component = shallow(<Carousel Card={Card1} elements={testData} />);
    expect(component.find('.next').length).toEqual(1);
    expect(component.find('.prev').length).toEqual(1);
  });
});