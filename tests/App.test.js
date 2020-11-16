import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import { expect } from 'chai';
import sinon from 'sinon';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import App from '../client/src/components/App.jsx'
import Form from '../client/src/components/Form.jsx';

describe('<App/>', () => {
  it('contains form component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Form).exists()).to.equal(true);
  });
});