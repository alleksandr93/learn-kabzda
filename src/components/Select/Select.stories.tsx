import {action} from '@storybook/addon-actions';
import {Select} from './Select';
import React, {useState} from 'react';


export default {
    title: 'Select stories',
    component: Select
}
const cityArr=[
    {title: 'Krasnoyarsk', value: 1},
    {title: 'Omsk', value: 2},
    {title: 'Moscow', value: 3},
]
export const testSelect = () => {

    return <Select items={cityArr} value={'Krasnoyars'} onChange={()=>{}}/>
}