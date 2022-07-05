import Login from './Login';
import { shallow } from 'enzyme';

let wrapper = shallow(<Login />);
describe('test completed component classes',()=>{
    it('check initial class',()=>{
        expect(wrapper.is('.content_style')).toEqual(true);
    })

    it('navbar class test',()=>{
        expect(wrapper.exists('.navbar')).toEqual(true);
    })

    it('container-fluid class test',()=>{
        expect(wrapper.exists('.container-fluid')).toEqual(true);
    })

    it('navbar-expand-lg class test',()=>{
        expect(wrapper.exists('.navbar-expand-lg')).toEqual(true);
    })

    it('btn class test',()=>{
        expect(wrapper.exists('.btn')).toEqual(true);
    })

    it('Login class test',()=>{
        expect(wrapper.exists('.Login')).toEqual(true);
    })

    it('button-style class test',()=>{
        expect(wrapper.exists('.button-style')).toEqual(true);
    })

    it('error-handle class test',()=>{
        expect(wrapper.exists('.error-handle')).toEqual(true);
    })


})