import {action} from '@storybook/addon-actions';
import {Select} from './Select';
import React, {useState} from 'react';


export default {
    title: 'Select stories',
    component: Select
}
const cityArr=[
    {title: 'Minsk', value: '1'},
    {title: 'Moscow', value: '2'},
    {title: 'Omsk', value: '3'},
]
export const BaseExaple = () => {
    const [value, setValue] = useState('2')
    return <Select items={cityArr} value={value} onChange={setValue}/>
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <Select value={value} items={cityArr} onChange={setValue}/>
}