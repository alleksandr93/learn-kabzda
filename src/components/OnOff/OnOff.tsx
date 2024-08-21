import React from 'react';
import s from './OnOff.module.css'
type OnOffPropsType = {

}
export const OnOff = (props:OnOffPropsType) => {
    console.log('OnOff rendered')
    const [on, setOn] = React.useState<boolean>(true)
    return <div className={s.onOff}>
        <div onClick={()=>setOn(true)} className={on ? s.on : s.default}>On</div>
        <div onClick={()=>setOn(false)} className={!on ? s.Off : s.default}>Off</div>
        <div  className={`${on ? s.on : s.Off} ${s.circle}`}></div>
    </div>
};

