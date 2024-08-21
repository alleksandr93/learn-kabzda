import React from 'react';
import './App.css';

import {OnOff} from './components/OnOff/OnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';

const App = () => {
    const [ratingValue, setRatingValue] = React.useState<RatingValueType>(1);
    const [accordionCollabsed, setAccordionCollabsed] = React.useState<boolean>(true)
    console.log('App rendering')
    return (
        <div>
            <Accordion titleValue={'Menu'} collapsed={accordionCollabsed}setAccordionCollapsed={setAccordionCollabsed}/>

            <OnOff/>
            <UnControlledRating/>
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}
export default App;
