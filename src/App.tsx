import React from 'react';

import './App.css';

const App = () => {
    console.log('App rendering')
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}
const AppTitle = () => {
    return <>This is APP Component</>
}
const Rating = () => {
    console.log('Rating rendering')
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}
const Accordion = () => {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>
}
const AccordionTitle=()=> {
    return <h3>Меню</h3>
}
const AccordionBody=()=> {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
const Star = () => {
    console.log('Star rendering')
    return <div>Star</div>
}
export default App;
