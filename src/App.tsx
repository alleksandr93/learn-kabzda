import React from 'react';
import './App.css';

import {OnOff} from './components/OnOff/OnOff';
import {
    UnControlledAccordion,
    UnControlledAccordionMemo
} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion, AccordionMemo} from './components/Accordion/Accordion';
import {UnControlledOnOff} from './components/UnControlledOnOff/UnControlledOnOff';
import {Select} from './components/Select/Select';

const App = () => {
    const [ratingValue, setRatingValue] = React.useState<RatingValueType>(1);
    const [accordionCollabsed, setAccordionCollabsed] = React.useState<boolean>(true)
    const [switchOn, setSwitchOn] = React.useState<boolean>(false)
    console.log(switchOn)
    console.log('App rendering')
    const cityArr = [
        {title: 'Krasnoyarsk', value: 1},
        {title: 'Omsk', value: 2},
        {title: 'Moscow', value: 3},
    ]
    return (
        <div>
            <Select value={cityArr[0].title} onChange={() => {
            }} items={cityArr}/>
            <UnControlledAccordionMemo titleValue={'Menu'}/>
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
