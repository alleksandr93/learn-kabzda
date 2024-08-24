import {reducer, StateType, TOGGLE_CONSTANT} from './Reducer';
import {action} from '@storybook/addon-actions';


test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false,
    }
    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT});

    //expection
    expect(newState.collapsed).toBe(true);

})
test('collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true,
    }
    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT});

    //expection
    expect(newState.collapsed).toBe(false);

})
test('collapsed should throw error because action type is incorrect', () => {
    //data
    const state: StateType = {
        collapsed: true,
    }
    //action
    expect(() => {
        reducer(state, {type: 'FAKE'})
    }).toThrowError()


})