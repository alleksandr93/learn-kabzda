import React from 'react';
import './App.css';

import {OnOff} from './components/OnOff/OnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';

const App = () => {
    console.log('App rendering')
    return (
        <div>
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            <OnOff/>
        <UnControlledAccordion titleValue={'Menu'}/>
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
