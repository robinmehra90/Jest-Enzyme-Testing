import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button Component', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<Button className="primary-button" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    // make our assertion and what we expect to happen
    it('should render without throwing an error', () => {
        expect(shallow(<Button />).find('button.primary-button').exists()).toBe(true)
    })
});