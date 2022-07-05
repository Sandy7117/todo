import Completed from './Completed';
import { shallow } from 'enzyme';

let wrapper = shallow(<Completed />);
describe('test completed component classes',()=>{
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

    it('table class test',()=>{
        expect(wrapper.exists('.table')).toEqual(true);
    })

    it('table-width class test',()=>{
        expect(wrapper.find('.table-width').length).toBe(6)
    })

})