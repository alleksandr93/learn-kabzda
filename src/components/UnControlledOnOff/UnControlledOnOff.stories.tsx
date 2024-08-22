import {action} from '@storybook/addon-actions';
import {UnControlledOnOff} from './UnControlledOnOff';
import {useState} from 'react';
import {OnOff} from '../OnOff/OnOff';


export default {
    title: 'UnControlledAccordion stories',
    component: UnControlledOnOff
}

const callback = action('On or Off clicked')
export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UnControlledOnOff defaultOn={false} onChange={callback}/>
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>
export const DefaultInputValue = () => <input defaultValue={'yo'} readOnly={true}/>
