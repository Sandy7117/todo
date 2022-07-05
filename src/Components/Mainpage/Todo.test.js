import Todo from './Todo';
import { shallow } from 'enzyme';

let wrapper = shallow(<Todo />);
describe('test homepage classes',()=>{
    it('check initial class',()=>{
        expect(wrapper.is('.todo')).toEqual(true);
    })

    it('table class test',()=>{
        expect(wrapper.exists('.table')).toEqual(true);
    })

    it('title-width class test',()=>{
        expect(wrapper.exists('.title-width')).toEqual(true);
    })

    it('description-width class test',()=>{
        expect(wrapper.exists('.description-width')).toEqual(true);
    })

    it('before-width class test',()=>{
        expect(wrapper.exists('.before-width')).toEqual(true);
    })

    it('status-width class test',()=>{
        expect(wrapper.exists('.status-width')).toEqual(true);
    })

    it('options-width class test',()=>{
        expect(wrapper.exists('.options-width')).toEqual(true);
    })

    it('no of loading-row class test',()=>{
        expect(wrapper.find('.loading-row').length).toBe(2)
    })

})