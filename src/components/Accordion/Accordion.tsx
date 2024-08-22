import React from 'react';

type ItemType = {
    title: string;
    value: number;
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}
export const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}
type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
}
type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}
const AccordionBody = (props: AccordionBodyPropsType) => {
    return <ul>
        {props.items.map((item, index) => <li onClick={() => props.onClick(item.value)} key={index}>{item.title}</li>)}
    </ul>
}