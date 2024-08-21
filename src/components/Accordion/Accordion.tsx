import React from 'react';
type AccordionProps={
    title:string
}
export const Accordion = (props:AccordionProps) => {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
    </div>
}
const AccordionTitle=(props:AccordionProps)=> {
    return <h3>{props.title}</h3>
}
const AccordionBody=()=> {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}