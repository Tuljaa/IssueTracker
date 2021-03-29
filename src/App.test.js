import { shallow } from 'enzyme';
import App from './App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  let wrapper = shallow(<App/>)
  expect(wrapper.find('div')).toBeTruthy();
});
