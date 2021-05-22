import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Footer from './index';

describe('<Footer />', () => {
  const container = mount(
    <MemoryRouter initialEntries={['/']}>
      <Footer />
    </MemoryRouter>,
  );

  it('should mount the component', () => {
    expect(container.find('Footer').exists()).toBe(true);
  });

  it('should display 4 spaces', () => {
    expect(container.find('.footer-content').length).toEqual(5);
  });

  it('should display the copyright', () => {
    const year = new Date().getFullYear();
    expect(container.find('.footer-content').at(0).text()).toEqual(`© ${year} - FoodSwap`);
  });

  it('should have the first link on qui-sommes-nous', () => {
    expect(container.find('.footer-link').at(0).props().to).toEqual('/v1/Qui-sommes-nous');
  });

  it('should have the second link on privacy-policy', () => {
    expect(container.find('.footer-mention').at(0).props().to).toEqual('/v1/privacy-policy');
  });

  it('should have the third link on conditions-generales-utilisation', () => {
    expect(container.find('.footer-cgu').at(0).props().to).toEqual('/v1/conditions-generales-utilisation');
  });

  it('should have the third link on #', () => {
    expect(container.find('.footer-haut-de-page').at(0).props().href).toEqual('#');
  });
});
