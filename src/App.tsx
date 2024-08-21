import React from 'react';

import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

const App = () => {
    console.log('App rendering')
    return (
        <div>
            <PageTitle title={'This is APP Component'}/>
            <PageTitle title={'My Friends'}/>
            <Rating value={2}/>
            <Accordion title={'Menu'}/>
            <Accordion title={'Not Menu'}/>
            <Rating value={4}/>
        </div>
    );
}
type PageTitleProps={
    title: string
}
const PageTitle = (props:PageTitleProps) => {
    return <h1>{props.title}</h1>
}
export default App;
