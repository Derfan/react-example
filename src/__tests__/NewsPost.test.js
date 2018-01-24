import React from 'react';
import NewsPost from '../NewsPost';
import {shallow} from 'enzyme';

describe('NewsPost component', () => {
  describe('test render', () => {
    const wrapper = shallow(<NewsPost id={1} text={'test'} />);
    it('contain p with text', () => {
      expect(wrapper.find('p')).toHaveLength(1);
      expect(wrapper.find('p').contains('test')).toBeTruthy();
    });
  });
});
