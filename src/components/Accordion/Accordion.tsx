import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
}
export const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue}
                        setAccordionCollapsed={() => props.setAccordionCollapsed(!props.collapsed)}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}
type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => props.setAccordionCollapsed()}>{props.title}</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}