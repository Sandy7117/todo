import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import Sum from './Sum1';

describe('test app',()=>{
    it('test sum',()=>{
        const wrapper = shallow(<Sum />);
        expect(wrapper.exists('.sum')).toEqual(true)
        // console.log(wrapper.debug())
    })
})