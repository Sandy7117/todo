import Mainpage from "./Mainpage";
import { shallow } from 'enzyme';

let wrapper = shallow(<Mainpage />);
describe('test homepage classes',()=>{
    it('check initial class',()=>{
        expect(wrapper.is('.mainpage_style')).toEqual(true);
    })

    it('app class test',()=>{
        expect(wrapper.exists('.app')).toEqual(true);
    })

    it('container class test',()=>{
        expect(wrapper.exists('.container')).toEqual(true);
    })

    it('text-center class test',()=>{
        expect(wrapper.exists('.text-center')).toEqual(true);
    })

    it('error-handle class test',()=>{
        expect(wrapper.exists('.error-handle')).toEqual(true);
    })

})

describe('test homepage',()=>{
    it('test state',()=>{
    })
})