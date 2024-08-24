import React, {memo} from 'react';
import s from './UnControlledOnOff.module.css'

type UnControlledOnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?:boolean
}
export const UnControlledOnOff = (props: UnControlledOnOffPropsType) => {
    console.log('OnOff rendered')
    const [on, setOn] = React.useState(props.defaultOn ? props.defaultOn : false)
    const onCliked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offCliked = () => {
        setOn(false)
        props.onChange(false)
    }
    return <div className={s.onOff}>

        <div onClick={onCliked} className={on ? s.on : s.default}>On</div>
        <div onClick={offCliked} className={!on ? s.Off : s.default}>Off</div>
        <div className={`${on ? s.on : s.Off} ${s.circle}`}></div>
    </div>
};

export const UnControlledOnOffMemo=memo(UnControlledOnOff)