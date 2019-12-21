import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import sinon from "sinon";

Enzyme.configure({ adapter: new EnzymeAdapter() });

global.React = React;
global.shallow = shallow;
global.sinon = sinon;
