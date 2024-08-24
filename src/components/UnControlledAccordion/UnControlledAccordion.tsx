import React, {memo, useReducer} from 'react';
import s from './UnControlledAccordion.module.css'
import {reducer, TOGGLE_CONSTANT} from './Reducer';

type UnControlledAccordionPropsType = {
    titleValue: string
}
export const UnControlledAccordion = (props: UnControlledAccordionPropsType) => {

    console.log('Accordion rendering')
    // const [collapsed, setCollapsed] = React.useState<boolean>(true)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})
    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
        <AccordionTitle title={props.titleValue} onClick={() => dispatch({type:TOGGLE_CONSTANT})}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return <h3 className={s.title} onClick={() => props.onClick()}>{props.title}</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
export const UnControlledAccordionMemo=memo(UnControlledAccordion)