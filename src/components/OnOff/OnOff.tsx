import React, {memo} from 'react';
import s from './OnOff.module.css'
type OnOffPropsType = {
    on:boolean
    onChange:(onOff:boolean) => void
}
export const OnOff = (props:OnOffPropsType) => {
    console.log('OnOff rendered')
    return <div className={s.onOff}>
        <div onClick={()=>props.onChange(true)} className={props.on ? s.on : s.default}>On</div>
        <div onClick={()=>props.onChange(false)} className={!props.on ? s.Off : s.default}>Off</div>
        <div  className={`${props.on ? s.on : s.Off} ${s.circle}`}></div>
    </div>
};
export const OnOffMemo=memo(OnOff)
