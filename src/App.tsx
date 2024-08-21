import React from 'react';
import './App.css';

import {OnOff} from './components/OnOff/OnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {UnControlledOnOff} from './components/UnControlledOnOff/UnControlledOnOff';

const App = () => {
    const [ratingValue, setRatingValue] = React.useState<RatingValueType>(1);
    const [accordionCollabsed, setAccordionCollabsed] = React.useState<boolean>(true)
    const [switchOn, setSwitchOn] = React.useState<boolean>(false)
    console.log(switchOn)
    console.log('App rendering')
    return (
        <div>
            <Accordion titleValue={'Menu'} collapsed={accordionCollabsed}
                       onChange={()=>setAccordionCollabsed(!accordionCollabsed)}/>
            {/*<OnOff on={switchOn} onChange={(onOff)=>setSwitchOn(onOff)}/>*/}

          <UnControlledOnOff onChange={(on)=>setSwitchOn(on)}/>{switchOn.toString()}

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
