import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Footer from './index';

describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Footer />
      </MemoryRouter>,
    );
  });

  it('should render the component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});
