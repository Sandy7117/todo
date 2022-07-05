import CreateTodo from './CreateTodo';
import { shallow } from 'enzyme';

let wrapper = shallow(<CreateTodo />);
describe('test completed component classes',()=>{
    it('check initial class',()=>{
        expect(wrapper.is('.mainpage_style')).toEqual(true);
    })

    it('Login class test',()=>{
        expect(wrapper.exists('.Login')).toEqual(true);
    })

    it('form-control class test',()=>{
        expect(wrapper.exists('.form-control')).toEqual(true);
    })

    it('button-style class test',()=>{
        expect(wrapper.exists('.button-style')).toEqual(true);
    })

    it('back-button class test',()=>{
        expect(wrapper.exists('.back-button')).toEqual(true);
    })


})